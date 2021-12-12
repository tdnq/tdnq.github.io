import * as Three from "three";
import rainPng from "./assets/rain.png";
export default async function (ele, data = {}) {
    data = { count: 1000, baseScale: 10, speed: 0.5, ...data, }
    let canvasContainer = ele.current;
    let scene = new Three.Scene();
    let camera = new Three.PerspectiveCamera(
        100,
        canvasContainer.clientWidth / canvasContainer.clientHeight,
        1,
        1000);
    camera.position.set(0, 0, 100);

    let group = await model(canvasContainer, data);
    scene.add(group);

    let renderer = new Three.WebGLRenderer();
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);

    canvasContainer.querySelectorAll('canvas').forEach((item) => item.remove());
    canvasContainer.appendChild(renderer.domElement);

    render();

    function render() {

        group.children.forEach(sprite => {
            sprite.position.y -= data.speed;
            sprite.position.x += 0.1;
            if (sprite.position.y < -canvasContainer.clientHeight / 2) {
                sprite.position.y = canvasContainer.clientHeight / 2;
            }
        });
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
}
async function model(canvasContainer, data) {
    let group = new Three.Group();
    let loader = new Three.TextureLoader();
    let textureData = await loader.loadAsync(rainPng);
    for (let i = 0; i < data.count; i++) {
        let spriteMaterial = new Three.SpriteMaterial({
            map: textureData
        });
        let sprite = new Three.Sprite(spriteMaterial);
        group.add(sprite);
        {
            let random = Math.random() * data.baseScale;
            sprite.scale.set(random, random, random);

            let [p_x, p_y, p_z] = [
                (Math.random() - 0.5) * canvasContainer.clientWidth * 2,
                (Math.random() - 0.5) * canvasContainer.clientHeight,
                (Math.random() - 0.5) * 100
            ];
            sprite.position.set(p_x, p_y, p_z);
        }
    }
    return group;
}