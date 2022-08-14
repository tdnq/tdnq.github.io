import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { removeChlidCanvas } from 'utils/common';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import wordTexture from './assets/world.jpg';
import gpw_data from "./assets/gpw_v4_basic_demographic_characteristics_rev10_a000_014mt_2010_cntm_1_deg.asc";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils";

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
        };
        this.textureLoader = new THREE.TextureLoader();
        this.fileLoader = new THREE.FileLoader();
    }
    async init(canvasContainer) {
        this.canvasContainer = canvasContainer?.current;
        removeChlidCanvas(this.canvasContainer);
        this.initThree();
        this.initCamera();
        this.initLight();
        await this.initObjects();
        await this.fileLoader.loadAsync(gpw_data).then(this.parseData).then(this.addRows);
        this.initHelper();
        this.initScene();
        this.initControl();
        requestAnimationFrame(this.animate);
    }
    addRows = (file) => {

        let { min, max, data } = file;
        let range = max - min;

        const lonHelper = new THREE.Object3D();
        this.helper.push(lonHelper);
        // We rotate the latHelper on its X axis to the latitude
        const latHelper = new THREE.Object3D();
        lonHelper.add(latHelper);
        // The position helper moves the object to the edge of the sphere
        const positionHelper = new THREE.Object3D();
        positionHelper.position.z = 1;
        latHelper.add(positionHelper);
        // Used to move the center of the cube so it scales from the position Z axis
        const originHelper = new THREE.Object3D();
        originHelper.position.z = 0.5;
        positionHelper.add(originHelper);

        let lonFudge = Math.PI * 0.5;
        let latFudge = Math.PI * -0.135;

        const geometries = [];
        const color = new THREE.Color();
        data.forEach((row, latNdx) => {
            row.forEach((value, lonNdx) => {
                if (value === undefined) {
                    return;
                }
                const amount = (value - min) / range;

                let geometry = new THREE.BoxGeometry(1, 1, 1);

                // 计算颜色
                const hue = THREE.MathUtils.lerp(0.7, 0.3, amount);
                const saturation = 1;
                const lightness = THREE.MathUtils.lerp(0.4, 1.0, amount);
                color.setHSL(hue, saturation, lightness);
                // 以0到255之间的值数组形式获取颜色
                const rgb = color.toArray().map(v => v * 255);

                // 创建一个数组来存储每个顶点的颜色
                const numVerts = geometry.getAttribute('position').count;
                const itemSize = 3;  // r, g, b
                const colors = new Uint8Array(itemSize * numVerts);

                // 将颜色复制到每个顶点的颜色数组中
                colors.forEach((v, ndx) => {
                    colors[ndx] = rgb[ndx % 3];
                });

                const normalized = true;
                const colorAttrib = new THREE.BufferAttribute(colors, itemSize, normalized);
                geometry.setAttribute('color', colorAttrib);

                lonHelper.rotation.y = THREE.MathUtils.degToRad(lonNdx + file.xllcorner) + lonFudge;
                latHelper.rotation.x = THREE.MathUtils.degToRad(latNdx + file.yllcorner) + latFudge;

                // 使用world matrix来操作辅助器
                positionHelper.scale.set(0.005, 0.005, THREE.MathUtils.lerp(0.01, 0.5, amount));
                originHelper.updateWorldMatrix(true, false);
                geometry.applyMatrix4(originHelper.matrixWorld);
                geometries.push(geometry);
            })
        });
        const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries(geometries, false);
        const material = new THREE.MeshPhongMaterial({ vertexColors: true });
        this.objects.dataBox = new THREE.Mesh(mergedGeometry, material);
    }
    parseData(text) {
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        let res = { data: [] };
        text.split('\n').forEach(line => {
            let lineData = line.trim().split(/\s+/);
            if (lineData.length === 2) {
                res[lineData[0]] = parseFloat(lineData[1]);
            } else if (lineData.length > 2) {
                const values = lineData.map(item => {
                    let val = parseFloat(item);
                    if (val === res.NODATA_value) {
                        return undefined;
                    }
                    max = Math.max(val, max);
                    min = Math.min(val, min);
                    return val;
                });
                res.data.push(values);
            }
        });
        return { ...res, ...{ max, min } };
    }
    initControl() {
        this.control = new OrbitControls(this.camera, this.renderer.domElement);
        this.control.addEventListener('change', this.render);
    }
    leaveCallback = () => {
        this.gui?.destroy();
    }
    render = () => {
        // this.control.update();
        this.renderer.render(this.scene, this.camera);
    }
    initThree() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight);
        this.canvasContainer.appendChild(this.renderer.domElement);
    }
    initScene() {
        this.scene = new THREE.Scene();
        this.scene.add(...Object.values(this.objects));
        this.scene.add(...this.helper, ...this.light);
    }
    initHelper() {
        if (window.location.pathname === '/') {
            return;
        }
        this.gui = new GUI();
    }
    async initObjects() {
        {
            let geometry = new THREE.SphereGeometry(1, 64, 32);
            let material = new THREE.MeshPhongMaterial({
                map: await this.textureLoader.loadAsync(wordTexture)
            });
            let object = new THREE.Mesh(geometry, material);
            this.objects.sphere = object;
        }
    }
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(60, this.canvasContainer.clientWidth / this.canvasContainer.clientHeight);
        this.camera.position.set(1.5, 1.5, 1.5);
        this.camera.lookAt(0, 0, 0);
    }
    initLight() {
        {
            let light = new THREE.AmbientLight(0XFFFFFF, 0.8);
            this.light.push(light);
        }
    }
    animate = (time) => {
        this.render(time);
        // this.animationId.set('worldPopulation', requestAnimationFrame(this.animate));
        window.addEventListener('mousedown', (e) => {
            e.preventDefault();
            window.focus();
        });
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
        });
    }
}