export interface vec2 {
    x: number;
    y: number;
}
export const v = (x: number, y: number) => {return {x,y};}
export type Color = string;
export type Shape = Array<vec2>;
export type Key = String;
export interface Barrier extends Displayer{
    is_intersecting(point: vec2): boolean;
}
export interface Displayer {
    display(): void;
}