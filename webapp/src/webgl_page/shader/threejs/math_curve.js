import * as Three from "three";
import * as getMathShape from "../utils/mathShape.js";
import { getUpdateData } from "../utils/updateData.js";

export default function (ele, updateMeta = []) {
    let data = {
        lineType: [
            // 二维曲线
            {
                type: 'power',
                props: { power: 2, scale: 0.2, parms: { color: 0xffffff } },
                isHidden: true,
                dimension: 2,
            },
            {
                type: 'circle',
                props: { radius: 20, parms: { color: 0x0000ff }, interval: 0.1 },
                isHidden: true,
                dimension: 2,
            },
            {
                type: 'dcrHeart',
                props: { parms: { color: 0x00ffff }, interval: 0.01, scale: 20 },
                dimension: 2,
            },
            {
                type: 'hyperbola',
                props: {
                    parms: { color: 0xff00ff },
                    interval: 0.1,
                    a: 20,
                    b: 5
                },
                dimension: 2,
            },
            //三维曲线:
            {
                type: 'sphere',
                props: {
                    parms: {
                        color: 0x515db9,
                        opacity: 0.8,
                        transparent: true
                    },
                    radius: 10,
                    segemnt: 16,
                    rings: 16,
                },
                dimension: 3
            },
            // {
            //     type: 'heart3d',
            //     props: {
            //         parms: {
            //             color: 0x515db9,
            //             opacity: 0.8,
            //             transparent: true
            //         },
            //         interval: 0.05,
            //         scale: 1
            //     },
            //     dimension: 3
            // }
        ],
        dimension: 2,
    };
    data = getUpdateData(data, updateMeta);
    let canvasContainer = ele.current;
    let scene = new Three.Scene();
    let camera = new Three.PerspectiveCamera(75, canvasContainer.clientWidth / canvasContainer.clientHeight, 1, 200);

    // helper
    scene.add(new Three.AxesHelper(canvasContainer.clientHeight / 4));
    scene.position.set(0, 0, -100);

    // 三维坐标
    if (data.dimension === 3) {
        camera.position.set(10, 10, 0);
        camera.lookAt(0, 0, -100);
        scene.rotation.x = -Math.PI / 2;
        scene.rotation.z = -Math.PI / 2;
    }

    // 线模型
    let lineGroup = model(data, canvasContainer);
    scene.add(lineGroup);

    let renderer = new Three.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
    canvasContainer.querySelectorAll('canvas').forEach((item) => item.remove());
    canvasContainer.appendChild(renderer.domElement);

    renderer.render(scene, camera);
}
function model(data, canvasContainer) {
    let group = new Three.Group();
    data.lineType.forEach(item => {
        if (item.isHidden || item.dimension !== data.dimension) {
            return;
        }
        group.add(...getMathShape[`${item.type}`](item, canvasContainer));
    });
    return group;
}
