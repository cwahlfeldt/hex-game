import test from 'ava'
import {
    DIRECTIONS,
    createHexagon,
    addHexagons,
    subtractHexagons,
    areHexagonsEqual,
    multiplyHexagons,
    lengthOfHexagon,
    distanceBetweenHexagons,
    hexagonNeighbor,
    createPoint,
    createLayout,
    convertHexToPixel, convertPixelToHex,
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

test(`can multiply hexagons`, t => {
    t.deepEqual(
        multiplyHexagons(hexA, 2),
        createHexagon(0, 2, -2)
    )
})

test(`are hexagons equal`, t => {
    const hex = createHexagon(0, 1, -1)
    const sameHex = createHexagon(0, 1, -1)
    t.truthy(areHexagonsEqual(hex, sameHex))
})

test(`get length of hexagon`, t => {
    t.truthy(lengthOfHexagon(hexA) === 1)
})

test(`get distance between 2 hexagons`, t => {
    t.truthy(distanceBetweenHexagons(hexA, hexB) === 2)
})

test(`get hex neighbor`, t => {
    t.deepEqual(
        hexagonNeighbor(hexA, DIRECTIONS.up),
        createHexagon(0, 0, 0)
    )
})

test(`can create point`, t => {
    t.deepEqual(
        createPoint(1, 1),
        {x: 1, y: 1}
    )
})

test(`can create layout`, t => {
    t.deepEqual(
        createLayout(createPoint(6, 6), createPoint(0, 0)),
        {
            size: {x: 6, y: 6},
            origin: {x: 0, y: 0}
        }
    )
})

test(`convert hexagons to pixels`, t => {
    const size = createPoint(10, 10)
    const origin = createPoint(0, 0)
    const layout = createLayout(size, origin)
    const hexC = createHexagon(0, 0, 0)
    const hexD = createHexagon(4, 0, -4)
    t.deepEqual(
        convertHexToPixel(layout, hexC),
        createPoint(0, 0)
    )
    t.deepEqual(
        convertHexToPixel(layout, hexD),
        createPoint(60, 34.64101615137754)
    )
})

test(`convert pixels to hexagon`, t => {
    const size = createPoint(10, 10)
    const origin = createPoint(0, 0)
    const layout = createLayout(size, origin)
    const hex = createHexagon(4, 0, -4)
    const diffHex = createHexagon(1, 0, -1)
    const pixelPoint = convertHexToPixel(layout, hex)
    const diffPixelPoint = convertHexToPixel(layout, diffHex)
    t.deepEqual(
        convertPixelToHex(layout, pixelPoint),
        createHexagon(4, 0, -4)
    )
    t.deepEqual(
        convertPixelToHex(layout, diffPixelPoint),
        createHexagon(1, 0, -1)
    )
})

test(`create hexagon corner points`, t => {
    const size = createPoint(10, 10)
    const origin = createPoint(0, 0)
    const layout = createLayout(size, origin)
    const hex = createHexagon(4, 0, -4)
    t.deepEqual(
        createHexCorners(layout, hex),
        [
            createPoint(0, 1),
            createPoint(1, 1),
            createPoint(-1, -1),
            createPoint(-1, 0),
            createPoint(0, -1),
            createPoint(1, 0),
        ]
    )
})