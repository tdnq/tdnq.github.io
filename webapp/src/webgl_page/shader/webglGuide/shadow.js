import { blendClearColor } from "../../../config/shader.js";
import { shadowShaderSource, shadowNormalShaderSource } from "../../source_shader/webglGuide/index.js";
import { Matrix4 } from "../../../utils/matrix_lib.js";

export default function shadow(ele) {
    this.canvasContainer = ele.current;
    this.createCanvas(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight).appendCanvas().getWebglContext();
    this.gl.clearColor(...blendClearColor);
    this.gl.enable(this.gl.DEPTH_TEST);
    //initShader
    const shadowProgram = this.createShaderProgram(shadowShaderSource);
    const normalProgram = this.createShaderProgram(shadowNormalShaderSource);
    //modeling
    this.gl.useProgram(normalProgram);
    this.gl._program = normalProgram;
    let vertexNum = model.call(this);
    //envirment
    let viewProjMatrixFromLight = new Matrix4();
    viewProjMatrixFromLight.setPerspective(70.0, this.ele.width / this.ele.height, 1.0, 100.0);
    viewProjMatrixFromLight.lookAt(0, 7, 2, 0, 0, 0, 0, 1, 0);
    //camera
    let mvpMatrix = new Matrix4();
    mvpMatrix.setPerspective(15.0, this.ele.width / this.ele.height, 1.0, 100.0);
    mvpMatrix.lookAt(0.0, 7.0, 9.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
    mvpMatrix.translate(0, 0.8, 0);
    //render
    tick.call(this, { vertexNum, count: 0, angle: 0, mvpMatrix });
    this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
}
function tick(data) {
    // this.gl.useProgram(data.shadowProgram);
    // draw triangle
    this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);

    this.fillUniformData(new Matrix4(data.mvpMatrix).rotate(data.angle, 0, 1, 0).elements, 'u_mvpMatrix', 4, 'Matrix');
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);

    this.fillUniformData(new Matrix4(data.mvpMatrix).elements, 'u_mvpMatrix', 4, 'Matrix');
    this.gl.drawArrays(this.gl.TRIANGLES, 3, data.vertexNum - 3);

    data.angle += 0.1;
    data.angle %= 360;

    return requestAnimationFrame(() => {
        tick.call(this, data);
    });
}
function model() {
    let distance = 1;
    let planeVertex = [
        -distance, -distance, distance,
        distance, -distance, distance,
        distance, -distance, -distance,

        -distance, -distance, distance,
        -distance, -distance, -distance,
        distance, -distance, -distance,
    ];
    const dotPosition = new Float32Array([0, 0, 0, 0, 0.0, 0.5, 0.5, 0, 0].concat(...planeVertex));
    let planeColor = new Array(3 * 2 * 4).fill(1.0);
    const color = new Float32Array(this.getRandomArray(3 * 4).concat(planeColor));
    this.fillShaderAttribution(dotPosition, "a_position", 3)
    this.fillShaderAttribution(color, "a_color", 4);
    return dotPosition.length / 3;
}

