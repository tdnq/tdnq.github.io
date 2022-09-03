import { Raycaster, Vector2 } from 'three';
export default class Index {
    constructor(canvas) {
        this.raycaster = new Raycaster();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
        this.canvas = canvas;
        this.pickPosition = new Vector2(-100000, -100000)
    }
    pick(scene, camera, time) {
        if (this.pickedObject) {
            this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
            this.pickedObject = null;
        }
        let normalizedPosition = this.pickPosition;
        this.raycaster.setFromCamera(normalizedPosition, camera);
        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        if (intersectedObjects.length) {
            this.pickedObject = intersectedObjects[0].object;
            this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
            this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xffff00 : 0xff0000);
        }
    }
    getELeRelativePosition(event) {
        let rect = this.canvas.getBoundingClientRect();
        return {
            x: (event.clientX - rect.left) * this.canvas.width / rect.width,
            y: (event.clientY - rect.top) * this.canvas.height / rect.height
        };
    }
    setPickPosition = (event) => {
        let pos = this.getELeRelativePosition(event);
        this.pickPosition.set(pos.x / this.canvas.width * 2 - 1, pos.y / this.canvas.height * -2 + 1);
    }
    clearPickPosition = () => {
        this.pickPosition.set(-100000, -100000);
    }
    bindEvent() {
        this.canvas.addEventListener('mousemove', this.setPickPosition);
        this.canvas.addEventListener('mousemout', this.clearPickPosition);
        this.canvas.addEventListener('mousemleave', this.clearPickPosition);
        this.canvas.addEventListener('touchstart', (event) => {
            event.preventDefault();
            this.setPickPosition(event.touches[0]);
        }, { passive: false });
        this.canvas.addEventListener('touchmove', (event) => this.setPickPosition(event.touches[0]));
        this.canvas.addEventListener('touchend', this.clearPickPosition);
    }
}