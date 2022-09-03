import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { removeChlidCanvas } from 'utils/common';
import texturePng from './assets/frame.png';
import GPUPickerHelper from '../utils/gpuPickerHelper';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
export default class Index {
    constructor(animationId = new Map()) {
        this.animationId = animationId;
        this.scene = null;
        this.objects = {};
        this.light = [];
        this.camera = null;
        this.renderer = null;
        this.helper = [];
        this.cameraPole = new THREE.Object3D();
        this.data = {
            isHideHelper: window.location.pathname === '/',
            idToObject: {},
            pickerHelperMesh: []
        };
        this.pickHelper = new GPUPickerHelper();
        this.textureLoader = new THREE.TextureLoader();
    }
    async init(canvasContainer) {
        this.canvasContainer = canvasContainer?.current;
        this.gui = this.data.isHideHelper ? null : new GUI()
        removeChlidCanvas(this.canvasContainer);
        this.initThree();
        {
            this.pickHelper.canvas = this.renderer.domElement;
            this.pickHelper.bindEvent();
        }
        this.initCamera();
        this.initControl();
        await this.initObjects();
        this.initLight();
        this.initHelper();
        await this.initScene();
        requestAnimationFrame(this.animate);
    }
    initControl() {
        // this.control = new OrbitControls(this.camera, this.renderer.domElement);
    }
    leaveCallback = () => {
        this.gui?.destroy();
    }
    render = (time) => {
        time *= 0.001;
        this.cameraPole.rotation.y = time * 0.1;
        this.pickHelper.pick(this.data.pickerHelperScene, this.camera, this.renderer, this.data.idToObject, time)
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
            this.scene.add(this.cameraPole);
            this.scene.background = new THREE.Color(0xffffff);
            this.scene.add(...Object.values(this.objects));
            if (this.helper.length) {
                this.scene.add(...this.helper);
            }
            if (this.light.length) {
                this.scene.add(...this.light);
            }
        }
        {
            let pickerHelperScene = new THREE.Scene();
            pickerHelperScene.background = new THREE.Color(0);
            pickerHelperScene.add(...this.data.pickerHelperMesh);
            this.data.pickerHelperScene = pickerHelperScene;
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
            let geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
            let object = new THREE.Group();
            let texture = this.textureLoader.load(texturePng)
            for (let i = 0; i < 100; i++) {
                let id = i + 1;
                let material = new THREE.MeshPhongMaterial({
                    color: 0xFFFFFF * Math.random(),
                    map: texture,
                    transparent: true,
                    alphaTest: 0.1,
                    side: THREE.DoubleSide
                });
                let mesh = new THREE.Mesh(geometry, material);
                this.data.idToObject[id] = mesh;

                mesh.position.set(this.rand(-1, 1), this.rand(-1, 1), this.rand(-1, 1));
                mesh.rotation.set(this.rand(Math.PI), this.rand(Math.PI), this.rand(Math.PI));
                mesh.scale.set(this.rand(1, 3), this.rand(1, 3), this.rand(1, 3));

                const pickerHelperMaterial = new THREE.MeshPhongMaterial({
                    emissive: new THREE.Color(id),
                    color: new THREE.Color(0, 0, 0),
                    specular: new THREE.Color(0, 0, 0),
                    map: texture,
                    transparent: true,
                    side: THREE.DoubleSide,
                    alphaTest: 0.5,
                    blending: THREE.NoBlending
                })
                let pickerHelperMesh = new THREE.Mesh(geometry, pickerHelperMaterial);
                pickerHelperMesh.rotation.copy(mesh.rotation);
                pickerHelperMesh.position.copy(mesh.position);
                pickerHelperMesh.scale.copy(mesh.scale);
                this.data.pickerHelperMesh.push(pickerHelperMesh);
                object.add(mesh);
            }
            this.objects.box = object;
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

        this.camera = new THREE.PerspectiveCamera(60, this.canvasContainer.clientWidth / this.canvasContainer.clientHeight, 1, 1000);
        this.camera.position.set(1.5, 1.5, 1.5);
        this.camera.lookAt(0, 0, 0);
        this.cameraPole.add(this.camera);
    }
    initLight() {
        {
            let light = new THREE.AmbientLight(0XFFFFFF, 0.6);
            this.light.push(light);
        }
    }
    animate = (time) => {
        this.render(time);
        this.animationId.set('picker', requestAnimationFrame(this.animate));
    }
}