import taste from './taste.js';
import sprite_rain from './sprite_rain.js';
import math_curve from './math_curve.js';
import geometry_convex from './geometry_convex.js';
import camera from './camera.js';
import cameraArray from './cameraArray.js';
import Space from './space.js';
import Tank from './tank';
import Shadow from './shadow';
import WorldPopulation from './worldPopulation';
import MiniCity from './miniCity';
import SkyBox from './skyBox';
import Picker from './picker';

export default class Index {
  constructor() {
    this.animationId = new Map();
    this.leaveCallback = [];

    let scenes = { taste, sprite_rain, math_curve, geometry_convex, camera, cameraArray, Space, Tank, Shadow, WorldPopulation, MiniCity, SkyBox, Picker };
    for (let item of Object.keys(scenes)) {
      if (scenes[item].toString().startsWith('class')) {
        let instance = new scenes[item](this.animationId, this.leaveCallback);
        this[item] = function () {
          if (instance.leaveCallback) {
            this.leaveCallback = [instance.leaveCallback];
          }
          // 拆分为init 和 update两个阶段
          if (arguments[1]?.length) {
            instance.update(...arguments.slice(1));
          } else {
            instance.init(...arguments);
          }
        }
      } else {
        this[item] = function () {
          scenes[item].call(this, ...arguments);
        }
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
      Space: {
        name: '太空',
        describe: '太阳系',
        source: 'three.js examples',
        time: '2022/01/09',
        showPriority: 35,
      },
      Tank: {
        name: 'tank',
        describe: '坦克',
        source: 'three.js examples',
        time: '2022/07/17',
        showPriority: 65,
      },
      Shadow: {
        name: 'Shadow',
        describe: '阴影',
        source: 'three.js examples',
        time: '2022/07/29',
        showPriority: 55,
      },
      WorldPopulation: {
        name: 'WorldPopulation',
        describe: '世界人口分布',
        source: 'three.js examples',
        time: '2022/07/29',
        showPriority: 55,
      },
      MiniCity: {
        name: 'miniCity',
        describe: '小型城市模型',
        source: 'three.js examples',
        time: '2022/07/29',
        showPriority: 55,
      },
      SkyBox: {
        name: 'skyBox',
        describe: '天空盒',
        source: 'three.js examples',
        time: '2022/08/19',
        showPriority: 55,
      },
      Picker: {
        name: 'Picker',
        describe: '物体拾取',
        source: 'three.js examples',
        time: '2022/08/21',
        showPriority: 55,
      }
    };
    switch (name) {
      case '*':
        return info;
      default:
        return info[name];
    }
  }
  static static_getShaderInfo(name) {
    return this.get_shader_info(name);
  }
}
