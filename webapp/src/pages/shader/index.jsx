import React from "react";
import { withRouter } from "react-router-dom";
import ShaderStage from "../../componets/shaderStage/index.jsx";
import Hud from "../../componets/hud/index.jsx"
import style from "./index.module.scss";

function Shader(props) {
    let shaderRef = React.useRef();
    let [info, setInfo] = React.useState(null);
    React.useEffect(() => {
        let shaderName = props.match.params.shaderName;
        let shaderClass = props.match.params.shaderClass;
        let targeClass = import(`../../webgl_page/shader/${shaderClass}`);
        targeClass.then((res) => {
            let instanse = new res.default();
            instanse[shaderName](shaderRef);
            setInfo(instanse[`get_shader_info`](shaderName));
        });
    }, [props.match.params.shaderName, props.match.params.shaderClass]);

    return (
        <ShaderStage>
            <Hud info={info} />
            <div className={style.canvasWraper} ref={shaderRef}></div>
        </ShaderStage>
    )
}
export default withRouter(Shader);