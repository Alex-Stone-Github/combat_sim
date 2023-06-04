import { CameraLayer } from "./cam.js";
import { vec2, Barrier } from "./types.js";

export class Block implements Barrier {
    private position: vec2;
    private size: vec2;
    constructor(position: vec2, size: vec2) {
        this.position = position;
        this.size = size
    }
    display() {
        CameraLayer.render_rect(this.position, this.size, "grey");
    }
    is_intersecting(point: vec2): boolean {
        return false;
    }
}