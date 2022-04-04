import {deepEqual, throwError} from './utilities.js'

export function createHexagon(q, r, s) {
    if (q + r + s !== 0)
        throwError('q + r + s === 0; coord must equal zero')

    return {q, r, s}
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

export function areHexagonsEqual(hexA, hexB) {
    return deepEqual(hexA, hexB)
}
