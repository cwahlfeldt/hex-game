import {addHexagons, hexagon, hexagonNeighbor, multiplyHexagons, subtractHexagons} from "../../src/lib/hexagons.js"

const Hex = (hex) => ({
    add: (h) => Hex(addHexagons(hex, h)),
    subtract: (h) => Hex(subtractHexagons(hex, h)),
    multiply: (num) => Hex(multiplyHexagons(hex, num)),
    neighbor: (direction) => Hex(hexagonNeighbor(hex, direction)),
    result: () => hex,
})

export default Hex