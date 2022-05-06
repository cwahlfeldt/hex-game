import test from 'ava'
import Hex from "../modules/Hex.js";
import {DIRECTIONS, hexagon} from "../../src/lib/hexagons.js";

test('can add hexagons', t => {
    const hexA = hexagon(-1, 0, 1)
    const hexB = hexagon(0, 1, -1)
    t.deepEqual(
        Hex(hexA)
            .add(hexB)
            .result(),
        hexagon(-1, 1, 0)
    );

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

test(`add and subtract a hex`, t => {
    const hexA = hexagon(-6, 0, 6)
    const hexB = hexagon(0, 4, -4)
    const hexC = hexagon(5, -1, -4)
    t.deepEqual(
        Hex(hexA)
            .add(hexB)
            .subtract(hexC)
            .result(),
        hexagon(-11, 5, 6)
    )
})
