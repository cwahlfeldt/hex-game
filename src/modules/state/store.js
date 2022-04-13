import { configureStore } from '@reduxjs/toolkit'
import gameSlice from "./reducers.js";

const store = configureStore({
    reducer: {
        game: gameSlice,
    },
})

export default store