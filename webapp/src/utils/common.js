export function removeChlidCavas(canvasContainer) {
    canvasContainer.querySelectorAll('canvas').forEach((item) => item.remove());
}