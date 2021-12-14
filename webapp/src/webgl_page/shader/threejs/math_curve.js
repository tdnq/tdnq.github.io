import * as Three from "three";

export default function (ele, data) {
    data = { ...data, lineType: '' };
    let canvasContainer = ele.current;
    let scene = new Three.Scene();
    let camera = new Three.PerspectiveCamera(75, canvasContainer.clientWidth / canvasContainer.clientHeight, 100, 500);
    camera.position.set(0, 0, 500);
    camera.lookAt(0, 0, 0);
    // camera.up.set(0, 0, 10);

    let lineGroup = model(data, canvasContainer);

    scene.add(lineGroup);
    let renderer = new Three.WebGLRenderer(lineGroup);
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    canvasContainer.appendChild(renderer.domElement);
    renderer.render(scene, camera);
}
function model(data, canvasContainer) {
    let group = new Three.Group();
    group.add(getLine('y=x', canvasContainer));
    group.add(getLine('y=-x', canvasContainer));
    group.add(getLine('y=x*x', canvasContainer));

    return group;
}
function getLine(type, canvasContainer) {
    let material = new Three.LineBasicMaterial({ color: 0xffffff });
    let points = [];
    for (let x = -canvasContainer.clientWidth / 4; x < canvasContainer.clientWidth / 4; x += 0.01) {
        let y = 0, z = 0;
        switch (type) {
            case 'y=x':
                y = x;
                z = 0;
                break;
            case 'y=-x':
                y = -x;
                z = 0;
                break;
            case 'y=x*x':
                y = x * x / 4;
                z = 0;
                break;
            default:
                break;
        }
        points.push(new Three.Vector3(x, y, z));
    }
    let geometry = new Three.BufferGeometry().setFromPoints(points);
    let line = new Three.Line(geometry, material);
    return line;
}