import {drawHexagon} from "./modules/pieces/hexagon.js";
import {hexagon} from "./modules/lib/hexagons.js";

// setup canvas
const root = document.getElementById("game");
root.width = window.innerWidth;
root.height = window.innerHeight;

const ctx = root.getContext("2d");
ctx.fillStyle = '#a3acac'
ctx.translate(root.width * 0.5, root.height * 0.5)

function render() {
    drawHexagon(ctx, hexagon(0, 0, 0))
    drawHexagon(ctx, hexagon(-1, 1, 0))
    drawHexagon(ctx, hexagon(0, 1, -1))
}

render();
