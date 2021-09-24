import Texture from "../utils/webglTexture.js";
import { basicLayoutShaderSouce } from "./shader/index.js";

export default class BasicLayout extends Texture {
    constructor(...props) {
        super(...props);
    }
    drawLogo(ele) {
        //init envirment
        this.canvasContainer = ele.current;
        this.createCanvas(40, 60).appendCanvas();
        // this.getWebglContext();
        // this.handleLoadedTexture(this.gl , this.gl.createTexture(), this.createTextureCanvas("TD'S blog"));
        this.drawTexture("TD'blog");
    }
    drawLogo_initBuffer() {
        let unit = 3;
        let vertex = new Float32Array(
            [
                0, 0, 0, 0.8, 0, 0, 0, 1, 0
            ]
        );
        let color = new Float32Array(this.getRandomArray(4 * vertex.length / unit));
        this.fillShaderAttribution(vertex, "a_position", vertex.length / unit);
        this.fillShaderAttribution(color, "a_color", 4);
        return vertex.length / unit;
    }
    drawTexture(string = "", params = {
        width: 144,
        height: 64,
        font_family: "monospace",
        fontSize: "24px",
        x_axis: 0,
        y_axis: 0
    }) {
        let canvas = this.ele;
        let ctx = this.ele.getContext("2d");
        ctx.font = `${params.fontSize} ${params.font_family}`;

        canvas.width = params.width;
        canvas.height = params.height;

        // reapply font style since canvas is resized
        ctx.font = `${params.fontSize} ${params.font_family}`;
        ctx.textAlign = params.align || "center";
        ctx.textBaseline = params.baseline || "middle";
        // Make the canvas transparent for simplicity
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = params.color || "white";
        ctx.fillText(string, params.width / 2, params.height / 2);

        return true;;
    }
}