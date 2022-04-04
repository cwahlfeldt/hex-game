import test from 'ava'
import {
    createHexagon,
    addHexagons,
    subtractHexagons,
    areHexagonsEqual
} from '../modules/hexagons.js'

const hexA = createHexagon(0, 1, -1)
const hexB = createHexagon(-1, 0, 1)

test(`can create a hexagon`, t => {
    t.deepEqual(createHexagon(-1, 1, 0), {q: -1, r: 1, s: 0})
})

test(`hex coords must equal zero`, t => {
    t.truthy(hexA.q + hexA.r + hexA.s === 0)
    t.truthy(hexB.q + hexB.r + hexB.s === 0)
});

test(`can add hexagons`, t => {
    t.deepEqual(
        addHexagons(hexA, hexB),
        createHexagon(-1, 1, 0)
    )
})

test(`can subtract hexagons`, t => {
    t.deepEqual(
        subtractHexagons(hexA, hexB),
        createHexagon(1, 1, -2)
    )
})

test(`are hexagons equal`, t => {
    const hex = createHexagon(0, 1, -1)
    const sameHex = createHexagon(0, 1, -1)
    t.truthy(areHexagonsEqual(hex, sameHex))
})
