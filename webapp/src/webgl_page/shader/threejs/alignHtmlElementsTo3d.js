import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { removeChlidCanvas } from 'utils/common';
import texturePng from './assets/country-outlines-4k.png';
import countryInfoJson from './assets/country-info.json';
// import GPUPickerHelper from '../utils/gpuPickerHelper';
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
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
            isHideHelper: window.location.pathname === '/',
        };
        this.info = {
            name: 'align-html-elements-to-3d',
            describe: '对齐HTML元素到3D对象',
            source: 'three.js examples',
            time: '2022/09/24',
            showPriority: 55,
        },
            this.textureLoader = new THREE.TextureLoader();
    }
    async init(canvasContainer) {
        this.canvasContainer = canvasContainer?.current;
        this.canvasContainer.style.position = 'relative';
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
        this.control.enableDamping = true;
        this.control.enablePan = false;
        this.control.minDistance = 1.2;
        this.control.maxDistance = 4;
        this.control.update();
        this.control.addEventListener('change', this.render);
    }
    leaveCallback = () => {
        this.gui?.destroy();
    }
    render = () => {
        this.updateLabel();
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
            this.scene.background = new THREE.Color(0x236);
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
            let geometry = new THREE.SphereGeometry(1);
            let material = new THREE.MeshPhongMaterial({
                map: await this.textureLoader.loadAsync(texturePng),
            });
            this.objects.sphere = new THREE.Mesh(geometry, material);
        }
        this.loadCountryData();
    }
    loadCountryData() {
        let countryData = countryInfoJson;
        const lonFudge = Math.PI * 1.5;
        const latFudge = Math.PI;
        const lonHelper = new THREE.Object3D();
        const latHelper = new THREE.Object3D();
        lonHelper.add(latHelper);
        const positionHelper = new THREE.Object3D();
        positionHelper.position.setZ(1);
        latHelper.add(positionHelper);
        const labelParentElem = this.canvasContainer;

        countryData.forEach((country) => {
            let { lat, lon, name, max, min } = country;
            lonHelper.rotateY(THREE.MathUtils.degToRad(lon) + lonFudge);
            latHelper.rotateX(THREE.MathUtils.degToRad(lat) + latFudge);
            positionHelper.updateWorldMatrix(true, false);

            let position = new THREE.Vector3();
            positionHelper.getWorldPosition(position);

            country.position = position;
            const ele = document.createElement('span');
            ele.style.position = 'absolute';
            ele.style.color = '#fff';
            ele.style.left = 0;
            ele.style.top = 0;
            ele.style.userSelect = 'none';
            ele.style.pointerEvents = 'none';

            ele.textContent = name;
            labelParentElem.appendChild(ele);
            country.ele = ele;
            country.area = (max[0] - min[0]) * (max[1] - min[1]);
        });
        this.data.countryData = countryData;
    }
    updateLabel(countryData = this.data.countryData) {
        let tempV = new THREE.Vector3();
        let cameraToPoint = new THREE.Vector3();
        let cameraPosition = new THREE.Vector3();
        let normalMatrix = new THREE.Matrix3();
        let minVisibleDot = 0.2;
        normalMatrix.getNormalMatrix(this.camera.matrixWorldInverse);
        this.camera.getWorldPosition(cameraPosition);

        countryData.forEach(country => {
            let { position, ele, area } = country;
            if (area < 20 * 20) {
                ele.style.display = 'none';
                return;
            }
            tempV.copy(position);
            tempV.applyMatrix3(normalMatrix);
            cameraToPoint.copy(position);
            cameraToPoint.applyMatrix4(this.camera.matrixWorldInverse).normalize();
            const dot = tempV.dot(cameraToPoint);
            if (dot < minVisibleDot) {
                ele.style.display = 'none';
                return;
            }
            ele.style.display = '';
            tempV.copy(position);
            tempV.project(this.camera);
            let x = (tempV.x * 0.5 + 0.5) * this.renderer.domElement.clientWidth;
            let y = (tempV.y * -0.5 + 0.5) * this.renderer.domElement.clientHeight;
            ele.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
            ele.style.zIndex = (-tempV.z * 0.5 + 0.5) * 100000 | 0;
        })
    }
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(60, this.canvasContainer.clientWidth / this.canvasContainer.clientHeight, 1, 1000);
        this.camera.position.set(1.5, 1.5, 1.5);
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
        // this.animationId.set('align_html_elements_to_3d', requestAnimationFrame(this.animate));
    }
}