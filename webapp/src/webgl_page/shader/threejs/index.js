import taste from "./taste.js";
import sprite_rain from "./sprite_rain.js";
export default class Index {
    taste() {
        taste.call(this, ...arguments);
    }
    sprite_rain() {
        sprite_rain.call(this, ...arguments);
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
            sprite_rain: {
                name: '动态雨滴',
                describe: "精灵模型",
                source: "郭隆邦 技术博客",
                time: "2021/12/11",
                showPriority: 51
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