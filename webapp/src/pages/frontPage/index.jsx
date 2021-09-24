import React from "react";
import Webgl_frontPage from "../../webgl_page/frontPage";

export default function FrontPage(){
    const logoRef = React.createRef();
    return <div id="cavasContainer" ref = {logoRef}>
        {
            // (new Webgl_frontPage).main()
        }
    </div>
}