import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { removeChlidCanvas } from 'utils/common';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
export default class Index {
    constructor(animationId) {
        this.animationId = animationId;
        this.scene = null;
        this.objects = {};
        this.light = [];
        this.camera = null;
        this.renderer = null;
        this.helper = [];
        this.data = {
            sphereRadius: 0.1,
            srcSphereY: []
        };
    }
    init(canvasContainer) {
        this.canvasContainer = canvasContainer?.current;
        removeChlidCanvas(this.canvasContainer);
        this.initThree();
        this.initCamera();
        this.initLight();
        this.initObjects();
        this.initHelper();
        this.initScene();
        this.initControl();
        requestAnimationFrame(this.animate);
    }
    initControl() {
        this.control = new OrbitControls(this.camera, this.renderer.domElement);
    }
    leaveCallback = () => {
        this.gui?.destroy();
    }
    render = (time) => {
        this.objects.sphere.children.forEach((item, index) => {
            const u = index / this.objects.sphere.children.length;

            const speed = time * 0.0002;
            const angle = speed + u * Math.PI * 2 * (index % 1 ? 1 : -1);
            const radius = Math.sin(speed - index) * 1;

            const yOff = Math.abs(Math.sin(time * 0.0002 + index));

            item.position.set(
                Math.cos(angle) * radius,
                THREE.MathUtils.lerp(-0.5, this.data.srcSphereY[index], yOff),
                Math.sin(angle) * radius
            );

        })
        this.renderer.render(this.scene, this.camera);
    }
    initThree() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.shadowMap.enabled = true;
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
    initObjects() {
        {
            let geometry = new THREE.PlaneGeometry(3, 3);
            let material = new THREE.MeshPhongMaterial({
                color: 0xfac493
            });
            let object = new THREE.Mesh(geometry, material);
            object.receiveShadow = true;
            object.rotateX(-90 * Math.PI / 180);
            object.position.y = -0.5;
            this.objects.ground = object;
        }
        {
            let geometry = new THREE.SphereGeometry(this.data.sphereRadius);
            let object = new THREE.Group();
            for (let i = 0; i < 20; i++) {
                let material = new THREE.MeshPhongMaterial({
                    color: new THREE.Color(Math.random(), Math.random(), Math.random())
                });

                let sphere = new THREE.Mesh(geometry, material);

                sphere.position.set(Math.random() > 0.5 ? Math.random() : -Math.random(), Math.random(), Math.random() > 0.5 ? Math.random() : -Math.random());
                this.data.srcSphereY.push(sphere.position.y);
                sphere.castShadow = true;
                object.add(sphere);
            }
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
            let light = new THREE.AmbientLight(0XFFFFFF, 0.2);
            this.light.push(light);
        }
        {
            let light = new THREE.DirectionalLight(0xffffaa, 1);
            light.position.set(-0.1, 1.2, 0);
            light.castShadow = true;
            light.shadow.mapSize.width = 2048;
            light.shadow.mapSize.height = 2048;

            const d = 2;
            light.shadow.camera.left = -d;
            light.shadow.camera.right = d;
            light.shadow.camera.top = d;
            light.shadow.camera.bottom = -d;
            light.shadow.camera.near = 0.1;
            light.shadow.camera.far = 2;
            light.shadow.bias = 0.001;
            light.shadow.radius = 1;
            this.light.push(light);
        }
    }
    animate = (time) => {
        this.render(time);
        this.animationId.set('shadow', requestAnimationFrame(this.animate));
    }
}