import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { removeChlidCanvas } from 'utils/common';
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
            targetPosition: new THREE.Vector3()
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
        time *= 0.001;

        const tankTime = time * 0.05;
        let tankPosition = this.data.curve.getPointAt(tankTime % 1);
        let tankTarget = this.data.curve.getPointAt((tankTime + 0.01) % 1);
        this.objects.tank.position.set(tankPosition.x, this.objects.tank.position.y, tankPosition.y);
        this.objects.tank.lookAt(tankTarget.x, 0, tankTarget.y);
        this.objects.tank.rotateX(-75 * Math.PI / 180);

        let wheels = this.objects.tank.getObjectByName('wheels').children;
        wheels.forEach((item) => {
            item.rotateY(time * 1);
        });

        let turrent = this.objects.tank.getObjectByName('head');
        this.objects.target.getWorldPosition(this.data.targetPosition);
        turrent.lookAt(this.data.targetPosition);


        this.renderer.render(this.scene, this.camera);
    }
    initThree() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.shadowMap.enabled = true;
        this.renderer.setClearColor(0xaaaaaa);
        this.renderer.setSize(this.canvasContainer.clientWidth, this.canvasContainer.clientHeight);
        this.canvasContainer.appendChild(this.renderer.domElement);
    }
    initScene() {
        this.scene = new THREE.Scene();
        this.scene.add(...Object.values(this.objects));
        this.scene.add(...this.helper, ...this.light);
    }
    initHelper() {
        let grid = new THREE.GridHelper(2, 10);
        grid.material.depthTest = false;
        // this.helper.push(grid, new THREE.AxesHelper());
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
            this.objects.ground = object;
        }
        {
            let tank = this.getTankObject();
            this.objects.tank = tank;
        }
        {
            const curve = new THREE.SplineCurve([
                new THREE.Vector3(0.5, 0.5),
                new THREE.Vector3(0.5, -0.5),
                new THREE.Vector3(-0.5, -0.5),
                new THREE.Vector3(-0.5, 0.5),
                new THREE.Vector3(0.5, 0.5),
            ]);
            const points = curve.getPoints(50);
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
            const splineObject = new THREE.Line(geometry, material);
            splineObject.rotateX(-90 * Math.PI / 180);
            this.objects.splineObject = splineObject;
            this.data.curve = curve;
        }
        {
            let target = new THREE.Mesh(new THREE.SphereGeometry(0.05), new THREE.MeshPhongMaterial({ color: 0x0000ff }));
            target.castShadow = true;
            target.position.set(0.6, 0.6, -0.8);
            this.objects.target = target;
        }
    }
    getTankObject() {
        let tank = new THREE.Group();
        let body = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.6), new THREE.MeshPhongMaterial({
            color: 0x4e6781,
        }));
        let head = new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshPhongMaterial({
            color: 0x4e6781,
        }));
        let gunBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.4), new THREE.MeshPhongMaterial({
            color: 0x4e6781,
        }));
        gunBarrel.rotateX(60 * Math.PI / 180);
        gunBarrel.position.setY(0.15);
        gunBarrel.translateZ(0.1);

        let headObj = new THREE.Group();
        headObj.name = 'head';
        headObj.add(gunBarrel, head);
        headObj.position.setY(0.1);

        let wheels = new THREE.Group();
        wheels.name = 'wheels';
        {
            let wheelGeometry = new THREE.CylinderGeometry(0.08, 0.08, 0.08);
            for (let i = 0; i < 6; i++) {
                let wheel = new THREE.Mesh(wheelGeometry, new THREE.MeshPhongMaterial({
                    color: 0x888888,
                }));
                let offsetX = Math.floor(i / 3) === 0 ? -0.18 : 0.18;
                let offsetZ = i % 3 * 0.2;
                wheel.position.set(offsetX, -0.05, offsetZ + (-0.2));
                wheel.rotateZ(90 * Math.PI / 180);
                wheels.add(wheel);
            }
        }
        tank.add(body, headObj, wheels);
        tank.castShadow = true;
        tank.position.setY(0.15);
        tank.scale.set(0.6, 0.6, 0.6);
        return tank;
    }
    initCamera() {

        this.camera = new THREE.PerspectiveCamera(60, this.canvasContainer.clientWidth / this.canvasContainer.clientHeight);
        this.camera.position.set(1, 1, 1);
        this.camera.lookAt(0, 0, 0);
    }
    initLight() {
        {
            let light = new THREE.AmbientLight(0XFFFFFF, 0.2);
            this.light.push(light);
        }
        {
            let light = new THREE.DirectionalLight(0xffffff);
            this.light.push(light);
            light.position.set(0, 1, 0);
            light.castShadow = true;
            light.shadow.mapSize.width = 2048;
            light.shadow.mapSize.height = 2048;
            const d = 50;
            light.shadow.camera.left = -d;
            light.shadow.camera.right = d;
            light.shadow.camera.top = d;
            light.shadow.camera.bottom = -d;
            light.shadow.camera.near = 1;
            light.shadow.camera.far = 50;
            light.shadow.bias = 0.001;
        }
    }
    animate = (time) => {
        this.render(time);
        this.animationId.set('space', requestAnimationFrame(this.animate));
    }
}