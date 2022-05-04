import test from 'ava'
import {Hex} from "../../lib/map.js";
import {DIRECTIONS, hexagon} from "../../lib/hexagons.js";

test('can add hexagons', t => {
    const hexA = hexagon(-1, 0, 1)
    const hexB = hexagon(0, 1, -1)
    t.deepEqual(
        Hex(hexA)
            .add(hexB)
            .result(),
        hexagon(-1, 1, 0)
    )
})

test('can subtract hexagons', t => {
    const hexA = hexagon(-1, 0, 1)
    const hexB = hexagon(0, 1, -1)
    t.deepEqual(
        Hex(hexA)
            .subtract(hexB)
            .result(),
        hexagon(-1, -1, 2)
    )
})

test('can multiply hexagons', t => {
    const hexA = hexagon(-1, 0, 1)
    t.deepEqual(
        Hex(hexA)
            .multiply(2)
            .result(),
        hexagon(-2, 0, 2)
    )
})

test('can find neighbor', t => {
    const hexA = hexagon(-1, 0, 1)
    t.deepEqual(
        Hex(hexA)
            .neighbor(DIRECTIONS.northWest)
            .result(),
        hexagon(-2, 0, 2)
    )
})
