import {convertHexToPixel, getAllNeighbors, hexagon, hexCorners} from "../lib/hexagons.js";

export function tile(
    hex = hexagon(0, 0, 0),
    isTraversable = true,
) {
    const hexTile = hex
    return {
        index: 0,
        cubeCoords: hexTile,
        screenCoords: convertHexToPixel(hexTile),
        isTraversable: isTraversable,
        corners: hexCorners(hexTile),
        neighborIndexes: getAllNeighbors(hexTile),
        occupants: 'none',
        color: 'rgba(42, 160, 216, .5)',
    }
}