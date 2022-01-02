import { clearColor } from "../../../config/shader.js";
import { bezierCurveShaderSource } from "../../source_shader/games101/index.js";
import { removeChlidCanvas } from '../../../utils/common';

class Vector3 {
    constructor(...props) {
        [this.x, this.y, this.z] = props;
    }
}
export default function bezierCurve(ele, data) {
    this.canvasContainer = ele.current;

    this._points = [
        new Vector3(-0.2, 0, 0),
        new Vector3(0, 0.5, 0),
        new Vector3(0.4, -0.5, 0),
        new Vector3(0.4, 0.5, 0)
    ];
    removeChlidCanvas(this.canvasContainer);
    this.createCanvas(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight)
        .appendCanvas()
        .getWebglContext();
    this.gl.clearColor(...clearColor);
    //init shader
    this.initShader(bezierCurveShaderSource);
    //model
    this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
    model.call(this, this._points, { ...{ frequence: 0.001 }, ...data, });

    // camera

    //rasterization
    // bind event
    this.ele.addEventListener('click', (e) => {
        let elePosition = e.target.getBoundingClientRect();
        let x = ((e.clientX - elePosition.x) - (e.target.width / 2)) / (e.target.width / 2),
            y = -((e.clientY - elePosition.y) - (e.target.height / 2)) / (e.target.height / 2);
        this.gl.clear(this.gl.DEPTH_BUFFER_BIT | this.gl.COLOR_BUFFER_BIT);
        this._points.push(new Vector3(x, y, 0));
        model.call(this, this._points, { ...{ frequence: 0.001 }, ...data, });
    });
}
function model(points, data = { frequence: 0.01 }) {
    for (let t = 0; t < 1; t += data.frequence) {
        let bezierPoint = recursive_bezier(points, t);
        let vertex = new Float32Array([bezierPoint.x, bezierPoint.y, bezierPoint.z]);
        let pointNum = vertex.length / 3;

        let colorArr = this.getRandomArray(4 * pointNum);
        colorArr[3] = 1;
        let color = new Float32Array(colorArr);
        // let color = new Float32Array([1.0, 0, 0, 0]);
        this.fillShaderAttribution(vertex, "a_position", 3);
        this.fillShaderAttribution(color, "a_color", 4);
        draw.call(this, pointNum);
    }
}

function draw(n) {
    this.gl.drawArrays(this.gl.POINTS, 0, n);
}

function recursive_bezier(points, t) {
    if (points.length === 1) {
        return points[0];
    } else {
        const tempPoints = [];
        for (let i = 0; i < points.length - 1; i++) {
            tempPoints.push(
                new Vector3(
                    (1 - t) * points[i].x + t * points[i + 1].x,
                    (1 - t) * points[i].y + t * points[i + 1].y,
                    (1 - t) * points[i].z + t * points[i + 1].z,
                )
            )
        }
        return recursive_bezier(tempPoints, t);
    }
}