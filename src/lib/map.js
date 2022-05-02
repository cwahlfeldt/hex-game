import {
    areHexagonsEqual,
    convertHexToPixel,
    convertPixelToHex, DIRECTIONS,
    getAllNeighbors,
    hexagon, hexagonNeighbor,
    hexCorners,
    point
} from "./hexagons.js";
import {alphabeticalKeys, deepEqual, randNum} from "./utilities.js";
import {Grid} from "hexagrid";

const {min, max} = Math

export function tile(
    hex = hexagon(0, 0, 0),
    isTraversable = true,
) {
    const hexTile = hexagon(hex.q, hex.r, hex.s)
    return {
        cubeCoords: hexTile,
        screenCoords: convertHexToPixel(hexTile),
        isTraversable: isTraversable,
        corners: hexCorners(hexTile),
        neighborIndexes: getAllNeighbors(hexTile),
        occupants: 'none',
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

export function tileMap(radius = 6) {
    const hexMap = randomizeTraversableHexes(
        hexShapedMap(radius),
        radius * 3
    ).filter(t => t.isTraversable)
    let map = []
    for (let i = 0; i < hexMap.length; i++) {
        const tile = hexMap[i]
        tile.index = i
        tile.neighborIndexes = tile.neighborIndexes
            .map(neighbor => hexMap.findIndex(hex => areHexagonsEqual(hex.cubeCoords, neighbor))).filter(nIndex => nIndex !== -1)

        map.push(tile)
    }
    return map
}

export function mapGraph(tileMap = tileMap(6)) {
    return tileMap
        .map(tile => tile.neighborIndexes.filter(t => t !== -1))
}

export function selectNearestHexTile(map, {x, y}) {
    const nearestHexTile = getNearestHexTile(x, y)
    const index = map.findIndex(item => areHexagonsEqual(item.cubeCoords, nearestHexTile.cubeCoords))
    if (index === -1)
        return null
    return map[index]
}

export function indexOfNearestTile(map, {x, y}) {
    const nearestHexTile = getNearestHexTile(x, y)
    const index = map.findIndex(item => areHexagonsEqual(item.cubeCoords, nearestHexTile.cubeCoords))
    if (index === -1)
        return null
    return index
}

export function randomizeTraversableHexes(hexTileMap, numOfTiles = 20) {
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

