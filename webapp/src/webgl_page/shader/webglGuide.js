import Base from "../../utils/webglBase";


export default class WebglGuide extends Base{

    constructor(...props){

        super(...props);

    }
    hello(ele){
        this.canvasContainer = ele.current;
        this.createCanvas("100%", "100%").appendCanvas()
    }
}