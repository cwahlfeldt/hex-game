import astar from 'javascript-astar'
import {Grid} from 'hexagrid'
import { defineGrid } from 'honeycomb-grid'

// import {Grid,Engine} from "hexapi";
import {createSlice, current} from '@reduxjs/toolkit'
import {
    generateMapWithGraph, gridGraph,
    hexShapedMap, indexOfNearestTile, mapGraph,
    selectNearestHexTile,
    tile, tileMap
} from "../../lib/map.js"
import {addHexagons, distanceBetweenHexagons, hexagon, hexLine, point, subtractHexagons} from "../../lib/hexagons.js"
import {deepEqual, randNum, roundCubeCoords} from "../../lib/utilities.js";
import {
    aStar,
    breadthFirstSearch,
    easyPath,
    findPath,
    path, reconstructedPath,
    reconstructPath,
    returnShortestPath, searchPath
} from "../../lib/pathFinding.js";
import PF from "pathfinding";

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

            const playerTile = indexOfTraversableTile(map)
            map[playerTile].occupants = 'player'
            // map[playerTile].neighborIndexes.forEach(n => map[n].color = 'rgba(42, 160, 216, .9)')
            state.player.location = map[playerTile].screenCoords
            state.player.tileIndex = playerTile

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

        movePlayer: (state, action) => {
            const map = state.map
            const pos = action.payload
            const nearestTile = selectNearestHexTile(map, pos)
            const lastTurn = state.turns[state.turns.length - 1]

            if (nearestTile === null) return

            const start = state.player.tileIndex
            const end = nearestTile.index
            const search = searchPath(state.graph, start, end)
            const path = findPath(search, start, end)

            console.log('start: ', start)
            console.log('end: ', end)
            console.log('search: ', search)
            console.log('path: ', path)

            // map[lastTurn.lastTileIndex].neighborIndexes.forEach(n => map[n].color = 'rgba(42, 160, 216, .5)')
            // map[nearestTile.index].neighborIndexes.forEach(n => map[n].color = 'rgba(42, 160, 216, .9)')
            state.turns.push({
                map: map,
                lastTileIndex: nearestTile.index,
                player: state.player,
                enemies: state.enemies
            })

            state.player.tileIndex = nearestTile.index
            state.player.location = nearestTile.screenCoords
        },
        hoverPos: (state, action) => {
            const map = state.map
            const pos = action.payload
            const nearestTile = selectNearestHexTile(map, pos)

            if (nearestTile === null) return

            const start = state.player.tileIndex
            const end = nearestTile.index
            const search = searchPath(state.graph, start, end)
            const path = findPath(search, start, end)
            console.log(path)

            map.forEach(t => t.color = 'rgba(42, 160, 216, .5)')
            map[start].color = 'rgba(42, 160, 216, .9)'
            path.forEach(tIndex => map[tIndex].color = 'rgba(42, 160, 216, .9)')
            state.map = map
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
    movePlayer,
    hoverPos,
} = gameSlice.actions

export default gameSlice.reducer