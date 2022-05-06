import {convertHexToPixel, getAllNeighbors, hexagon} from "../../src/lib/hexagons.js";
const initialTile = {
    hex: hexagon(0, 0, 0),
    coordinates: convertHexToPixel(hexagon(0, 0, 0)),
    neighbors: getAllNeighbors(hexagon(0, 0, 0)),
    traversable: true,
    occupant: null
}
const Tile = (tile = initialTile) => ({
    create: (hex) => {
        return Tile({
            hex,
            coordinates: convertHexToPixel(hex),
            neighbors: getAllNeighbors(hex),
            traversable: true,
            occupant: null
        })
    },
    traversable: (canTraverse) => Tile({...tile, traversable: canTraverse}),
    occupant: (occupant) => Tile({...tile, occupant}),
    result: () => tile,
})

export default Tile