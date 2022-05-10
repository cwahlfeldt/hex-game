import { createSlice, current } from '@reduxjs/toolkit'
import { tileGraph, selectNearestHexTile, tileMap, indexOfTraversableTile } from "../../modules/tileMap.js"
import { hexagon, point } from "../../lib/hexagons.js"
import { buildPath, searchPath } from "../../lib/pathFinding.js";
import tile from "../../modules/tile.js";
import player from "../../modules/player.js";
import grunt from "../../modules/enemies/grunt.js";

const gameSlice = createSlice({
    name: 'game',

    initialState: {
        player: player(),
        enemies: [],
        map: [],
        graph: [],
        selectedHex: tile(),
        turns: [],
    },

    reducers: {
        setupGame: (state, action) => {
            const radius = action.payload.radius
            const numOfEnemies = action.payload.numOfEnemies
            const map = tileMap(radius)
            const graph = tileGraph(map)
            const playerTile = indexOfTraversableTile(map)

            map[playerTile].occupants = 'player'
            map[playerTile].neighborIndexes.forEach(n => map[n].color = 'rgba(42, 160, 216, .9)')

            state.player.location = map[playerTile].screenCoords
            state.player.tileIndex = playerTile

            state.enemies = Array.from({ length: numOfEnemies }, () => {
                const enemyTile = indexOfTraversableTile(map)
                map[enemyTile].occupants = 'enemy'
                return grunt({
                    mapIndex: enemyTile,
                    location: map[enemyTile].screenCoords
                })
            })

            state.map = map
            state.graph = graph
            state.turns = [...state.turns, state]
        },

        movePlayer: (state, action) => {
            const map = state.map
            const pos = action.payload
            const nearestTile = selectNearestHexTile(map, pos)
            const lastTurn = state.turns[state.turns.length - 1]

            if (nearestTile === null || !nearestTile.isTraversable) return

            const start = state.player.tileIndex
            const end = nearestTile.index
            const search = searchPath(state.graph, start, end)
            const path = buildPath(search, start, end)

            console.log('path: ', path)

            map[lastTurn.lastTileIndex].neighborIndexes.forEach(n => map[n].color = 'rgba(42, 160, 216, .5)')
            map[nearestTile.index].neighborIndexes.forEach(n => {
                console.log('player neighbors: ', map[n].occupants)
                map[n].color = 'rgba(42, 160, 216, .9)'
            })
            state.turns.push({
                map: map,
                lastTileIndex: nearestTile.index,
                player: state.player,
                enemies: state.enemies
            })

            const moveToTileIndex = path[0]
            const moveTo = map[moveToTileIndex].screenCoords

            state.map[nearestTile.index].occupants = 'player'
            state.player.tileIndex = moveToTileIndex
            state.player.location = moveTo
        },

        moveEnemies: (state, action) => {
            const map = state.map
            const pos = action.payload
            const moveTo = state.player.tileIndex
            const nearestTile = selectNearestHexTile(map, pos)

            if (nearestTile === null || !nearestTile.isTraversable) return

            state.enemies.forEach((enemy, i) => {
                const start = enemy.tileIndex
                const search = searchPath(state.graph, start, moveTo)
                const enemyPath = buildPath(search, start, moveTo)
                map[enemyPath[0]].neighborIndexes.forEach(n => {
                    console.log(`enemy neighbors ${i}: `, map[n].occupants)

                })
                state.map[enemyPath[0]].occupants = 'enemy'
                state.enemies[i].tileIndex = map[enemyPath[0]].index
                state.enemies[i].location = map[enemyPath[0]].screenCoords
            })
        },

        hoverPos: (state, action) => {
            const map = state.map
            const pos = action.payload
            const nearestTile = selectNearestHexTile(map, pos)

            if (nearestTile === null) return

            const start = state.player.tileIndex
            const end = nearestTile.index
            const search = searchPath(state.graph, start, end)
            const path = buildPath(search, start, end)
            console.log(path)

            map.forEach(t => t.color = 'rgba(42, 160, 216, .5)')
            map[start].color = 'rgba(42, 160, 216, .9)'
            path.forEach(tIndex => map[tIndex].color = 'rgba(42, 160, 216, .9)')
            state.map = map
        }
    }
})

export const {
    setupGame,
    movePlayer,
    moveEnemies,
    hoverPos,
} = gameSlice.actions

export default gameSlice.reducer
