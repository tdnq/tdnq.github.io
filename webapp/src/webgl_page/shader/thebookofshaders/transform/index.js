import * as THREE from "three";
import ShapeObject from '../utils/shapeObject';
import { removeChlidCanvas } from "../../../../utils/common";
// eslint-disable-next-line no-unused-vars
export default async function shapes(ele, data = {}) {
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const clock = new THREE.Clock();

    renderer.setSize(ele.current.clientWidth, ele.current.clientHeight);

    const shapeObject = new ShapeObject(ele.current);
    await shapeObject.add(scene, 'translate');
    removeChlidCanvas(ele.current);
    ele.current.appendChild(renderer.domElement);

    const animate = () => {
        const id = requestAnimationFrame(animate);
        this.animationId.set('transform', id);
        shapeObject.transformMaterial.uniforms.u_time.value = clock.getElapsedTime();
        renderer.render(scene, camera);
    }
    animate();
}
