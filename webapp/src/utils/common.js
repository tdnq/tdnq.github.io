export function removeChlidCanvas(canvasContainer) {
  canvasContainer.querySelectorAll('canvas')?.forEach((item) => item.remove());
}
