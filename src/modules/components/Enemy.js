import {drawCircle} from "../lib/canvasUtilites.js";

export default function Enemy(ctx, location) {
    drawCircle(ctx, location.x, location.y, 'red')
}