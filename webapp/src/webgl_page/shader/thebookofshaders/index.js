import transform from "./transform/index.js";
import shapes from "./shapes/index.js";

export default class Index {
    constructor() {
        this.animationId = new Map();

        let scenes = { shapes, transform };
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
        };
        switch (name) {
            case '*':
                return info;
            default:
                return info[name];
        }
    }
}
