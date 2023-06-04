import { Block } from "./blk.js";
import { CameraLayer } from "./cam.js";
import { Player } from "./plyr";
import { v } from "./types.js";

CameraLayer.background("wheat");
CameraLayer.render_rect(v(20, 20), v(20, 20), "blue");
CameraLayer.render_shape([v(50, 50), v(60, 60), v(50, 60)], "red");

const b = new Block(v(70, 70), v(30, 30));
const p = new Player(v(80, 80), v(20, 20));


setInterval(() => {
    b.display();
    p.display()
    p.handle_input();
}, 1000/30);