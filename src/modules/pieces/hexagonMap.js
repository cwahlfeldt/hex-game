import {
    convertHexToPixel, convertPixelToHex,
    getAllNeighbors,
    hexagon,
    hexCorners,
    layout,
    point
} from "../lib/hexagons.js";

const {min, max} = Math

const SIZE = 35
const ORIGIN = 0
const LAYOUT = layout(
    point(SIZE, SIZE),
    point(ORIGIN, ORIGIN)
)
export function hexagonPiece(optionArgs) {
    const options = {
        hex: hexagon(0, 0, 0),
        origin: point(0, 0),
        size: 60,
        isTraversable: true,
        ...optionArgs,
    }

    const hex = hexagon(options.hex.q, options.hex.r, options.hex.s)

    return {
        hex,
        center: convertHexToPixel(LAYOUT, hex),
        corners: hexCorners(LAYOUT, hex),
        neighbors: getAllNeighbors(hex),
        isTraversable: options.isTraversable,
        color: 'rgba(42, 160, 216, .5)',
    }
}

export function getNearestHexPiece(x, y, optionsArgs) {
    return hexagonPiece({
        hex: convertPixelToHex(LAYOUT, point(x, y)),
        ...optionsArgs
    })
}

export function drawHexagon(ctx, hex) {
    const {corners, isTraversable} = hex
    ctx.moveTo(0, 0)
    ctx.beginPath();
    corners.forEach(corner => {
        ctx.lineTo(corner.x, corner.y)
    })
    ctx.lineTo(corners[0].x, corners[0].y)

    ctx.lineWidth = 4
    ctx.strokeStyle = '#3f3f3f'
    ctx.stroke()

    ctx.fillStyle = 'rgba(42, 160, 216, .2)'
    if (isTraversable)
        ctx.fillStyle = hex.color

    ctx.fill()
    ctx.closePath()
}

export function hexShapedMap(radius) {
    let map = []
    for (let q = -radius; q <= radius; q++) {
        let r1 = max(-radius, -q - radius);
        let r2 = min(radius, -q + radius);
        for (let r = r1; r <= r2; r++) {
            const hex = hexagonPiece({
                hex: hexagon(q, r, -q - r),
            })
            map.push(hex);
        }
    }

    return map
}

export function drawMap(ctx, map) {
    map.forEach(item => {
        drawHexagon(ctx, item)
    })
}