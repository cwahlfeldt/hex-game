import test from 'ava'
import {
    DIRECTIONS,
    hexagon,
    addHexagons,
    subtractHexagons,
    areHexagonsEqual,
    multiplyHexagons,
    lengthOfHexagon,
    distanceBetweenHexagons,
    hexagonNeighbor,
    point,
    layout,
    convertHexToPixel,
    convertPixelToHex,
    getCornerOffset,
    hexCorners,
    getAllNeighbors,
    hexLine,
    hexLerp,

} from '../modules/lib/hexagons.js'

const hexA = hexagon(0, 1, -1)
const hexB = hexagon(-1, 0, 1)

test(`can create a hexagon`, t => {
    t.deepEqual(hexagon(-1, 1, 0), {q: -1, r: 1, s: 0})
})

test(`hex coords must equal zero`, t => {
    t.truthy(hexA.q + hexA.r + hexA.s === 0)
    t.truthy(hexB.q + hexB.r + hexB.s === 0)
});

test(`can add hexagons`, t => {
    t.deepEqual(
        addHexagons(hexA, hexB),
        hexagon(-1, 1, 0)
    )
})

test(`can subtract hexagons`, t => {
    t.deepEqual(
        subtractHexagons(hexA, hexB),
        hexagon(1, 1, -2)
    )
})

test(`can multiply hexagons`, t => {
    t.deepEqual(
        multiplyHexagons(hexA, 2),
        hexagon(0, 2, -2)
    )
})

test(`are hexagons equal`, t => {
    const hex = hexagon(0, 1, -1)
    const sameHex = hexagon(0, 1, -1)
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
        hexagon(0, 0, 0)
    )
})

test(`can create point`, t => {
    t.deepEqual(
        point(1, 1),
        {x: 1, y: 1}
    )
})

test(`can create layout`, t => {
    t.deepEqual(
        layout(point(6, 6), point(0, 0)),
        {
            size: {x: 6, y: 6},
            origin: {x: 0, y: 0}
        }
    )
})

test(`convert hexagons to pixels`, t => {
    const hexC = hexagon(0, 0, 0)
    const hexD = hexagon(4, 0, -4)
    t.deepEqual(
        convertHexToPixel(hexC),
        point(0, 0)
    )
    t.deepEqual(
        convertHexToPixel(hexD),
        point(360, 207.84609690826525)
    )
})

test(`convert pixels to hexagon`, t => {
    const hex = hexagon(4, 0, -4)
    const diffHex = hexagon(1, 0, -1)
    const pixelPoint = convertHexToPixel(hex)
    const diffPixelPoint = convertHexToPixel(diffHex)
    t.deepEqual(
        convertPixelToHex(pixelPoint),
        hexagon(4, 0, -4)
    )
    t.deepEqual(
        convertPixelToHex(diffPixelPoint),
        hexagon(1, 0, -1)
    )
})

test(`get the corner offset of a hexagon`, t => {
    t.deepEqual(
        getCornerOffset(4),
        point(-30.00000000000003, -51.961524227066306)
    )
})

test(`create hexagon corner points`, t => {
    const hex = hexagon(4, 0, -4)
    t.deepEqual(
        hexCorners(hex),
        [
            point(420, 207.84609690826525),
            point(390, 259.80762113533154),
            point(330, 259.8076211353316),
            point(300, 207.84609690826525),
            point(330, 155.88457268119896),
            point(390, 155.88457268119893),
        ]
    )
})

test(`get all hex neighbors`, t => {
    const hex = hexagon(6, -6, 0)
    t.deepEqual(
        getAllNeighbors(hex),
        [
            hexagon(5, -6, 1),
            hexagon(6, -7, 1),
            hexagon(7, -7, 0),
            hexagon(5, -5, 0),
            hexagon(6, -5, -1),
            hexagon(5, -5, 0),
        ]
    )
})

test(`lerp a hex`, t => {
    t.deepEqual(
        hexLerp(hexA, hexB, 0),
        hexagon(0, 1, -1)
    )
})

test(`create a line from one hex to another`, t => {
    t.deepEqual(
        hexLine(hexA, hexB),
        [
            hexagon(0,1,-1),
            hexagon(0,0,0),
            hexagon(-1,0,1),
        ]
    )
})