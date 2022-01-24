import transform from "./transform/index.js";

export default class Index {
    constructor() {
        this.animationId = new Map();

        let scenes = { transform };
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
        };
        switch (name) {
            case '*':
                return info;
            default:
                return info[name];
        }
    }
}
