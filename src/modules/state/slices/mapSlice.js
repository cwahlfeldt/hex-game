import {createSlice, current} from '@reduxjs/toolkit'
import {getNearestHexPiece, hexShapedMap, randomizeTraversableHexes} from "../../lib/hexagonMap.js"
import {areHexagonsEqual} from "../../lib/hexagons.js"

const mapSlice = createSlice({
    name: 'map',

    initialState: {
        tiles: hexShapedMap(3),
        selectedHex: null,
    },

    reducers: {
        generateMap: (state, action) => {
            const map = hexShapedMap(action.payload)
            state.tiles = randomizeTraversableHexes(map, map.length / 4)
        },
        selectHex: (state, action) => {
            const map = state.tiles
            const {x, y} = action.payload
            const nearestHex = getNearestHexPiece(x, y)
            const index = map.findIndex(item => areHexagonsEqual(item.hex, nearestHex.hex))

            if (index > -1)
                map[index].isTraversable = !map[index].isTraversable

            console.log(index)
            state.tiles = map
            state.selectedHex = map[index]
        }
    }
})

export const {generateMap, selectHex} = mapSlice.actions
export default mapSlice.reducer