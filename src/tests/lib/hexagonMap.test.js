import test from 'ava'

import {
    convertHexToPixel,
    getAllNeighbors,
    hexagon,
    hexCorners,
} from "../../modules/lib/hexagons.js";
import {hexagonPiece, hexShapedMap} from "../../modules/lib/hexagonMap.js";

const hex = hexagon(6, -5, -1)
const expectedHexagonPiece = {
    hex,
    center: convertHexToPixel(hex),
    corners: hexCorners(hex),
    neighbors: getAllNeighbors(hex),
    isTraversable: true,
    color: 'rgba(42, 160, 216, .5)',
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

// test(`create a hex shaped map`, t => {
//     t.deepEqual(
//         hexShapedMap(0),
//         [
//             hexagonPiece({hex: hexagon(0,0,0)}),
//             hexagonPiece({hex: hexagon(0,0,0)}),
//             hexagonPiece({hex: hexagon(0,0,0)}),
//             hexagonPiece({hex: hexagon(0,0,0)}),
//             hexagonPiece({hex: hexagon(0,0,0)}),
//             hexagonPiece({hex: hexagon(0,0,0)}),
//             hexagonPiece({hex: hexagon(0,0,0)}),
//             hexagonPiece({hex: hexagon(0,0,0)})
//         ]
//     )
// })