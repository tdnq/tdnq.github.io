import React from "react";
import Webgl_frontPage from "../../webgl_page/frontPage";
import {NavLink} from "react-router-dom";

export default function FrontPage(){
    const logoRef = React.createRef();
    return <div id="cavasContainer" ref = {logoRef}>
        <NavLink exact to="/shader/2">shader</NavLink>
    </div>
}