import { clearColor } from "../../../config/shader.js";
import { roundedPointShaderSource } from "../../source_shader/webglGuide/index.js";
import { removeChlidCanvas } from '../../../utils/common';
export default function roundedPoint(ele) {
    this.canvasContainer = ele.current;
    removeChlidCanvas(this.canvasContainer);
    this.createCanvas(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight).appendCanvas().getWebglContext();
    this.gl.clearColor(...clearColor);
    this.gl.enable(this.gl.DEPTH_TEST);
    //initShader
    this.initShader(roundedPointShaderSource);
    //modeling
    let vertexNum = model.call(this);
    //transform
    //camera
    //render
    this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
    this.gl.drawArrays(this.gl.POINTS, 0, vertexNum);
}
function model() {
    const dotPosition = new Float32Array([0, 0, 0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, -0.5, 0, 0, 0, -0.5, 0]);
    const color = new Float32Array(this.getRandomArray(dotPosition.length / 3 * 4));
    this.fillShaderAttribution(dotPosition, "a_position", 3)
    this.fillShaderAttribution(color, "a_color", 4);
    return dotPosition.length / 3;
}
