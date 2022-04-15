import {createSlice} from '@reduxjs/toolkit'
import {hexShapedMap, randomizeTraversableHexes, selectNearestHexTile, tile} from "../../lib/map.js"
import {hexagon, point} from "../../lib/hexagons.js"
import {randNum} from "../../lib/utilities.js";

const gameSlice = createSlice({
    name: 'game',

    initialState: {
        player: {
            location: point(0, 0),
            health: 3,
            power: 100,
            credits: 0
        },
        enemyTypes: {
            grunt: {
                location: point(0, 0),
                health: 1,
                drops: {
                    credits: 10,
                }
            }
        },
        enemies: [],
        map: hexShapedMap(3),
        selectedHex: tile(hexagon(0, 0, 0)),
    },

    reducers: {
        spawnPlayer: (state, action) => {
            const map = state.map
            let tile = map[randNum(0, map.length - 1)]

            while (!tile.isTraversable) {
                tile = map[randNum(0, map.length - 1)]
            }
            state.player.location = tile.screenCoords
        },
        spawnEnemies: (state, action) => {
            const amount = action.payload
            const map = state.map
            state.enemies = Array.from({length: amount}, () => {
                let tile = map[randNum(0, map.length - 1)]
                let enemy = {...state.enemyTypes.grunt}
                let rando = randNum(0, map.length - 1)
                while (!tile.isTraversable) {
                    rando = randNum(0, map.length - 1)
                    tile = map[rando]
                }
                enemy.location = tile.screenCoords
                return enemy
            })
        },
        generateMap: (state, action) => {
            const map = hexShapedMap(action.payload)
            state.map = randomizeTraversableHexes(map, map.length / 4)
        },
        selectHex: (state, action) => {
            const map = state.map
            const {x, y} = action.payload
            state.selectedHex = selectNearestHexTile(map, point(x, y))
        },
        movePlayer: (state, action) => {
            const map = state.map
            const end = action.payload
            const nearestTile = selectNearestHexTile(map, end)

            if (nearestTile === null || !nearestTile.isTraversable)
                return

            state.player.location = nearestTile.screenCoords
        }
    }
})

export const {
    spawnPlayer,
    movePlayer,
    generateMap,
    spawnEnemies
} = gameSlice.actions

export default gameSlice.reducer