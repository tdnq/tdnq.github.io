import Texture from '../utils/webglTexture.js';
// import { basicLayoutShaderSouce } from './source_shader/index.js';

export default class BasicLayout extends Texture {
  constructor(...props) {
    super(...props);
  }

  drawLogo(ele) {
    // init envirment
    this.canvasContainer = ele.current;
    this.createCanvas(40, 60).appendCanvas();
    this.drawTexture("TD'blog");
  }

  drawLogo_initBuffer() {
    const unit = 3;
    const vertex = new Float32Array(
      [
        0, 0, 0, 0.8, 0, 0, 0, 1, 0,
      ],
    );
    const color = new Float32Array(this.getRandomArray(4 * vertex.length / unit));
    this.fillShaderAttribution(vertex, 'a_position', vertex.length / unit);
    this.fillShaderAttribution(color, 'a_color', 4);
    return vertex.length / unit;
  }

  drawTexture(string = '', params = {
    width: 144,
    height: 64,
    font_family: 'monospace',
    fontSize: '24px',
    x_axis: 0,
    y_axis: 0,
  }) {
    const canvas = this.ele;
    const ctx = this.ele.getContext('2d');
    ctx.font = `${params.fontSize} ${params.font_family}`;
    canvas.width = params.width;
    canvas.height = params.height;

    // the properties of string
    const rotateWidth = ctx.measureText(string).width;

    // initialization background
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // change the origin
    ctx.translate(params.width / 2, params.height / 2);

    // set font attribution
    ctx.font = `${params.fontSize} ${params.font_family}`;
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = params.color || 'white';
    ctx.textAlign = params.align || 'center';
    ctx.shadowColor = '#588fbfed';
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 4;
    // draw text
    ctx.fillText(string, 0, rotateWidth / 5);

    // draw reflection
    ctx.shadowColor = '#3c424845';
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 1;
    ctx.shadowBlur = 4;
    ctx.strokeStyle = '#d9dbdc9e';
    ctx.lineWidth = 1;
    ctx.globalCompositeOperation = 'source-over';
    // ctx.translate(0, metrics.height + offsetRefectionY)
    ctx.scale(1, -1);
    ctx.strokeText(string, 0, 0);

    return true;
  }
}
