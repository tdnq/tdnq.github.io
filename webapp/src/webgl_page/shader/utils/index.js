import { MathUtils, Vector3 } from 'three';
export function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    let halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    let halfFovY = MathUtils.degToRad(camera.fov * 0.5);
    let distance = halfSizeToFitOnScreen / Math.tan(halfFovY);

    let direction = (new Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new Vector3(1, 0, 1))
        .normalize();
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;
    camera.updateProjectionMatrix();
    camera.lookAt(boxCenter);
}
export function makeXYZGui(folder, vector, name, changeFn = () => { }) {
    folder.add(vector, 'x', vector.x - 500, vector.x + 500).onChange(changeFn);
    folder.add(vector, 'y', vector.y - 500, vector.y + 500).onChange(changeFn);
    folder.add(vector, 'z', vector.z - 500, vector.z + 500).onChange(changeFn);
    folder.open();
    return folder;
}