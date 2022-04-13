import {configureStore} from '@reduxjs/toolkit'
import mapSlice from "./slices/mapSlice.js";

const store = configureStore({
    reducer: {
        map: mapSlice,
    },
})

export default store