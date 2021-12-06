import Base from "../../../utils/webglBase";
import shading from "./shading.js";

export default class Index extends Base {
    shading() {
        shading.call(this, ...arguments);
    }
    get_shader_info(name) {
        let info = {
            shading: {
                name: "shading",
                describe: "phong shader, bump shader, texture shader,displacement shader, ",
                source: "course games 101",
                time: "2021/12/05",
                showPriority: 90
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