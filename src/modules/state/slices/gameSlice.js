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
            map[playerTile].neighborIndexes.forEach(n => map[n].color = 'rgba(42, 160, 216, .9)')
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

            if (nearestTile === null || nearestTile.isTraversable === false) return

            // console.log(state.player.tileIndex)
            // console.log(state.player.tileIndex, nearestTile.index)
            // const path = findPath(state.graph, start, end)
            // const gridGraph = gridGraph(map)
            // console.log(state.graph.path(map[start].cubeCoords, map[end].cubeCoords))

            // let myGrid = Grid({hexSize: 30, type: 'flat', cols: '12', rows: '12'});
            // Grid.map = map.map(hex => hex.screenCoords)
            // let thePath = myGrid.pathTo(map[start].screenCoords, map[end].screenCoords);
            // console.log(thePath)
            // console.log(astar)
            // var graphDiagonal = new astar.Graph(state.graph, { diagonal: true });
            // var start = graphDiagonal.grid[0][0];
            // var end = graphDiagonal.grid[1][2];
            // var resultWithDiagonals = astar.search(graphDiagonal, start, end, { heuristic: astar.heuristics.diagonal });
            // console.log(resultWithDiagonals)
            // var matrix = state.graph;
            // var grid = new PF.Grid(matrix);
            // var finder = new PF.AStarFinder();
            // var path = finder.findPath(start, start, end, end, grid);
            // console.log(path)
            // const path = findPath(state.graph, start, end)
            // const path = reconstructPath(findPath(state.graph, start, end), start, end)
            // // console.log(path)
            // map[nearestTile].neighbors.forEach(tileIndex => {
            //     map[tileIndex].color = 'black'
            // })



            const start = state.player.tileIndex
            const end = nearestTile.index
            const search = searchPath(state.graph, start, end)
            // const path = findPath(search, start, end)

            console.log('start: ', start)
            console.log('end: ', end)
            console.log('search: ', search)
            // console.log('path: ', path)
            // console.log(distanceBetweenHexagons(map[state.player.tileIndex].cubeCoords,map[nearestTile.index].cubeCoords))
            // console.log(hexLine(start, end))

            map[lastTurn.lastTileIndex].neighborIndexes.forEach(n => map[n].color = 'rgba(42, 160, 216, .5)')
            map[nearestTile.index].neighborIndexes.forEach(n => map[n].color = 'rgba(42, 160, 216, .9)')
            state.turns.push({
                map: map,
                lastTileIndex: nearestTile.index,
                player: state.player,
                enemies: state.enemies
            })

            state.player.tileIndex = nearestTile.index
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
    movePlayer,
} = gameSlice.actions

export default gameSlice.reducer