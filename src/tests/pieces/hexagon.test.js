import test from 'ava'

import {
    convertHexToPixel,
    getAllNeighbors,
    hexagon,
    hexCorners,
    layout,
    point
} from "../../modules/lib/hexagons.js";
import {hexagonPiece} from "../../modules/pieces/hexagon.js";

const hex = hexagon(6, -5, -1)
const size = point(20, 20)
const hexLayout = layout(size, point(0, 0))

const expectedHexagonPiece = {
    hex,
    center: convertHexToPixel(hexLayout, hex),
    corners: hexCorners(hexLayout, hex),
    neighbors: getAllNeighbors(hex),
    isTraversable: true,
}

test(`create a hexagon piece`, t => {
    t.deepEqual(
       hexagonPiece({
           hex
       }),
       expectedHexagonPiece
    )

    const hexPieceWithDefaults = hexagonPiece()

    t.deepEqual(
        hexagonPiece({
            isTraversable: false,
        }),
        {
            ...hexPieceWithDefaults,
            isTraversable: false,
        }
    )
})