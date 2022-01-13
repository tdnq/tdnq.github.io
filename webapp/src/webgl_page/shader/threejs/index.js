import taste from './taste.js';
import sprite_rain from './sprite_rain.js';
import math_curve from './math_curve.js';
import geometry_convex from './geometry_convex.js';
import camera from './camera.js';
import cameraArray from './cameraArray.js';

export default class Index {
  constructor() {
    this.animationId = new Map();

    let scenes = { taste, sprite_rain, math_curve, geometry_convex, camera, cameraArray };
    for (let item of Object.keys(scenes)) {
      this[item] = function () {
        scenes[item].call(this, ...arguments);
      }
    }
  }

  get_shader_info(name) {
    const info = {
      taste: {
        name: 'three.js 画线',
        describe: '',
        source: 'three.js 官方文档',
        time: '2021/11/24',
        isHidden: true,
      },
      sprite_rain: {
        name: '动态雨滴',
        describe: '精灵模型',
        source: '郭隆邦 技术博客',
        time: '2021/12/11',
        showPriority: 51,
      },
      math_curve: {
        name: '数学曲线',
        describe: '常见数学曲线',
        source: '',
        time: '2021/12/12',
        showPriority: 40,
      },
      geometry_convex: {
        name: 'geometry convex',
        describe: 'geometry',
        source: 'three.js examples',
        time: '2021/12/14',
        showPriority: 35,
      },
      camera: {
        name: 'camera',
        describe: '',
        source: 'three.js examples',
        time: '2022/01/02',
        showPriority: 35,
      },
      cameraArray: {
        name: 'camera array',
        describe: '多部相机',
        source: 'three.js examples',
        time: '2022/01/09',
        showPriority: 35,
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
