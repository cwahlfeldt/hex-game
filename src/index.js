import {drawHexagon, drawMap, getNearestHexPiece, hexShapedMap} from "./modules/pieces/hexagonMap.js"
import {deepEqual} from "./modules/lib/utilities.js";
import {areHexagonsEqual, hexagon} from "./modules/lib/hexagons.js";

const root = document.getElementById("game")
const ctx = root.getContext("2d")

let map = hexShapedMap(3)

function render() {
    root.width = window.innerWidth
    root.height = window.innerHeight
    ctx.translate(root.width * 0.5, root.height * 0.5)
    ctx.clearRect(0, 0, root.width, root.height)

    drawMap(ctx, map)
}

root.addEventListener('click', event => {
    const {x, y} = getMousePos(root, event)
    const nearestHex = getNearestHexPiece(x, y)
    const index = map.findIndex(item => areHexagonsEqual(item.hex, nearestHex.hex))
    if (typeof map[index] !== 'undefined')
        map[index].isTraversable = !map[index].isTraversable
    render()
})

window.addEventListener('resize', () => {
    render()
}, false)

render()

function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // needed to account for `ctx.translate(root.width * 0.5, root.height * 0.5)`
    const transform = ctx.getTransform();
    const invMat = transform.invertSelf();

    return {
        x: x * invMat.a + y * invMat.c + invMat.e,
        y: x * invMat.b + y * invMat.d + invMat.f
    };
}