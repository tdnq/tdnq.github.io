import * as Three from "three";


export function power(lineMete, canvasContainer) {
    let material = new Three.LineBasicMaterial(lineMete.props.parms);
    let points = [];
    for (let x = -canvasContainer.clientWidth / 4; x < canvasContainer.clientWidth / 4; x += 0.01) {
        let y = 0, z = 0;
        y = Math.pow(x, lineMete.props.power) * lineMete.props.scale;
        z = 0;
        points.push(new Three.Vector3(x, y, z));
    }
    let geometry = new Three.BufferGeometry().setFromPoints(points);
    let line = new Three.Line(geometry, material);
    return [line];
}
export function circle(lineMete, canvasContainer) {
    let material = new Three.LineBasicMaterial(lineMete.props.parms);
    let points = [];
    for (let i = 0; i <= 360; i += lineMete.props.interval) {
        points.push(
            new Three.Vector3(
                Math.sin(i * (Math.PI / 180)) * lineMete.props.radius,
                Math.cos(i * (Math.PI / 180)) * lineMete.props.radius,
                0
            )
        );
    }
    let geometry = new Three.BufferGeometry().setFromPoints(points);
    let line = new Three.LineLoop(geometry, material);
    return [line];
}

export function hyperbola(lineMete, canvasContainer) {
    let material = new Three.LineBasicMaterial(lineMete.props.parms);
    let { a, b } = lineMete.props;
    let points = []; //m(x,y)
    // let c = Math.sqrt(a * a + b * b);
    for (let y = -canvasContainer.clientHeight / 2; y < canvasContainer.clientHeight / 2; y += lineMete.props.interval) {
        let x = Math.sqrt(a * a * b * b + a * a * y * y) / (b * b);
        points.push(new Three.Vector3(x, y, 0));
    }
    let leftPoints = [];
    for (let i = 0; i < points.length; i++) {
        leftPoints.push(points[i].clone().setX(-points[i].x));
    }
    let geometry = new Three.BufferGeometry().setFromPoints(points);
    let line = new Three.Line(geometry, material);
    let geometryLeft = new Three.BufferGeometry().setFromPoints(leftPoints);
    let lineLeft = new Three.Line(geometryLeft, material);
    return [line, lineLeft];
}

export function dcrHeart(lineMete, canvasContainer) {
    let material = new Three.LineBasicMaterial(lineMete.props.parms);

    let points = [];
    for (let r = -Math.PI; r < Math.PI; r += lineMete.props.interval) {
        let x = Math.cos(r) * lineMete.props.scale;
        let y = (Math.sin(r) + Math.pow(Math.cos(r) * Math.cos(r), 1 / 3)) * lineMete.props.scale;

        points.push(new Three.Vector3(x, y, 0));
    }
    let geometry = new Three.BufferGeometry().setFromPoints(points);
    let line = new Three.Line(geometry, material);
    return [line]
}
