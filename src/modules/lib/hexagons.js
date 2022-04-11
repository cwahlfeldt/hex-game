import {roundCubeCoords, deepEqual, throwError, lerp} from './utilities.js'
import {hexagonPiece} from "../pieces/hexagon.js";

const {PI, sqrt, abs, cos, sin, min, max} = Math;

// using only flat top orientation
export const ORIENTATION = {
    f0: 3.0 / 2.0, f1: 0.0, f2: sqrt(3.0) / 2.0, f3: sqrt(3.0),
    b0: 2.0 / 3.0, b1: 0.0, b2: -1.0 / 3.0, b3: sqrt(3.0) / 3.0,
    startAngle: 0.0
}

export const DIRECTIONS = {
    upLeft:    hexagon(-1, 0, 1),
    up:        hexagon(0, -1, 1),
    upRight:   hexagon(1, -1, 0),
    downLeft:  hexagon(-1, 1, 0),
    down:      hexagon(0, 1, -1),
    downRight: hexagon(-1, 1, 0),
}

export function hexagon(q, r, s) {
    if (q + r + s !== 0)
        throwError('q + r + s must equal 0')

    return {q, r, s}
}

export function areHexagonsEqual(hexA, hexB) {
    return deepEqual(hexA, hexB)
}

export function addHexagons(hexA, hexB)  {
    return hexagon(
        hexA.q + hexB.q,
        hexA.r + hexB.r,
        hexA.s + hexB.s
   )
}

export function subtractHexagons(hexA, hexB)  {
    return hexagon(
        hexA.q - hexB.q,
        hexA.r - hexB.r,
        hexA.s - hexB.s
   )
}

export function multiplyHexagons(hex, multiplyBy)  {
    return hexagon(
        hex.q * multiplyBy,
        hex.r * multiplyBy,
        hex.s * multiplyBy
   )
}

export function lengthOfHexagon(hex) {
    return (abs(hex.q) + abs(hex.r) + abs(hex.s)) / 2
}

export function distanceBetweenHexagons(hexA, hexB) {
    return lengthOfHexagon(subtractHexagons(hexA, hexB))
}

export function hexagonNeighbor(hex, direction) {
    return addHexagons(hex, direction)
}

export function getAllNeighbors(hex) {
    return Object.keys(DIRECTIONS).map(key => {
        return hexagonNeighbor(hex, DIRECTIONS[key])
    })
}

export function point(x, y) {
    return {x, y}
}

export function layout(size, origin) {
    return {size, origin}
}

export function convertHexToPixel(layout, hex) {
    const M = ORIENTATION
    const x = ((M.f0 * hex.q) + (M.f1 * hex.r)) * layout.size.x
    const y = ((M.f2 * hex.q) + (M.f3 * hex.r)) * layout.size.y
    return point(x + layout.origin.x, y + layout.origin.y)
}

export function convertPixelToHex(layout, pixelPoint) {
    const M = ORIENTATION
    const pt = point(
        (pixelPoint.x - layout.origin.x) / layout.size.x,
        (pixelPoint.y - layout.origin.y) / layout.size.y,
    )
    const q = M.b0 * pt.x + M.b1 * pt.y;
    const r = M.b2 * pt.x + M.b3 * pt.y;
    const roundedHexCoords = roundCubeCoords(q, r, -q - r)
    return hexagon(
        roundedHexCoords.q,
        roundedHexCoords.r,
        roundedHexCoords.s
    )
}

export function getCornerOffset(layout, corner) {
    const size = layout.size
    const angle = 2.0 * PI * (ORIENTATION.startAngle + corner) / 6
    return point(size.x * cos(angle), size.y * sin(angle))
}

export function hexCorners(layout, hex) {
    const corners = []
    const center = convertHexToPixel(layout, hex)
    for (let i = 0; i < 6; i++) {
        const offset = getCornerOffset(layout, i)
        corners.push(point(center.x + offset.x, center.y + offset.y))
    }
    return corners
}

export function hexLerp(a, b, t) {
    const {q, r, s} = roundCubeCoords(
        lerp(a.q, b.q, t),
        lerp(a.r, b.r, t),
        lerp(a.s, b.s, t)
    )
    return hexagon(q, r, s)
}

export function hexShapedMap(radius) {
    let map = []
    for (let q = -radius; q <= radius; q++) {
        let r1 = max(-radius, -q - radius);
        let r2 = min(radius, -q + radius);
        for (let r = r1; r <= r2; r++) {
            map.push(hexagonPiece({hex: hexagon(q, r, -q-r)}));
        }
    }
    return map
}