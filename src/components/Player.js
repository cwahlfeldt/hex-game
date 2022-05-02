import {drawCircle} from "../lib/canvasUtilites.js";

export default function Player(ctx, location) {
    drawCircle(ctx, location.x, location.y, 'cyan')
}