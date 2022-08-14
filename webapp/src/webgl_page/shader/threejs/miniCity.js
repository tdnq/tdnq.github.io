import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { removeChlidCanvas } from 'utils/common';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { frameArea, makeXYZGui } from '../utils/index';
export default class Index {
    constructor(animationId = new Map()) {
        this.animationId = animationId;
        this.scene = null;
        this.objects = {};
        this.light = [];
        this.camera = null;
        this.renderer = null;
        this.helper = [];
        this.gltfLoader = new GLTFLoader();
        this.gltfLoader.setResourcePath('/assets/');
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
        this.initScene();
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
        this.renderer.shadowMap.enabled = true;
        this.renderer.setClearColor(0xDEFEFF);
        this.renderer.setSize(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight);
        this.canvasContainer.appendChild(this.renderer.domElement);
    }
    initScene() {
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
            await this.gltfLoader.loadAsync('/assets/model/miniCity.gltf').then(gltf => {
                const root = gltf.scene;
                this.objects.city = root;
                let box = new THREE.Box3().setFromObject(root);
                let boxSize = box.getSize(new THREE.Vector3()).length();
                let boxCenter = box.getCenter(new THREE.Vector3());
                frameArea(boxSize * 0.5, boxSize, boxCenter, this.camera);

                this.control.maxDistance = boxSize * 10;
                this.control.target.copy(boxCenter);
                this.control.update();
                root.traverse(obj => {
                    if (obj.castShadow !== undefined) {
                        obj.castShadow = true;
                        obj.receiveShadow = true;
                    }
                })
            })
        }
    }
    initCamera() {

        this.camera = new THREE.PerspectiveCamera(60, this.canvasContainer.clientWidth / this.canvasContainer.clientHeight, 1, 6000);
    }
    initLight() {
        {
            let light = new THREE.AmbientLight(0XFFFFFF, 0.6);
            this.light.push(light);
        }
        {
            let light = new THREE.DirectionalLight(0XFFFFFF, 1);
            light.castShadow = true;
            light.position.set(this.camera.position.x, 514, this.camera.position.x);
            light.shadow.mapSize.width = 2048;
            light.shadow.bias = -0.004;
            light.shadow.mapSize.height = 2048;
            const cam = light.shadow.camera;
            cam.near = 1;
            cam.far = 2000;
            cam.left = -1500;
            cam.right = 1500;
            cam.top = 1500;
            cam.bottom = -1500;
            this.light.push(light);

            if (this.data.isHideHelper) {
                return;
            }
            let helper = new THREE.DirectionalLightHelper(light);
            let folder = this.gui.addFolder('DirectionalLightHelper');
            makeXYZGui(folder, light.position, 'directionLightHelperPosition', () => {
                light.updateMatrixWorld();
                light.target.updateMatrixWorld();
                helper.update();
            }, helper);
            folder.add(helper, 'visible').name('lightHelper').listen();
            let cameraHelper = new THREE.CameraHelper(light.shadow.camera);
            folder.add(cameraHelper, 'visible').name('cameraHelper').listen();
            this.helper.push(cameraHelper);
            this.helper.push(helper);
        }
    }
    animate = (time) => {
        this.render(time);
        this.animationId.set('miniCity', requestAnimationFrame(this.animate));
    }
}