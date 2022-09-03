import { WebGLRenderTarget, Vector2 } from 'three';
export default class Index {
    constructor(canvas) {
        this.pickingTexture = new WebGLRenderTarget(1, 1);
        this.pixelBuffer = new Uint8Array(4);
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
        this.canvas = canvas;
        this.pickPosition = new Vector2(-10000, 10000);
    }
    pick(scene, camera, renderer, idToObject, time) {
        const { pickingTexture, pixelBuffer } = this;
        if (this.pickedObject) {
            this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
            this.pickedObject = null;
        }
        const pixelRatio = renderer.getPixelRatio();
        camera.setViewOffset(
            renderer.getContext().drawingBufferWidth,
            renderer.getContext().drawingBufferHeight,
            this.pickPosition.x * pixelRatio | 0,
            this.pickPosition.y * pixelRatio | 0,
            1,
            1
        );
        renderer.setRenderTarget(pickingTexture);
        renderer.render(scene, camera);
        renderer.setRenderTarget(null);
        camera.clearViewOffset();

        renderer.readRenderTargetPixels(
            pickingTexture,
            0,
            0,
            1,
            1,
            pixelBuffer
        );
        const id = (pixelBuffer[0] << 16) | (pixelBuffer[1] << 8) | (pixelBuffer[2]);

        const intersectedObject = idToObject[id];
        if (intersectedObject) {
            this.pickedObject = intersectedObject;
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
        this.pickPosition.set(pos.x, pos.y);
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