import { vec2, Color, v, Shape } from "./types.js";

export namespace CameraLayer {
    export const width = 800;
    export const height = 600;
    const canvas = document.getElementById("main") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    var camera_position: vec2 = {x:0, y: 0}; // top right of the camera top
    export function translate(new_position: vec2) {
        camera_position = new_position;
    }
    export function render_rect(position: vec2, size: vec2, color: Color) {
        context.fillStyle = color;
        context.fillRect(position.x - camera_position.x, position.x - camera_position.y, size.x, size.y);
    }
    export function render_shape(shape: Shape, color: Color) {
        context.fillStyle = color;
        if (shape.length < 3) {
            alert("Fail!");
            return;
        }
        const first_point = shape[0];
        context.beginPath();
        context.moveTo(first_point.x - camera_position.x, first_point.y - camera_position.y);
        // loop through 1..end
        for (let i = 1; i < shape.length; i ++) {
            const next_point = shape[i];
            context.lineTo(next_point.x - camera_position.x, next_point.y - camera_position.y);
        }
        context.fill();
    }
    export function background(color: Color) {
        render_rect(v(0, 0), v(width, height), color);
    }
}