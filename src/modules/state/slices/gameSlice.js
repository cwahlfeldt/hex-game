import {createSlice, current} from '@reduxjs/toolkit'
import {hexagonPiece, hexShapedMap, randomizeTraversableHexes, selectNearestHex} from "../../lib/hexagonMap.js"
import {hexagon, point} from "../../lib/hexagons.js"
import {lerp, randNum} from "../../lib/utilities.js";

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
        selectedHex: hexagonPiece({hex: hexagon(0, 0, 0)}),
    },

    reducers: {
        spawnPlayer: (state, action) => {
            const map = state.map
            let hex = map[randNum(0, map.length - 1)]

            while (!hex.isTraversable) {
                hex = map[randNum(0, map.length - 1)]
            }
            state.player.location = hex.center
        },
        spawnEnemies: (state, action) => {
            const amount = action.payload
            const map = state.map
            const enemies = Array.from({length: amount}, () => {
                let hex = map[randNum(0, map.length - 1)]
                let enemy = {...state.enemyTypes.grunt}
                let rando = randNum(0, map.length - 1)
                while (!hex.isTraversable) {
                    rando = randNum(0, map.length - 1)
                    hex = map[rando]
                }
                enemy.location = hex.center
                return enemy
            })
            state.enemies = enemies
        },
        generateMap: (state, action) => {
            const map = hexShapedMap(action.payload)
            state.map = randomizeTraversableHexes(map, map.length / 4)
        },
        selectHex: (state, action) => {
            const map = state.map
            const {x, y} = action.payload
            state.selectedHex = selectNearestHex(map, point(x, y))
        },
        movePlayer: (state, action) => {
            const map = state.map
            const end = action.payload
            const nearestHex = selectNearestHex(map, end)

            if (nearestHex === null || !nearestHex.isTraversable)
                return

            if (nearestHex.currentPiece === 'enemy')
                return

            console.log(nearestHex.currentPiece)

            state.player.location = nearestHex.center
        }
    }
})

export const {spawnPlayer, movePlayer, generateMap, selectHex, spawnEnemies} = gameSlice.actions
export default gameSlice.reducer