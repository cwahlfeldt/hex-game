import {roundCubeCoords, deepEqual, throwError} from './utilities.js'

const {sqrt, abs} = Math;

// using only flat top orientation
export const ORIENTATION = {
    f0: 3.0 / 2.0, f1: 0.0, f2: sqrt(3.0) / 2.0, f3: sqrt(3.0),
    b0: 2.0 / 3.0, b1: 0.0, b2: -1.0 / 3.0, b3: sqrt(3.0) / 3.0,
    startAngle: 0.0
}

export const DIRECTIONS = {
    upLeft:    createHexagon(-1, 0, 1),
    up:        createHexagon(0, -1, 1),
    upRight:   createHexagon(1, -1, 0),
    downLeft:  createHexagon(-1, 1, 0),
    down:      createHexagon(0, 1, -1),
    downRight: createHexagon(-1, 1, 0),
}

export function createHexagon(q, r, s) {
    if (q + r + s !== 0)
        throwError('q + r + s must equal 0')

    return {q, r, s}
}

export function areHexagonsEqual(hexA, hexB) {
    return deepEqual(hexA, hexB)
}

export function addHexagons(hexA, hexB)  {
    return createHexagon(
        hexA.q + hexB.q,
        hexA.r + hexB.r,
        hexA.s + hexB.s
   )
}

export function subtractHexagons(hexA, hexB)  {
    return createHexagon(
        hexA.q - hexB.q,
        hexA.r - hexB.r,
        hexA.s - hexB.s
   )
}

export function multiplyHexagons(hex, multiplyBy)  {
    return createHexagon(
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

export function createPoint(x, y) {
    return {x, y}
}

export function createLayout(size, origin) {
    return {
        size,
        origin,
    }
}

export function convertHexToPixel(layout, hex) {
    const M = ORIENTATION
    const x = ((M.f0 * hex.q) + (M.f1 * hex.r)) * layout.size.x
    const y = ((M.f2 * hex.q) + (M.f3 * hex.r)) * layout.size.y
    return createPoint(x + layout.origin.x, y + layout.origin.y)
}

export function convertPixelToHex(layout, point) {
    const M = ORIENTATION
    const pt = createPoint(
        (point.x - layout.origin.x) / layout.size.x,
        (point.y - layout.origin.y) / layout.size.y,
    )
    const q = M.b0 * pt.x + M.b1 * pt.y;
    const r = M.b2 * pt.x + M.b3 * pt.y;
    const roundedHexCoords = roundCubeCoords(q, r, -q - r)
    return createHexagon(
        roundedHexCoords.q,
        roundedHexCoords.r,
        roundedHexCoords.s
    )
}
