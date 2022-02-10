import * as THREE from 'three';

export default class Index {
    constructor(ele) {
        this.ele = ele;
        this.fileLoader = new THREE.FileLoader();
    }
    generate(type, parms = {}) {
        const fn = this[type] || this.commonShader.bind(this, type);
        const shape = fn(parms);
        if (!shape) {
            console.error(`no ${type} shape in shader/shapes`);
            return null;
        }
        return shape;
    }
    async add(scene, type, parms) {
        const shape = await this.generate(type, parms);
        if (!shape) {
            console.error(`no ${type} shape in shader/shapes`);
            return false;
        }
        scene.add(shape);
        return true;
    }
    async commonShader(type) {
        const geometry = new THREE.PlaneBufferGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_resolution: {
                    value: {
                        x: this.ele.clientWidth,
                        y: this.ele.clientHeight
                    }
                },
                u_time: {
                    value: 0,
                }
            },
            vertexShader: await this.fileLoader.loadAsync((await import(`../glsl/${type}.vert.glsl`)).default),
            fragmentShader: await this.fileLoader.loadAsync((await import(`../glsl/${type}.frag.glsl`)).default),
        });
        this.transformMaterial = material;
        const shape = new THREE.Mesh(geometry, material);
        return shape;
    }
}