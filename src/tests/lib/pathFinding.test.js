import test from "ava"
import {buildPath, searchPath} from "../../lib/pathFinding.js";

// simple 4x2 square grid
// [
//     0,  1,  2,  3,
//     4,  5,  6,  7,
// ]

const testGraphOfNeighbors = [
    [1, 4],
    [0, 5, 2],
    [1, 6, 3],
    [2, 7],
    [0, 5],
    [4, 1, 6],
    [5, 2, 7],
    [6, 3]
]
const start = 0
const finish = 7
const expectedSearch = {
    0: 1,
    1: 0,
    2: 1,
    3: 2,
    4: 0,
    5: 1,
    6: 5,
    7: 6,
    start: 0,
}

test('can search path', t => {
    t.deepEqual(
        searchPath(testGraphOfNeighbors, start, finish),
        expectedSearch
    )
})

test('can find path', t => {
    const searchA = searchPath(testGraphOfNeighbors, start, finish)
    t.deepEqual(
        buildPath(searchA, start, finish),
        [1, 5, 6, 7]
    )

    const searchB = searchPath(testGraphOfNeighbors, 3, 5)
    t.deepEqual(
        buildPath(searchB, 3, 5),
        [2, 1, 5]
    )
})