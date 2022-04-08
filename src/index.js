import {createHexagon, createHexCorners, createLayout, createPoint} from "./modules/hexagons.js";

const root = document.getElementById("game");
const ctx = root.getContext("2d");

root.width = window.innerWidth;
root.height = window.innerHeight;

function renderHexagon(options) {
  const size = createPoint(options.size, options.size)
  const origin = createPoint(options.origin.x, options.origin.y)
  const layout = createLayout(size, origin)
  const hex = createHexagon(options.hex.q, options.hex.r, options.hex.s)
  const corners = createHexCorners(layout, hex)

  ctx.beginPath();
  ctx.moveTo(20, 20)
  corners.forEach(corner => {
    ctx.lineTo(corner.x, corner.y)
  })
  ctx.closePath()
  ctx.fill()
}

function render() {
  renderHexagon({
    hex: {q: 0, r: 0, s: 0},
    origin: {x: 100, y: 100},
    size: 20,
  })
  renderHexagon({
    hex: {q: 0, r: 1, s: -1},
    origin: {x: 100, y: 100},
    size: 20,
  })
  renderHexagon({
    hex: {q: 1, r: 0, s: -1},
    origin: {x: 100, y: 100},
    size: 20,
  })
  renderHexagon({
    hex: {q: 0, r: -1, s: 1},
    origin: {x: 100, y: 100},
    size: 20,
  })
  renderHexagon({
    hex: {q: 1, r: -1, s: 0},
    origin: {x: 100, y: 100},
    size: 20,
  })
  renderHexagon({
    hex: {q: -1, r: 1, s: 0},
    origin: {x: 100, y: 100},
    size: 20,
  })
  renderHexagon({
    hex: {q: -1, r: 0, s: 1},
    origin: {x: 100, y: 100},
    size: 20,
  })
}

render();
