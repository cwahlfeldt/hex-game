import test from 'ava'

import { convertHexToPixel, getAllNeighbors, hexagon, hexCorners,} from "../../lib/hexagons.js";
import { getNearestHexTile } from "../../modules/tileMap.js";
import { tile } from "../../modules/tile.js";

const hex = hexagon(6, -5, -1)
const expectedTile = {
    color: 'rgba(42, 160, 216, .5)',
    corners: hexCorners(hex),
    cubeCoords: hex,
    index: 0,
    isTraversable: true,
    neighborIndexes: getAllNeighbors(hex),
    occupants: 'none',
    screenCoords: convertHexToPixel(hex),
}

test(`create a hexagon tile`, t => {
    t.deepEqual(
       tile(hex),
       expectedTile
    )

    const hexTileWithDefaults = tile(hex)
    t.deepEqual(
        tile(hex, false),
        {
            ...hexTileWithDefaults,
            isTraversable: false,
        }
    )
})

test(`get nearest hex tile`, t => {
    t.deepEqual(
        getNearestHexTile(361, -139),
        tile(hex)
    )
})