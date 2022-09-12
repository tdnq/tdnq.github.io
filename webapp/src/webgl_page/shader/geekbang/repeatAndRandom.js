import * as THREE from 'three';
import { removeChlidCanvas } from 'utils/common';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default class Index {
    constructor() {
        this.animationId;
        this.scene = null;
        this.objects = {};
        this.light = [];
        this.camera = null;
        this.renderer = null;
        this.helper = [];
        this.fileLoader = new THREE.FileLoader();
        this.data = {
            isHideHelper: window.location.pathname === '/',
        };
        this.info = {
            name: 'repeatAndRandom',
            describe: '分形',
            source: '极客时间 跟月影学可视化',
            time: '2022/09/11',
            showPriority: 55,
        }
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
        requestAnimationFrame(this.animate);
    }
    initControl() {
        this.control = new OrbitControls(this.camera, this.renderer.domElement);
    }
    leaveCallback = () => {
        this.gui?.destroy();
        cancelAnimationFrame(this.animationId);
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
        {
            this.scene = new THREE.Scene();
            // this.scene.background = new THREE.Color(0xffffff);
            this.scene.add(...Object.values(this.objects));
            if (this.helper.length) {
                this.scene.add(...this.helper);
            }
            if (this.light.length) {
                this.scene.add(...this.light);
            }
        }
    }
    initHelper() {
        if (this.data.isHideHelper) {
            return;
        }
        this.gui = new GUI()
        let cameraHelper = new THREE.CameraHelper(this.camera);
        this.gui.add(cameraHelper, 'visible').name('cameraHelper').listen();
        this.helper.push(cameraHelper);
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
            let geometry = new THREE.PlaneGeometry(2, 2);
            let material = new THREE.ShaderMaterial({
                vertexShader: await this.fileLoader.loadAsync((await import(`./glsl/${this.info.name}.vert.glsl`)).default),
                fragmentShader: await this.fileLoader.loadAsync((await import(`./glsl/${this.info.name}.frag.glsl`)).default),
                uniforms: {
                    u_resolution: {
                        value: new THREE.Vector2(this.renderer.domElement.clientWidth, this.renderer.domElement.clientHeight)
                    }
                }
            });
            let object = new THREE.Mesh(geometry, material);
            this.objects.plane = object;
        }
    }
    rand(min, max) {
        if (max === undefined) {
            max = min;
            min = 0;
        }
        return min + (max - min) * Math.random();
    }
    initCamera() {

        this.camera = new THREE.OrthographicCamera();
        this.camera.position.set(0, 0, 0.5);
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
        this.animationId = requestAnimationFrame(this.animate);
    }
}