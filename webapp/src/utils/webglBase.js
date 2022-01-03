export default class WebglBase {
  constructor(ele) {
    this.canvasContainer = ele || document.getElementById('canvasContainer');
    this.ele = null;
    this.gl = null;
  }

  createCanvas(width, height) {
    const ele = document.createElement('canvas');
    ele.width = width;
    ele.height = height;
    this.ele = ele;
    return this;
  }

  appendCanvas() {
    if (!this.ele) {
      console.error('no canvas element');
      return;
    }
    this.canvasContainer.appendChild(this.ele);
    return this;
  }

  getWebglContext(type = 'webgl') {
    if (this.ele.getContext(type)) {
      this.gl = this.ele.getContext(type);
    } else {
      console.error(`no ${type} context`);
      return null;
    }
  }

  getRandomArray(len) {
    const res = [];
    for (let i = 0; i < len; i++) {
      res.push(Math.random());
    }
    return res;
  }

  initShader(shaderSource) {
    const vertexShader = this.loadShader(this.gl.VERTEX_SHADER, shaderSource.vshader);
    const fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, shaderSource.fshader);
    if (!vertexShader || !fragmentShader) {
      return false;
    }
    const program = this.gl.createProgram();

    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    const linkStatus = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
    if (!linkStatus) {
      return false;
    }

    this.gl.useProgram(program);
    this.gl._program = program;
    return true;
  }

  createShaderProgram(shaderSource) {
    const vertexShader = this.loadShader(this.gl.VERTEX_SHADER, shaderSource.vshader);
    const fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, shaderSource.fshader);
    if (!vertexShader || !fragmentShader) {
      return false;
    }
    const program = this.gl.createProgram();

    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    const linkStatus = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
    if (!linkStatus) {
      const error = this.gl.getProgramInfoLog(program);
      console.error(`Failed to link program: ${error}`);
      this.gl.deleteProgram(program);
      this.gl.deleteShader(fragmentShader);
      this.gl.deleteShader(vertexShader);
      return false;
    }
    return program;
  }

  loadShader(shaderType, shader) {
    const shaderObj = this.gl.createShader(shaderType);
    this.gl.shaderSource(shaderObj, shader);
    this.gl.compileShader(shaderObj);
    const compileStatus = this.gl.getShaderParameter(shaderObj, this.gl.COMPILE_STATUS);
    if (!compileStatus) {
      this.gl.deleteShader(shaderObj);
      return null;
    }
    return shaderObj;
  }

  fillShaderAttribution(data, name = '', size = 4, type = this.gl.FLOAT, stride = 0, offset = 0) {
    const shaderAttribution = this.gl.getAttribLocation(this.gl._program, name);
    const buffer = this.gl.createBuffer();
    if (!buffer) {
      return false;
    }
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);

    const fSize = data.BYTES_PER_ELEMENT;
    this.gl.vertexAttribPointer(shaderAttribution, size, type, false, fSize * stride, fSize * offset);
    this.gl.enableVertexAttribArray(shaderAttribution);
    return true;
  }

  fillElementsIndex(data) {
    const buffer = this.gl.createBuffer();
    if (!buffer) {
      return false;
    }
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
    this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
    return true;
  }

  fillUniformData(data, shaderUniform, count = 4, type = '') {
    const uniform = this.gl.getUniformLocation(this.gl._program, shaderUniform);
    if (!uniform) {
      return false;
    }
    const arg = type === 'Matrix' ? [uniform, false, data] : [uniform, data];
    this.gl[`uniform${type}${count}fv`](...arg);
  }
}
