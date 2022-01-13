import * as THREE from 'three';
import { removeChlidCanvas } from '../../../utils/common';

function init(ele, amount) {
    const aspect = ele.clientWidth / ele.clientHeight;

    const singleCameraWidth = ele.clientWidth / amount;
    const singleCameraHeight = ele.clientHeight / amount;

    const cameras = [];

    for (let x = 0; x < amount; x++) {
        for (let y = 0; y < amount; y++) {
            const subCamera = new THREE.PerspectiveCamera(45, aspect);
            subCamera.viewport = new THREE.Vector4(
                Math.floor(singleCameraWidth * x),
                Math.floor(singleCameraHeight * y),
                Math.floor(singleCameraWidth),
                Math.floor(singleCameraHeight));
            subCamera.position.x = -1 + 2.0 / amount * x + 0.5;
            subCamera.position.y = 1 - 2.0 / amount * y - 0.5;
            subCamera.position.z = 5;
            subCamera.lookAt(0, 0, 0)
            subCamera.updateMatrixWorld();
            cameras.push(subCamera);
        }
    }
    const camera = new THREE.ArrayCamera(cameras);

    const scene = new THREE.Scene();

    scene.add(new THREE.AmbientLight(0X222244));

    const light = new THREE.DirectionalLight();
    light.position.set(1, 1, 1);
    light.castShadow = true;
    // light.shadow.camera.zoom = 4;
    scene.add(light);

    const background = new THREE.Mesh(
        new THREE.PlaneGeometry(singleCameraWidth, singleCameraHeight),
        new THREE.MeshPhongMaterial({ color: 0x000066 })
    );
    background.receiveShadow = true;
    background.position.set(0, 0, -1);
    scene.add(background);

    const mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 1, 32),
        new THREE.MeshPhongMaterial({ color: 0xff0000 })
    );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(ele.clientWidth, ele.clientHeight);
    renderer.shadowMap.enabled = true;
    removeChlidCanvas(ele);
    ele.appendChild(renderer.domElement);
    return { scene, camera, mesh, renderer };
}
function animation({ renderer, mesh, scene, camera }) {
    mesh.rotation.x += 0.005;
    mesh.rotation.z += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animation.bind(this, { renderer, mesh, scene, camera }))

}
export default function cameraArray(ele) {
    const AMOUNT = Math.floor(ele.current.clientWidth / 200);
    const animationProps = init(ele.current, AMOUNT);
    animation.call(this, animationProps);
}