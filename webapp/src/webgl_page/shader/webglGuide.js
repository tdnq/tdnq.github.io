import Base from "../../utils/webglBase";
import cube from "../material/cube";
import { rotateCubeUseMouseShaderSource } from "../source_shader/index";
// import Matrix from "../../utils/matrix.js";
import { Matrix4 } from "../../utils/matrix_lib.js";
import { blendClearColor } from "../../config/shader";
//the splited shader
import fog from "./fog";
import roundedPoint from "./roundedPoint.js";
export default class WebglGuide extends Base {

    constructor(...props) {

        super(...props);

    }
    rotateCubeUseMouse(ele) {
        this.canvasContainer = ele.current;
        this.createCanvas(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight).appendCanvas().getWebglContext();
        this.gl.clearColor(...blendClearColor);
        // this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_CONSTANT_ALPHA);
        //initShader
        this.initShader(rotateCubeUseMouseShaderSource);
        //modeling
        this.rotateCubeUseMouse_model();
        //transform
        let viewMatrix = new Matrix4();
        viewMatrix.setPerspective(30.0, this.ele.width / this.ele.height, 1.0, 100.0);
        viewMatrix.lookAt(6.0, 4.0, 6.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
        let u_viewMatrix = this.gl.getUniformLocation(this.gl._program, "u_transformMatrix");
        //bind event
        this.rotateCubeUseMouse_bind(viewMatrix, u_viewMatrix);
    }
    rotateCubeUseMouse_model() {
        let vertex = new Float32Array(cube.vertex);
        let pointNum = vertex.length / cube.unit;
        let indices = new Uint8Array(cube.indices);
        let color = new Float32Array(this.getRandomArray(4 * pointNum));
        this.fillShaderAttribution(vertex, "a_position", cube.unit);
        this.fillShaderAttribution(color, "a_color", 4);
        this.fillElementsIndex(indices);
    }
    rotateCubeUseMouse_bind(viewMatrix, u_viewMatrix) {
        let isMove = false;
        let angle = { x: 0, y: 0 };
        let preX = 0, preY = 0;
        let g_MvpMatrix = new Matrix4(); // Model view projection matrix

        this.ele.addEventListener("mousedown", (event) => {
            let elePosition = event.target.getBoundingClientRect();
            preX = event.clientX - elePosition.x; preY = event.clientY - elePosition.y;
            isMove = true;
        });
        this.ele.addEventListener("mouseup", () => {
            isMove = false;
        });
        this.ele.addEventListener("mousemove", (event) => {
            if (isMove) {
                let elePosition = event.target.getBoundingClientRect();
                //compute the rotate angle
                let x = event.clientX - elePosition.x,
                    y = event.clientY - elePosition.y;
                angle.y += (x - preX) / event.target.width * 180;
                angle.x += (y - preY) / event.target.height * 180;
                angle.y = Math.max(Math.min(angle.y, 90.0), -90.0);
                preX = x; preY = y;
            }
        });
        function tick() {
            g_MvpMatrix.set(viewMatrix);
            g_MvpMatrix.rotate(angle.x, 1.0, 0.0, 0.0);
            g_MvpMatrix.rotate(angle.y, 0.0, 1.0, 0.0);
            this.gl.uniformMatrix4fv(u_viewMatrix, false, g_MvpMatrix.elements);
            //rasterization
            this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
            this.gl.drawElements(this.gl.TRIANGLES, cube.indices.length, this.gl.UNSIGNED_BYTE, 0);
            window.requestAnimationFrame(bindTick);
        }
        let bindTick = tick.bind(this);
        bindTick();
    }
    fog() {
        fog.call(this, ...arguments);
    }
    roundedPoint() {
        roundedPoint.call(this, ...arguments);
    }
    get_shader_info(name) {
        let info = {
            rotateCubeUseMouse: {
                name: "鼠标控制正方体旋转",
                describe: "",
                source: "<<webgl编程指南>>",
                time: "2021/10/07"
            },
            fog: {
                name: "雾化效果",
                describe: "↑↓:增大/减小 雾化的距离",
                source: "<<webgl编程指南>>",
                time: "2021/10/31"
            },
              roundedPoint: {
                name: "圆点",
                describe: "使用GLSL ES画出圆点",
                source: "<<webgl编程指南>>",
                time: "2021/11/07"
            },          
        };
        switch (name) {
            case '*':
                return info;
            default:
                return info[name];
        }
    }
}