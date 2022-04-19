import {createSlice, current} from '@reduxjs/toolkit'
import {
    generateMapWithGraph,
    hexShapedMap, indexOfNearestTile, mapGraph,
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
        turns: [],
    },

    reducers: {
        setupGame: (state, action) => {
            const radius = action.payload.radius
            const numOfEnemies = action.payload.numOfEnemies
            const map = tileMap(radius)
            const graph = mapGraph(map)
            let turns = state.turns

            const playerTile = indexOfTraversableTile(map)
            map[playerTile].occupants = 'player'
            map[playerTile].color = 'rgba(42, 160, 216, .9)'
            state.player.location = map[playerTile].screenCoords

            state.enemies = Array.from({length: numOfEnemies}, () => {
                const enemyTile = indexOfTraversableTile(map)
                let enemy = {...state.enemyTypes.grunt}
                enemy.location = map[enemyTile].screenCoords
                map[enemyTile].occupants = 'enemy'
                return enemy
            })

            state.turns.push({
                map: map,
                lastTileIndex: playerTile,
                player: state.player,
                enemies: state.enemies
            })

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
            const lastTurn = state.turns[state.turns.length - 1]

            if (nearestTile === null || nearestTile.isTraversable === false) return

            map[nearestTile.index].color = 'rgba(42, 160, 216, .9)'
            state.turns.push({
                map: map,
                lastTileIndex: nearestTile.index,
                player: state.player,
                enemies: state.enemies
            })
            map[lastTurn.lastTileIndex].color ='rgba(42, 160, 216, .5)'

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
    setupGame,
    spawnPlayer,
    movePlayer,
    generateMap,
    spawnEnemies
} = gameSlice.actions

export default gameSlice.reducer