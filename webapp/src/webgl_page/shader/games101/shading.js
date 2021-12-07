import { clearColorHex } from "../../../config/shader.js";
import phong_png from "../../../assets/phong.png";
import bump_png from "../../../assets/bump.png";
import texture_png from "../../../assets/texture.png";
import displacement_png from "../../../assets/displacement.png";

const shaderPng = {
    phong_png, bump_png, texture_png, displacement_png
}
export default function shading(ele, data = { path: 'phong' }) {
    this.canvasContainer = ele.current;
    if (!this.gl) {
        this.createCanvas(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight)
            .appendCanvas()
            .getWebglContext('2d');
    }
    this.gl.clearRect(0, 0, this.canvasContainer.clientWidth, this.canvasContainer.clientHeight);
    this.gl.fillStyle = clearColorHex;
    this.gl.fillRect(0, 0, this.canvasContainer.clientWidth, this.canvasContainer.clientHeight);
    // insert picture
    drawPicture(this.gl, data.path, this.canvasContainer);

}
function drawPicture(ctx, path, ele) {
    let imgPath = null;
    if (shaderPng[`${path}_png`]) {
        imgPath = shaderPng[`${path}_png`]
    } else {
        imgPath = phong_png
    }

    let img = new Image();

    img.onload = () => {
        ctx.drawImage(img, ele.clientWidth / 2 - 700 / 2, ele.clientHeight / 2 - 700 / 2);
    };
    img.src = imgPath;
}