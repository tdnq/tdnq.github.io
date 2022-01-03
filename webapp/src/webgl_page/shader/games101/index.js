import Base from '../../../utils/webglBase';
import shading from './shading.js';
import bezierCurve from './bezierCurve.js';

export default class Index extends Base {
  shading() {
    shading.call(this, ...arguments);
  }

  bezierCurve() {
    bezierCurve.call(this, ...arguments);
  }

  get_shader_info(name) {
    const info = {
      shading: {
        name: 'shading',
        describe: 'phong shader, bump shader, texture shader,displacement shader, ',
        source: 'course games 101',
        time: '2021/12/05',
        showPriority: 90,
      },
      bezierCurve: {
        name: '贝塞尔曲线',
        describe: 'draw a bezier curve',
        source: 'course games 101',
        isHidden: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        time: '2021/12/07',
        showPriority: 50,
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
