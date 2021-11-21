import { clearColor } from "../../../config/shader.js";
import cube from "../../material/cube.js";
import { fogShaderSource, } from "../../source_shader/webglGuide/index.js";
import { Matrix4 } from "../../../utils/matrix_lib.js";

export default function fog(ele) {
        //init environment
        this.canvasContainer = ele.current;
        this.createCanvas(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight).appendCanvas().getWebglContext();
        this.gl.clearColor(...clearColor);
        this.gl.enable(this.gl.DEPTH_TEST);
        //init shader
        this.initShader(fogShaderSource);
        //model
        model.call(this);
        const modelMatrix = new Matrix4();
        modelMatrix.setScale(10, 10, 10);
        this.fillUniformData(modelMatrix.elements, "u_modelMatrix", 4, "Matrix");
        //fog attribution
        let fogColor = new Float32Array(this.getRandomArray(4));
        let fogDist = new Float32Array([55, 80]);
        let eye = new Float32Array([25, 65, 35, 1.0]);
        this.fillUniformData(fogColor, "u_fogColor", 4);
        this.fillUniformData(fogDist, "u_fogDist", 2);
        this.fillUniformData(eye, "u_eye", 4);
        // camera
        const mvpMatrix = new Matrix4();
        mvpMatrix.setPerspective(30, this.ele.width / this.ele.height, 1, 1000);
        mvpMatrix.lookAt(eye[0], eye[1], eye[2], 0, 2, 0, 0, 1, 0);
        mvpMatrix.multiply(modelMatrix);
        this.fillUniformData(mvpMatrix.elements, "u_mvpMatrix", 4, "Matrix");
        //rasterization
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
        this.gl.drawElements(this.gl.TRIANGLES, cube.indices.length, this.gl.UNSIGNED_BYTE, 0);
        //bind event
        document.addEventListener("keydown",keydown.bind(this,fogDist));
}
function model() {
        let vertex = new Float32Array(cube.vertex);
        let pointNum = vertex.length / cube.unit;
        let indices = new Uint8Array(cube.indices);
        let color = new Float32Array(this.getRandomArray(4 * pointNum));
        this.fillShaderAttribution(vertex, "a_position", cube.unit);
        this.fillShaderAttribution(color, "a_color", 4);
        this.fillElementsIndex(indices);
}
function keydown(fogDist,ev){
        switch(ev.keyCode){
                case 38:
                        fogDist[1]+=1;
                        break;
                case 40:
                        if(fogDist[0]<fogDist[1]){
                                fogDist[1]-=1;
                        }
                        break;
                default:
                        break;
        }
        this.fillUniformData(fogDist,"u_fogDist",2);
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
        this.gl.drawElements(this.gl.TRIANGLES, cube.indices.length, this.gl.UNSIGNED_BYTE, 0);
}