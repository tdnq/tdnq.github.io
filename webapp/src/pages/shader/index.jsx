import React from "react";
import {withRouter} from "react-router-dom";
import ShaderStage from "../../componets/shaderStage/index.jsx";

function Shader ( props ) {
    
    return(
        <ShaderStage>
            <div>
                {props.location.pathname}
            </div>
        </ShaderStage>
    )

}
export default withRouter(Shader);