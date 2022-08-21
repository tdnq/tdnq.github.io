import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { removeChlidCanvas } from 'utils/common';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import tears_of_steel_bridge from "./assets/tears_of_steel_bridge_2k.jpg";
export default class Index {
    constructor(animationId = new Map()) {
        this.animationId = animationId;
        this.scene = null;
        this.objects = {};
        this.light = [];
        this.camera = null;
        this.renderer = null;
        this.helper = [];
        this.data = {
            isHideHelper: window.location.pathname === '/'
        };
        this.textureLoader = new THREE.TextureLoader();
    }
    async init(canvasContainer) {
        this.canvasContainer = canvasContainer?.current;
        removeChlidCanvas(this.canvasContainer);
        this.gui = this.data.isHideHelper ? null : new GUI();
        this.initThree();
        this.initCamera();
        this.initControl();
        await this.initObjects();
        this.initLight();
        this.initHelper();
        await this.initScene();
        requestAnimationFrame(this.animate);
    }
    initControl() {
        this.control = new OrbitControls(this.camera, this.renderer.domElement);
    }
    leaveCallback = () => {
        this.gui?.destroy();
    }
    render = () => {

        this.renderer.render(this.scene, this.camera);
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

        {
            await this.textureLoader.loadAsync(tears_of_steel_bridge).then(texture => {
                const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
                rt.fromEquirectangularTexture(this.renderer, texture);
                this.scene.background = rt.texture;
            })
        }
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

        this.camera = new THREE.PerspectiveCamera(60, this.canvasContainer.clientWidth / this.canvasContainer.clientHeight, 1, 6000);
        this.camera.position.set(1, 1, 1);
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
        this.animationId.set('skyBox', requestAnimationFrame(this.animate));
    }
}