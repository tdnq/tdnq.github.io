import * as Three from 'three';

export function power(lineMete, canvasContainer) {
  const material = new Three.LineBasicMaterial(lineMete.props.parms);
  const points = [];
  for (let x = -canvasContainer.clientWidth / 4; x < canvasContainer.clientWidth / 4; x += 0.01) {
    let y = 0; let
      z = 0;
    y = x ** lineMete.props.power * lineMete.props.scale;
    z = 0;
    points.push(new Three.Vector3(x, y, z));
  }
  const geometry = new Three.BufferGeometry().setFromPoints(points);
  const line = new Three.Line(geometry, material);
  return [line];
}
export function circle(lineMete, canvasContainer) {
  const material = new Three.LineBasicMaterial(lineMete.props.parms);
  const points = [];
  for (let i = 0; i <= 360; i += lineMete.props.interval) {
    points.push(
      new Three.Vector3(
        Math.sin(i * (Math.PI / 180)) * lineMete.props.radius,
        Math.cos(i * (Math.PI / 180)) * lineMete.props.radius,
        0,
      ),
    );
  }
  const geometry = new Three.BufferGeometry().setFromPoints(points);
  const line = new Three.LineLoop(geometry, material);
  return [line];
}

export function hyperbola(lineMete, canvasContainer) {
  const material = new Three.LineBasicMaterial(lineMete.props.parms);
  const { a, b } = lineMete.props;
  const points = []; // m(x,y)
  // let c = Math.sqrt(a * a + b * b);
  for (let y = -canvasContainer.clientHeight / 2; y < canvasContainer.clientHeight / 2; y += lineMete.props.interval) {
    const x = Math.sqrt(a * a * b * b + a * a * y * y) / (b * b);
    points.push(new Three.Vector3(x, y, 0));
  }
  const leftPoints = [];
  for (let i = 0; i < points.length; i++) {
    leftPoints.push(points[i].clone().setX(-points[i].x));
  }
  const geometry = new Three.BufferGeometry().setFromPoints(points);
  const line = new Three.Line(geometry, material);
  const geometryLeft = new Three.BufferGeometry().setFromPoints(leftPoints);
  const lineLeft = new Three.Line(geometryLeft, material);
  return [line, lineLeft];
}

export function dcrHeart(lineMete, canvasContainer) {
  const material = new Three.LineBasicMaterial(lineMete.props.parms);

  const points = [];
  for (let r = -Math.PI; r < Math.PI; r += lineMete.props.interval) {
    const x = Math.cos(r) * lineMete.props.scale;
    const y = (Math.sin(r) + (Math.cos(r) * Math.cos(r)) ** (1 / 3)) * lineMete.props.scale;

    points.push(new Three.Vector3(x, y, 0));
  }
  const geometry = new Three.BufferGeometry().setFromPoints(points);
  const line = new Three.Line(geometry, material);
  return [line];
}
export function sphere(lineMete, canvasContainer) {
  const material = new Three.MeshBasicMaterial(lineMete.props.parms);
  const geometry = new Three.SphereGeometry(lineMete.props.radius, lineMete.props.segemnt);
  const sphere = new Three.Mesh(geometry, material);
  return [sphere];
}
export function heart3d(lineMete, canvasContainer) {
  const material = new Three.LineBasicMaterial(lineMete.props.parms);

  const points = [];
  const scale = 10;
  for (let x = -scale; x < scale; x += lineMete.props.interval) {
    for (let y = -scale; y < scale; y += lineMete.props.interval) {
      for (let z = -scale; z < scale; z += lineMete.props.interval) {
        const val = (x * x + (9 / 4) * y * y + z * z - 1) ** 3 - x * x * z ** 3 - (9 / 80) * y * y * z ** 3;
        if (Math.abs(val) < 0.01) {
          points.push(new Three.Vector3(x, y, z));
        }
      }
    }
  }

  const geometry = new Three.BufferGeometry().setFromPoints(points);
  geometry.scale(lineMete.props.scale, lineMete.props.scale, lineMete.props.scale);
  const line = new Three.Mesh(geometry, material);
  return [line];
}
