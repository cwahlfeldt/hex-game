import test from 'ava'

import {
    convertHexToPixel,
    getAllNeighbors,
    hexagon,
    hexCorners, point,
} from "../../lib/hexagons.js";
import {getNearestHexTile, selectNearestHexTile, tile, tileMap} from "../../lib/tileMap.js";

const hexTile = hexagon(6, -5, -1)
const expectedHexTile = {
    index: 0,
    cubeCoords: hexTile,
    screenCoords: convertHexToPixel(hexTile),
    isTraversable: true,
    corners: hexCorners(hexTile),
    neighborIndexes: getAllNeighbors(hexTile),
    occupants: 'none',
    color: 'rgba(42, 160, 216, .5)',
}

test(`create a hexagon tile`, t => {
    t.deepEqual(
       tile(hexTile),
       expectedHexTile
    )

    const hexTileWithDefaults = tile(hexTile)
    t.deepEqual(
        tile(hexTile, false),
        {
            ...hexTileWithDefaults,
            isTraversable: false,
        }
    )
})

test(`get nearest hex tile`, t => {
    t.deepEqual(
        getNearestHexTile(361, -139),
        tile(hexTile),
    )
})