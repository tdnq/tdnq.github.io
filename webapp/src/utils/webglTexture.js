import Base from "./webglBase.js";

export default class Texture extends Base {
    constructor(...props) {
        super(...props);
    }
    createTextureCanvas(string = "", params = {
        width: 50,
        height: 50,
        font_family:"monospace",
        fontSize: "24px",
        x_axis: 0,
        y_axis: 0
    }) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        ctx.font = `${params.fontSize} ${params.font_family}`;

        let textMetrics = ctx.measureText(string);

        canvas.width = textMetrics.width;
        canvas.height = textMetrics.height;
        canvas.style.width = textMetrics.width + "px";
        canvas.style.height = textMetrics.height + "px";

        // reapply font style since canvas is resized
        ctx.font = `${params.fontSize} ${params.font_family}`;
        ctx.textAlign = params.align || "center";
        ctx.textBaseline = params.baseline || "middle";
        // Make the canvas transparent for simplicity
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.fillStyle = params.color || "white";
        ctx.fillText(string, textMetrics.width / 2, textMetrics.height / 2);

        return canvas;
    }
    handleLoadedTexture(gl,texture, textureCanvas) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textureCanvas); // This is the important line!
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
    
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
}