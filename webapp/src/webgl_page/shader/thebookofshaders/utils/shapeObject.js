import * as THREE from 'three';
import flowerVert from "../glsl/flower.vert.glsl";
import flowerFrag from "../glsl/flower.frag.glsl";

export default class Index {
    constructor(ele) {
        this.ele = ele;
        this.fileLoader = new THREE.FileLoader();
    }
    generate(type, parms = {}) {
        const shape = this?.[type](parms);
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
    // eslint-disable-next-line no-unused-vars
    async flower(parms = {}) {
        const geometry = new THREE.PlaneBufferGeometry(2, 2);
        const material = new THREE.RawShaderMaterial({
            uniforms: {
                u_resolution: {
                    value: {
                        x: this.ele.clientWidth,
                        y: this.ele.clientHeight
                    }
                }
            },
            vertexShader: await this.fileLoader.loadAsync(flowerVert),
            fragmentShader: await this.fileLoader.loadAsync(flowerFrag),
        });
        const shape = new THREE.Mesh(geometry, material);
        return shape;
    }
}