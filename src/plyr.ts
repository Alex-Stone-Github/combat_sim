import { CameraLayer } from "./cam.js";
import { InputOutputLayer } from "./io.js";
import { v, vec2 } from "./types.js";

export class Player {
    private position: vec2;
    private size: vec2;
    private velocity: vec2;
    constructor(position: vec2, size: vec2) {
        this.position = position;
        this.size = size;
        this.velocity = v(0,0);
    }
    display() {
        CameraLayer.render_rect(this.position, this.size, "yellow");
    }
    handle_input() {
        if (InputOutputLayer.is_down('w')) {this.velocity.y -= 3;}
        if (InputOutputLayer.is_down('a')) {this.velocity.x -= 3;}
        if (InputOutputLayer.is_down('s')) {this.velocity.y += 3;}
        if (InputOutputLayer.is_down('d')) {this.velocity.x += 3;}
    }
}