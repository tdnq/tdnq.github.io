import { AxesHelper, GridHelper } from "three"
export default class {
    constructor(node, units = 0.5, parms = { axesSize: 0.3, gridDivisions: 10 }) {
        const axes = new AxesHelper(parms.axesSize);
        axes.material.depthTest = false;
        axes.renderOrder = 2;
        node.add(axes);

        const grid = new GridHelper(units, parms.gridDivisions)
        grid.material.depthTest = false;
        grid.renderOrder = 1;
        node.add(grid);
        this.grid = grid;
        this.axes = axes;
        this.visible = false;
    }
    get visible() {
        return this._visible;
    }
    set visible(v) {
        this._visible = v;
        this.grid.visible = v;
        this.axes.visible = v;
    }
}