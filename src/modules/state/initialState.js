// maps are generated
import {tile, hexShapedMap} from "../lib/map.js";
import {hexagon} from "../lib/hexagons.js";

const map = [
    {
        hex: {q: 1, r: -1, s: 0},
        isTraversable: true,
        center: {x: 0, y: 0},
        corners: [/* {x,y} values */]
    } // ... and so on
]

const exampleGameState = {
    player: {
        name: 'waffles',
        level: 1,
        health: 3,
        power: 100,
        credits: 0,
        range: 1, // idea: the range can be outside of hex neighbors ex: range > 1 <= 2 for like jumps abd waprs
    },
    game: {
        turn: 'player',
        stage: 1,
        playerLocation: {x: -1, y: 1},
        numOfEnemies: 1,
        currentHex: null,
        map: hexShapedMap(3),
        enemies: [
            {
                type: 'grunt',
                health: 1,
                power: 0,
                drops: {
                    credits: 10,
                },
            }
        ],
    },
}

const initialState = {
    player: {
        name: 'waffles',
        level: 1,
        health: 3,
        power: 100,
        credits: 0,
        range: 1, // idea: the range can be outside of hex neighbors ex: range > 1 <= 2 for like jumps abd waprs
    },
    turn: 'player',
    stage: 1,
    numOfEnemies: 0,
    currentHex: null,
    map: hexShapedMap(3),
    enemies: [],
}

export default initialState