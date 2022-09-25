import repeatAndRandom from './repeatAndRandom';
import Pixels from './pixels';
export default class Index {
    constructor() {
        this.info = {};
        this.leaveCallback = [];
        let scenes = { repeatAndRandom, Pixels };
        for (let item of Object.keys(scenes)) {
            if (scenes[item].toString().startsWith('class')) {
                let instance = new scenes[item]();
                this.info[item] = instance.info;
                if (instance.leaveCallback) {
                    this.leaveCallback = [instance.leaveCallback];
                }
                this[item] = function () {
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
        const info = this.info;
        switch (name) {
            case '*':
                return info;
            default:
                return info[name];
        }
    }
}
