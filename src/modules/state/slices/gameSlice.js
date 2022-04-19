import {createSlice, current} from '@reduxjs/toolkit'
import {
    generateMapWithGraph,
    hexShapedMap, indexOfNearestTile, mapGraph,
    randomizeTraversableHexes,
    selectNearestHexTile,
    tile, tileMap
} from "../../lib/map.js"
import {hexagon, point} from "../../lib/hexagons.js"
import {deepEqual, randNum, roundCubeCoords} from "../../lib/utilities.js";

const gameSlice = createSlice({
    name: 'game',

    initialState: {
        player: {
            tileIndex: 0,
            location: point(0, 0),
            health: 3,
            power: 100,
            credits: 0
        },
        enemyTypes: {
            grunt: {
                tileIndex: 0,
                location: point(0, 0),
                health: 1,
                drops: {
                    credits: 10,
                }
            }
        },
        enemies: [],
        map: [],
        graph: [],
        selectedHex: tile(hexagon(0, 0, 0)),
    },

    reducers: {
        spawnPlayer: (state, action) => {
            const map = state.map
            const tileIndex = indexOfTraversableTile(map)

            map[tileIndex].occupants = 'player'
            state.player.location = map[tileIndex].screenCoords
        },

        spawnEnemies: (state, action) => {
            const amount = action.payload
            const map = state.map
            state.enemies = Array.from({length: amount}, () => {
                const tileIndex = indexOfTraversableTile(map)
                let enemy = {...state.enemyTypes.grunt}
                enemy.location = map[tileIndex].screenCoords
                map[tileIndex].occupants = 'enemy'
                return enemy
            })
        },

        generateMap: (state, action) => {
            const map = tileMap(6)
            const graph = mapGraph(map)
            state.map = map
            state.graph = graph
        },

        selectHex: (state, action) => {
            const map = state.map
            const {x, y} = action.payload
            state.selectedHex = selectNearestHexTile(map, point(x, y))
        },

        movePlayer: (state, action) => {
            const map = state.map
            const pos = action.payload
            const nearestTile = selectNearestHexTile(map, pos)

            if (nearestTile === null) return

            map[nearestTile.index].neighborIndexes.forEach(nIndex => {
                const neighbor = map[nIndex]
                neighbor.color = 'rgba(42, 160, 216, .7)'
            })

            map[nearestTile.index].color = 'rgba(42, 160, 216, .9)'
            map[nearestTile.index].occupants = 'player'
            state.player.location = nearestTile.screenCoords
        }
    }
})

function indexOfTraversableTile(map) {
    let magicNum = randNum(0, map.length - 1)
    let tile = map[magicNum]

    while (!tile.isTraversable) {
        const rando = randNum(0, map.length - 1)
        tile = map[rando]
        magicNum = rando
    }
    return magicNum
}

export const {
    spawnPlayer,
    movePlayer,
    generateMap,
    spawnEnemies
} = gameSlice.actions

export default gameSlice.reducer