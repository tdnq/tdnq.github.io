import * as THREE from 'three';
import AxesGridHelper from 'utils/Helper/AxesGridHelper';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
export default class Index {
    constructor(animationId) {
        this.animationId = animationId;
        this.scene = null;
        this.objects = {};
        this.light = [];
        this.camera = null;
        this.renderer = null;
    }
    init(canvasContainer) {
        this.canvasContainer = canvasContainer?.current;
        this.initThree();
        this.initCamera();
        this.initLight();
        this.initObjects();
        this.initScene();
        this.animate();
        if (window.location.pathname !== '/') {
            this.initHelper();
        }
    }
    leaveCallback = () => {
        this.gui.destroy();
    }
    render = () => {
        this.renderer.render(this.scene, this.camera);
    }
    initThree() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight);
        this.canvasContainer.appendChild(this.renderer.domElement);
    }
    initScene() {
        this.scene = new THREE.Scene();
        let solarSystem = new THREE.Object3D();
        let earthOrbit = new THREE.Object3D();
        let moonOrbit = new THREE.Object3D();

        moonOrbit.add(this.objects.moon);
        moonOrbit.position.setX(0.1);
        earthOrbit.add(this.objects.earth, moonOrbit);
        earthOrbit.position.setX(0.3);
        solarSystem.add(this.objects.sun, earthOrbit);

        this.objects = { ...this.objects, solarSystem, earthOrbit, moonOrbit };
        this.scene.add(solarSystem, ...this.light);
    }
    initObjects() {
        let geometry = new THREE.SphereGeometry(0.05, 6, 6);
        {
            let material = new THREE.MeshPhongMaterial({
                emissive: 0x2233ff,
                color: 0xF28D00
            });
            let object = new THREE.Mesh(geometry, material);
            object.scale.set(1.5, 1.5, 1.5);
            this.objects.sun = object;
        }
        {

            let material = new THREE.MeshPhongMaterial({
                emissive: 0x2233ff,
                color: 0x0000ff
            });
            let object = new THREE.Mesh(geometry, material);
            object.scale.set(0.5, 0.5, 0.5);
            this.objects.earth = object;
        }
        {

            let material = new THREE.MeshPhongMaterial({
                emissive: 0x2233ff,
                color: 0x888888
            });
            let object = new THREE.Mesh(geometry, material);
            object.scale.set(0.3, 0.3, 0.3);
            this.objects.moon = object;
        }
    }
    initCamera() {

        this.camera = new THREE.PerspectiveCamera(45, this.canvasContainer.clientWidth / this.canvasContainer.clientHeight);
        this.camera.position.setY(1);
        this.camera.lookAt(0, 0, 0);
    }
    initLight() {
        {
            let light = new THREE.AmbientLight(0XFFFFFF);
            this.light.push(light);
        }
    }
    initHelper() {
        this.gui = new GUI();
        Object.keys(this.objects).forEach(key => {
            this.makeAxesGridHelper(this.objects[key], key)
        })
    }
    makeAxesGridHelper(node, lable, units) {
        let helper = new AxesGridHelper(node, units);
        this.gui.add(helper, 'visible').name(lable);
    }
    animate = () => {
        Object.values(this.objects).forEach(item => {
            item.rotation.y += 0.01;
        });
        this.render();
        this.animationId.set('space', requestAnimationFrame(this.animate));
    }
}