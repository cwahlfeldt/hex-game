import {createSlice, current} from '@reduxjs/toolkit'
import {getNearestHexPiece, hexShapedMap} from "../lib/hexagonMap.js"
import {areHexagonsEqual} from "../lib/hexagons.js"
import initialState from "./initialState.js"

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setMap: (state, action) => {
            state.map = hexShapedMap(action.payload.radius)
        },
        setCurrentHex: (state, action) => {
            const map = state.map
            const nearestHex = getNearestHexPiece(action.payload.x, action.payload.y)
            const index = map.findIndex(item => areHexagonsEqual(item.hex, nearestHex.hex))
            if (typeof map[index] !== 'undefined')
                map[index].isTraversable = !map[index].isTraversable
            state.map = map
        }
    }
})

export const {setCurrentHex} = gameSlice.actions
export default gameSlice.reducer