import {drawHexagon, drawMap} from "./modules/pieces/hexagon.js";
import {hexagon} from "./modules/lib/hexagons.js";

const root = document.getElementById("game");
root.width = window.innerWidth;
root.height = window.innerHeight;

const ctx = root.getContext("2d");
ctx.fillStyle = 'rgba(0,0,0,0.3)'
ctx.strokeStyle = '#a3acac'
ctx.lineWidth = 4;
ctx.translate(root.width * 0.5, root.height * 0.5)
ctx.moveTo(0, 0)

function render() {
    drawMap(ctx)
    // drawHexagon(ctx, hexagon(0, 0, 0))
    // drawHexagon(ctx, hexagon(-1, 1, 0))
    // drawHexagon(ctx, hexagon(0, 1, -1))
    // drawHexagon(ctx, hexagon(1, -1, 0))
    // drawHexagon(ctx, hexagon(1, 0, -1))
    // drawHexagon(ctx, hexagon(-1, 0, 1))
    // drawHexagon(ctx, hexagon(0, -1, 1))
}

render();
