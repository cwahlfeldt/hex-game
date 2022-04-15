import {
    areHexagonsEqual,
    convertHexToPixel,
    convertPixelToHex,
    getAllNeighbors,
    hexagon,
    hexCorners,
    point
} from "./hexagons.js";
import {randNum} from "./utilities.js";

const {min, max} = Math

export function tile(
    hex = hexagon(0, 0, 0),
    isTraversable = true
) {
    const hexTile = hexagon(hex.q, hex.r, hex.s)
    return {
        cubeCoords: hexTile,
        screenCoords: convertHexToPixel(hexTile),
        isTraversable: isTraversable,
        corners: hexCorners(hexTile),
        neighbors: getAllNeighbors(hexTile),
        currentPiece: 'none',
        color: 'rgba(42, 160, 216, .5)',
    }
}

export function getNearestHexTile(x, y) {
    return tile(convertPixelToHex(point(x, y)))
}

export function hexShapedMap(radius) {
    let map = []
    for (let q = -radius; q <= radius; q++) {
        let r1 = max(-radius, -q - radius);
        let r2 = min(radius, -q + radius);
        for (let r = r1; r <= r2; r++) {
            map.push(tile(hexagon(q, r, -q - r)));
        }
    }
    return map
}

export function randomizeTraversableHexes(hexTileMap, numOfTiles = 6) {
    const map = hexTileMap
    const max = map.length - 1
    const min = 1
    Array.from({length: numOfTiles}).forEach(() => {
        const num = randNum(min, max)
        const randHex = map[num]
        randHex.isTraversable = !randHex.isTraversable
    })
    return map
}

export function selectNearestHexTile(map, {x, y}) {
    const nearestHexTile = getNearestHexTile(x, y)
    const index = map.findIndex(item => areHexagonsEqual(item.cubeCoords, nearestHexTile.cubeCoords))
    if (index === -1)
        return null
    return map[index]
}
