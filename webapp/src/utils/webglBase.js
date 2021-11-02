export default class WebglBase {
    constructor(ele) {
        this.canvasContainer = ele || document.getElementById("canvasContainer");
        this.ele = null;
        this.gl = null;
    }
    createCanvas(width, height) {
        let ele = document.createElement("canvas");
        ele.width = width;
        ele.height = height;
        this.ele = ele;
        return this;
    }
    appendCanvas() {
        if (!this.ele) {
            console.error("no canvas element");
            return;
        }
        this.canvasContainer.appendChild(this.ele);
        return this;
    }
    getWebglContext(type = "webgl") {
        if (this.ele.getContext(type)) {
            this.gl = this.ele.getContext(type);
        } else {
            console.error(`no ${type} context`);
            return null;
        }
    }
    getRandomArray(len, num) {
        let res = [];
        if (!num) {
            for (let i = 0; i < len; i++) {
                res.push(Math.random());
            }
        } else {
            for (let i = 0; i < num; i++) {
                let temp = new Array(len);
                temp.forEach((item, index) => {
                    temp[index] = Math.random();
                });
                res.push(temp);
            }
        }
        return res;
    }
    initShader(shaderSource) {
        let vertexShader = this.loadShader(this.gl.VERTEX_SHADER, shaderSource.vshader);
        let fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, shaderSource.fshader);
        if (!vertexShader || !fragmentShader) {
            return false;
        }
        let program = this.gl.createProgram();

        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);

        let linkStatus = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
        if (!linkStatus) {
            return false;
        }

        this.gl.useProgram(program);
        this.gl._program = program;
        return true;
    }
    loadShader(shaderType, shader) {
        let shaderObj = this.gl.createShader(shaderType);
        this.gl.shaderSource(shaderObj, shader);
        this.gl.compileShader(shaderObj);
        let compileStatus = this.gl.getShaderParameter(shaderObj, this.gl.COMPILE_STATUS);
        if (!compileStatus) {
            return null;
        }
        return shaderObj;
    }
    fillShaderAttribution(data, name = "", size = 4, type = this.gl.FLOAT, stride = 0, offset = 0) {
        let shaderAttribution = this.gl.getAttribLocation(this.gl._program, name);
        let buffer = this.gl.createBuffer();
        if (!buffer) {
            return false;
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);

        let fSize = data.BYTES_PER_ELEMENT;
        this.gl.vertexAttribPointer(shaderAttribution, size, type, false, fSize * stride, fSize * offset);
        this.gl.enableVertexAttribArray(shaderAttribution);
        return true;
    }
    fillElementsIndex(data) {
        let buffer = this.gl.createBuffer();
        if (!buffer) {
            return false;
        }
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
        return true;
    }
    fillUniformData(data, shaderUniform, count = 4, type = "") {
        let uniform = this.gl.getUniformLocation(this.gl._program, shaderUniform);
        if (!uniform) {
            return false;
        }
        let arg = type === "Matrix" ? [uniform, false, data] : [uniform, data]
        this.gl[`uniform${type}${count}fv`](...arg);
    }
}