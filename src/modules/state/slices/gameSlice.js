import {createSlice, current} from '@reduxjs/toolkit'
import {
    hexShapedMap, indexOfNearestTile,
    randomizeTraversableHexes,
    selectNearestHexTile,
    tile
} from "../../lib/map.js"
import {hexagon, point} from "../../lib/hexagons.js"
import {deepEqual, randNum, roundCubeCoords} from "../../lib/utilities.js";

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
            const tileIndex = indexOfNearestTile(map, end)

            if (nearestTile === null || !nearestTile.isTraversable || nearestTile.occupants === 'enemy')
                return

            map[tileIndex].neighbors.forEach((tile) => {
                if (typeof tile !== 'undefined') {
                    const neighbor = tile
                    console.log(current(neighbor))
                    const hexTile = map.findIndex(hex => deepEqual(hex.cubeCoords, neighbor))
                    if (hexTile !== -1)
                        map[hexTile].color = 'purple'
                }
            })

            console.log(current(map[tileIndex]))

            map[tileIndex].occupants = 'player'
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