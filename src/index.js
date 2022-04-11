import {drawMap} from "./modules/pieces/hexagon.js";

const root = document.getElementById("game");
root.width = window.innerWidth;
root.height = window.innerHeight;

const ctx = root.getContext("2d");
ctx.fillStyle = 'rgba(0,0,0,0.2)'
ctx.strokeStyle = '#a3acac'
ctx.lineWidth = 4;
ctx.translate(root.width * 0.5, root.height * 0.5)
ctx.moveTo(0, 0)

function render() {
    drawMap(ctx)
}

render();
