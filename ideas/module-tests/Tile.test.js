import test from "ava"
import {convertHexToPixel, convertPixelToHex, getAllNeighbors, hexagon} from "../../src/lib/hexagons.js";
import Tile from "../modules/Tile.js";

const testHex = hexagon(0, 0, 0)
const testTileData = {
    hex: testHex,
    coordinates: convertHexToPixel(testHex),
    neighbors: getAllNeighbors(testHex),
    traversable: true,
    occupant: null
}

test('can create a tile', t => {
    t.deepEqual(
        Tile()
            .create(testHex)
            .result(),
        testTileData,
    )
    t.deepEqual(
        Tile()
            .create(testHex)
            .result(),
        testTileData,
    )
})