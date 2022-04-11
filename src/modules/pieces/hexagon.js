import {
    convertHexToPixel,
    getAllNeighbors,
    hexagon,
    hexCorners,
    layout,
    point
} from "../lib/hexagons.js";

export function hexagonPiece(optionArgs) {
    const options = {
        hex: hexagon(0, 0, 0),
        origin: point(0, 0),
        size: 30,
        isTraversable: true,
        ...optionArgs,
    }

    const hex = hexagon(options.hex.q, options.hex.r, options.hex.s)
    const hexLayout = layout(
        point(options.size, options.size),
        point(options.origin.x, options.origin.y)
    )

    return {
        hex,
        center: convertHexToPixel(hexLayout, hex),
        corners: hexCorners(hexLayout, hex),
        neighbors: getAllNeighbors(hex),
        isTraversable: options.isTraversable,
    }
}

export function drawHexagon(ctx, hex) {
    const hexPiece = hexagonPiece({hex})

    ctx.beginPath();
    ctx.moveTo(0, 0)
    hexPiece.corners.forEach(corner => {
        ctx.lineTo(corner.x, corner.y)
    })
    ctx.closePath()
    ctx.fill()
}