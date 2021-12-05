import taste from "./taste.js";

export default class Index {
    taste() {
        taste.call(this, ...arguments);
    }
    get_shader_info(name) {
        let info = {
            taste: {
                name: "three.js 画线",
                describe: "",
                source: "three.js 官方文档",
                time: "2021/11/24",
                isHidden: true,
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