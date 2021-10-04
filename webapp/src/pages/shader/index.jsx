import React from "react";
import {withRouter} from "react-router-dom";
import ShaderStage from "../../componets/shaderStage/index.jsx";
import style from "./index.module.scss";

function Shader ( props ) {
    let { shaderName , shaderClass } = props.match.params;
    let targeClass =import(`../../webgl_page/shader/${shaderClass}`);
    let shaderRef = React.createRef();
    targeClass.then((res)=>{
        let instanse =new res.default();
        instanse[shaderName](shaderRef);
    });
    return(
        <ShaderStage>
            <div className={style.canvasWraper} ref={shaderRef}></div>
        </ShaderStage>
    )
}
export default withRouter(Shader);