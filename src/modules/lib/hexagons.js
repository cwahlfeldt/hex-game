import {roundCubeCoords, deepEqual, throwError, lerp} from './utilities.js'

const {PI, sqrt, abs, cos, sin, max, round} = Math;

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
    downRight: hexagon(1, 0, -1),
}

export const SIZE = 40
export const ORIGIN = 0
export const LAYOUT = layout(
    point(SIZE, SIZE),
    point(ORIGIN, ORIGIN)
)

export function hexagon(q, r, s) {
    if (q + r + s !== 0)
        throwError('q + r + s must equal 0')

    return {q, r, s}
}

export function fracHexagon(q, r, s) {
    if (round(q + r + s) !== 0)
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
    return {
        size: point(size.x, size.y),
        origin: point(origin.x, origin.y)
    }
}

export function convertHexToPixel(hex) {
    const M = ORIENTATION
    const x = ((M.f0 * hex.q) + (M.f1 * hex.r)) * LAYOUT.size.x
    const y = ((M.f2 * hex.q) + (M.f3 * hex.r)) * LAYOUT.size.y
    return point(x + LAYOUT.origin.x, y + LAYOUT.origin.y)
}

export function convertPixelToHex(pixelPoint) {
    const M = ORIENTATION
    const pt = point(
        (pixelPoint.x - LAYOUT.origin.x) / LAYOUT.size.x,
        (pixelPoint.y - LAYOUT.origin.y) / LAYOUT.size.y,
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

export function getCornerOffset(corner) {
    const size = LAYOUT.size
    const angle = 2.0 * PI * (ORIENTATION.startAngle + corner) / 6
    return point(size.x * cos(angle), size.y * sin(angle))
}

export function hexCorners(hex) {
    const corners = []
    const center = convertHexToPixel(hex)
    for (let i = 0; i < 6; i++) {
        const offset = getCornerOffset(i)
        corners.push(point(center.x + offset.x, center.y + offset.y))
    }
    return corners
}

export function roundHex(fracHex) {
    const {q, r, s} = roundCubeCoords(fracHex.q, fracHex.r, fracHex.s)
    return hexagon(q, r, s)
}

export function hexLerp(a, b, t) {
    return roundHex(
        fracHexagon(
            lerp(a.q, b.q, t),
            lerp(a.r, b.r, t),
            lerp(a.s, b.s, t)
        )
    )
}

export function hexLine(hexA, hexB) {
    const N = distanceBetweenHexagons(hexA, hexB)
    const step = 1.0 / max(N, 1)

    let results = []
    for (let i = 0; i <= N; i++) {
        results.push(hexLerp(hexA, hexB, i * step))
    }

    return results
}

export function direction(coord1, coord2) {
    if (coord1.q < coord2.q) {
        return coord1.r > coord2.r ? DIRECTIONS.upLeft: DIRECTIONS.up;
    } else if (coord1.q > coord2.q) {
        return coord1.r < coord2.r ? DIRECTIONS.downRight : DIRECTIONS.down;
    } else {
        return coord1.r < coord2.r ? DIRECTIONS.upRight : DIRECTIONS.downLeft;
    }
}