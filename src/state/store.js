import {configureStore} from '@reduxjs/toolkit'
import {reduxBatch}  from '@manaflair/redux-batch'
import gameSlice from "./slices/gameSlice.js"

const store = configureStore({
    reducer: {
        game: gameSlice,
    },
    enhancers: [reduxBatch]
})

export default store