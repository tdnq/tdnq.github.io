import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ShaderStage from "../../componets/shaderStage/index.jsx";
import Hud from "../../componets/hud/index.jsx"
import ControlDataHud from "../../componets/controlHud/index.jsx";
import style from "./index.module.scss";
import * as DataControl from "./components/index"; // change the data of shader

function Shader(props) {
    let shaderRef = React.useRef();
    let [info, setInfo] = React.useState(null);
    let [data, setData] = useState({});
    let [fn, setFn] = useState([]);
    useEffect(() => {
        let shaderName = props.match.params.shaderName;
        let shaderClass = props.match.params.shaderClass;
        let targeClass = import(`../../webgl_page/shader/${shaderClass}`);
        let instanse = null;
        targeClass.then((res) => {
            instanse = new res.default();
            setFn([...fn, instanse[shaderName].bind(instanse)]);
            instanse[shaderName](shaderRef);
            setInfo(instanse[`get_shader_info`](shaderName));
        });
        return () => {
            if (instanse.animationId) {
                [...instanse.animationId.values()].forEach(item => {
                    cancelAnimationFrame(item);
                })
            }
        }
    }, [props.match.params.shaderName, props.match.params.shaderClass]);

    useEffect(() => {
        fn.forEach((item) => {
            item(shaderRef, data);
        })
    }, [data]);
    return (
        <ShaderStage>
            <Hud info={info} />
            <div className={style.canvasWraper} ref={shaderRef}></div>
            {DataControl[props.match.params.shaderClass]?.[props.match.params.shaderName] && <ControlDataHud>
                {DataControl[props.match.params.shaderClass]?.[props.match.params.shaderName](setData, data)}
            </ControlDataHud>}
        </ShaderStage>
    )
}
export default withRouter(Shader);