import transform from "./transform/index.js";
import shapes from "./shapes/index.js";
import random from "./generativeDesigns/random.js";
import laveLamp from "./noise/lavaLamp.js";

export default class Index {
    constructor() {
        this.animationId = new Map();

        let scenes = { shapes, transform, random, laveLamp };
        for (let item of Object.keys(scenes)) {
            this[item] = function () {
                scenes[item].call(this, ...arguments);
            }
        }
    }

    get_shader_info(name) {
        const info = {
            transform: {
                name: '矩阵转换',
                describe: 'glsl transformation ',
                source: 'thebookofshaders',
                time: '2022/01/13',
            },
            shapes: {
                name: '造型函数',
                describe: 'glsl shape functions',
                source: 'thebookofshaders',
                time: '2022/01/29',
            },
            random: {
                name: "生成设计：2D随机",
                describe: "随机生成展示效果",
                source: 'thebookofshaders',
                time: '2022/02/08',
            },
            laveLamp: {
                name: "噪声：岩浆",
                describe: "噪声效果",
                source: 'thebookofshaders',
                time: '2022/02/10',
            }
        };
        switch (name) {
            case '*':
                return info;
            default:
                return info[name];
        }
    }
}
