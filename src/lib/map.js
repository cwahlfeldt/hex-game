import {addHexagons, hexagon, hexagonNeighbor, hexShapedGrid, multiplyHexagons, subtractHexagons} from "./hexagons.js"
import {randomizeMap} from "./tileMap.js"

const Map = (map = hexShapedGrid(1)) => ({
    create: (size) => Map(hexShapedGrid(size)),
    randomize: (amount) => Map(randomizeMap(map, amount)),
    result: () => map,
})

export const Hex = (hex = hexagon(0, 0, 0)) => ({
    add: (h) => Hex(addHexagons(hex, h)),
    subtract: (h) => Hex(subtractHexagons(hex, h)),
    multiply: (num) => Hex(multiplyHexagons(hex, num)),
    neighbor: (direction) => Hex(hexagonNeighbor(hex, direction)),
    result: () => hex,
})

export default Map