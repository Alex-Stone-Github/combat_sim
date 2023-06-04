import { Key, v, vec2 } from "./types.js";


export namespace InputOutputLayer {
    const keys_down: Set<Key> = new Set();
    var mouse_position: vec2 = v(0,0);
    function handle_key_down(e: KeyboardEvent) {
        const key = e.key;
        keys_down.add(key);
    }
    function handle_key_up(e: KeyboardEvent) {
        const key = e.key;
        keys_down.delete(key);
    }
    document.addEventListener("keydown", handle_key_down);
    document.addEventListener("keyup", handle_key_up);
    export function is_down(key: Key): boolean {
        return keys_down.has(key);
    }
    function handle_mouse_move(e: MouseEvent) {
        mouse_position = v(e.clientX, e.clientY);
    }
    document.addEventListener("mousemove", handle_mouse_move);
    export function where_is_the_mouse(): vec2 {
        return mouse_position;
    }
}