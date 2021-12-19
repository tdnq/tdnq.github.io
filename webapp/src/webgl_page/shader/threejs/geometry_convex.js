import * as THREE from 'three';
import disc_png from "./assets/disc.png";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';

export default function (ele, data = {}) {

    init.call(this, ele.current);
}

async function init(eleContainer) {
    let group, camera, scene, renderer;
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(eleContainer.clientWidth, eleContainer.clientHeight);
    eleContainer.appendChild(renderer.domElement);

    //camera

    camera = new THREE.PerspectiveCamera(40, eleContainer.clientWidth / eleContainer.clientHeight, 1, 1000);
    camera.position.set(15, 20, 30);
    scene.add(camera);

    //controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 20;
    controls.maxDistance = 50;
    controls.maxPolarAngle = Math.PI / 2;

    // ambient light
    scene.add(new THREE.AmbientLight(0x222222));
    // point light
    const light = new THREE.PointLight(0xffffff, 1);
    camera.add(light);

    // helper
    scene.add(new THREE.AxesHelper(20));
    //textures
    const loader = new THREE.TextureLoader();
    const textures = loader.load(disc_png);
    group = new THREE.Group();
    scene.add(group);

    // points
    let dodecahedronGemotry = new THREE.DodecahedronGeometry();
    dodecahedronGemotry.deleteAttribute('normal');
    dodecahedronGemotry.deleteAttribute('uv');

    dodecahedronGemotry = BufferGeometryUtils.mergeVertices(dodecahedronGemotry);
    const vertices = [];
    const positionAttribute = dodecahedronGemotry.getAttribute('position');
    for (let i = 0; i < positionAttribute.count; i++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positionAttribute, i);
        vertices.push(vertex);
    }

    const pointsMaterial = new THREE.PointsMaterial({
        color: 0x0080ff,
        map: textures,
        size: 1,
        alphaTest: 0.5
    });

    const pointsGeometry = new THREE.BufferGeometry().setFromPoints(vertices);
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(points);

    // convex hull
    const meshMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        opacity: 0.5,
        transparent: true
    });
    const meshGeometry = new ConvexGeometry(vertices);
    const mesh1 = new THREE.Mesh(meshGeometry, meshMaterial);
    mesh1.material.side = THREE.BackSide;
    mesh1.renderOrder = 0;
    group.add(mesh1);

    const mesh2 = new THREE.Mesh(meshGeometry, meshMaterial.clone());
    mesh2.material.side = THREE.FrontSide;
    mesh2.renderOrder = 1;
    group.add(mesh2);

    window.addEventListener('resize', onWindowResize);

    function onWindowResize() {
        camera.aspect = eleContainer.clientWidth / eleContainer.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(eleContainer.clientWidth, eleContainer.clientHeight);
    }
    const animation = () => {

        let id = requestAnimationFrame(animation);
        this.animationId.set("geometry_convex", id);
        group.rotation.y += 0.005;
        render();
    }
    animation();
    function render() {
        renderer.render(scene, camera);
    }
}
