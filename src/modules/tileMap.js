import {
    areHexagonsEqual,
    convertHexToPixel,
    convertPixelToHex,
    getAllNeighbors,
    hexagon,
    hexCorners, hexShapedGrid,
    point
} from "../lib/hexagons.js";
import {randNum} from "../lib/utilities.js";
import {tile} from "./tile.js";

export function tileMap(radius = 6) {
    const hexMap = randomizeTraversableHexes(
        hexShapedGrid(radius).map(hex => tile(hex)),
        radius * 3
    ).filter(t => t.isTraversable)

    let map = []
    for (let i = 0; i < hexMap.length; i++) {
        const tile = hexMap[i]
        tile.index = i
        tile.neighborIndexes = tile.neighborIndexes
            .map(neighbor => hexMap.findIndex(hex => areHexagonsEqual(hex.cubeCoords, neighbor)))
            .filter(nIndex => nIndex !== -1)

        map.push(tile)
    }
    return map
}

export function mapGraph(tileMap) {
    return tileMap.map(tile => tile.neighborIndexes.filter(t => t !== -1))
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

export function randomizeMap(map, amount = 6) {
    const hexMap = map
    const max = hexMap.length - 1
    const min = 1
    Array.from({length: amount}).forEach(() => {
        const num = randNum(min, max)
        delete hexMap[num]
    })
    return hexMap
}

export function getNearestHexTile(x, y) {
    return tile(convertPixelToHex(point(x, y)))
}

export function selectNearestHexTile(map, {x, y}) {
    const nearestHexTile = getNearestHexTile(x, y)
    const index = map.findIndex(item => areHexagonsEqual(item.cubeCoords, nearestHexTile.cubeCoords))
    if (index === -1) return null
    return map[index]
}

export function indexOfTraversableTile(map) {
    let magicNum = randNum(0, map.length - 1)
    let tile = map[magicNum]

    while (!tile.isTraversable) {
        const rando = randNum(0, map.length - 1)
        tile = map[rando]
        magicNum = rando
    }
    return magicNum
}
