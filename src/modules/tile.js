import {convertHexToPixel, getAllNeighbors, hexagon, hexCorners} from "../lib/hexagons.js";
import {colors} from "../lib/colors.js";

const tile = (hex = hexagon(0, 0, 0), options = {}) => {
    const defaultOptions = {
        index: 0,
        cubeCoords: hex,
        screenCoords: convertHexToPixel(hex),
        isTraversable: true,
        corners: hexCorners(hex),
        neighborIndexes: getAllNeighbors(hex),
        occupants: 'none',
        color: colors.lightBlue,
    }
    return {...defaultOptions, ...options}
}

export default tile