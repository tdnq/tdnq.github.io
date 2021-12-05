import * as Three from "three";

export default function taste(ele) {
    ele = ele.current;
    const material = new Three.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new Three.Vector3(- 10, 0, 0));
    points.push(new Three.Vector3(0, 10, 0));
    points.push(new Three.Vector3(10, 0, 0));
    const geometry = new Three.BufferGeometry().setFromPoints(points);
    const line = new Three.Line(geometry, material);

    const camera = new Three.PerspectiveCamera(45, ele.clientWidth / ele.clientHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new Three.Scene();
    scene.add(line);

    const render = new Three.WebGLRenderer();
    render.setSize(ele.clientWidth, ele.clientHeight);
    ele.appendChild(render.domElement);
    render.render(scene, camera);
}