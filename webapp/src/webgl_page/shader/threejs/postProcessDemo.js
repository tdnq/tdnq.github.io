import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { removeChlidCanvas } from 'utils/common';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass";
export default class Index {
    constructor(animationId = new Map()) {
        this.animationId = animationId;
        this.scene = null;
        this.objects = {};
        this.light = [];
        this.camera = null;
        this.renderer = null;
        this.helper = [];
        this.composer = null;
        this.thenTime = 0;
        this.data = {
            isHideHelper: window.location.pathname === '/'
        };
        this.gui = this.data.isHideHelper ? null : new GUI();
    }
    async init(canvasContainer) {
        this.canvasContainer = canvasContainer?.current;
        removeChlidCanvas(this.canvasContainer);
        this.initThree();
        this.initCamera();
        this.initControl();
        await this.initObjects();
        this.initLight();
        this.initHelper();
        await this.initScene();
        this.initPass();
        requestAnimationFrame(this.animate);
    }
    initPass() {
        const composer = new EffectComposer(this.renderer);
        composer.addPass(new RenderPass(this.scene, this.camera));
        const bloomPass = new BloomPass(1, 25, 4, 256);
        composer.addPass(bloomPass);
        const filmPass = new FilmPass(0.35, 0.025, 628, false);
        filmPass.renderToScreen = true;
        composer.addPass(filmPass);
        this.composer = composer;
    }
    initControl() {
        this.control = new OrbitControls(this.camera, this.renderer.domElement);
    }
    leaveCallback = () => {
        this.gui?.destroy();
    }
    render = (time) => {
        let deltaTime = this.thenTime - time * 0.001;
        this.thenTime = time * 0.001;
        this.objects.box.children.forEach(item => {
            item.rotation.set(this.thenTime, this.thenTime, this.thenTime);
        });
        this.composer.render(deltaTime);
    }
    initThree() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight);
        this.canvasContainer.appendChild(this.renderer.domElement);
    }
    async initScene() {
        this.scene = new THREE.Scene();
        this.scene.add(...Object.values(this.objects));
        this.scene.add(...this.helper, ...this.light);
    }
    initHelper() {
        if (this.data.isHideHelper) {
            return;
        }
        this.helper.forEach(item => {
            if (item.material) {
                item.material.depthTest = false;
                item.renderOrder = 2;
            }
            if (item.visible !== undefined) {
                item.visible = false;
            }
        });
    }
    async initObjects() {
        {
            let geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
            let object = new THREE.Group();
            for (let i = 0; i < 3; i++) {
                let material = new THREE.MeshPhongMaterial({
                    color: 0xFFFFFF * Math.random()
                });
                let mesh = new THREE.Mesh(geometry, material);
                mesh.position.setX(-0.5 + i * 0.45);
                object.add(mesh);
            }
            this.objects.box = object;
        }
    }
    initCamera() {

        this.camera = new THREE.PerspectiveCamera(45, this.canvasContainer.clientWidth / this.canvasContainer.clientHeight, 0.1, 2);
        this.camera.position.set(0, 0, 1);
        this.camera.lookAt(0, 0, 0);
    }
    initLight() {
        {
            let light = new THREE.AmbientLight(0XFFFFFF, 0.6);
            this.light.push(light);
        }
    }
    animate = (time) => {
        this.render(time);
        this.animationId.set('postProcessDemo', requestAnimationFrame(this.animate));
    }
}