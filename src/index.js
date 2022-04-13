import Map from './modules/components/Map.js'
import store from "./modules/state/store.js"
import {getMousePos} from "./modules/lib/canvasUtilites.js"
import {generateMap, selectHex} from "./modules/state/slices/mapSlice.js";

const root = document.getElementById("game")
const ctx = root.getContext("2d")

store.dispatch(generateMap(6))

function render() {
    const state = store.getState()

    cleanup()
    Map(ctx, state.map.tiles)
}
store.subscribe(render)
render()

root.addEventListener('click', event => {
    const {x, y} = getMousePos(ctx, event)
    store.dispatch(selectHex({x, y}))
})

window.addEventListener('resize', () => {
    render()
}, false)

function cleanup() {
    root.width = window.innerWidth
    root.height = window.innerHeight
    ctx.translate(root.width * 0.5, root.height * 0.5)
    ctx.clearRect(0, 0, root.width, root.height)
}