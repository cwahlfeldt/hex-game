import store from "./modules/state/store.js"
import {getMousePos} from "./modules/lib/canvasUtilites.js"
import {hoverPos, movePlayer, setupGame} from "./modules/state/slices/gameSlice.js";
import {point} from "./modules/lib/hexagons.js";
import {deepEqual, lerp} from "./modules/lib/utilities.js";
import Map from './modules/components/Map.js'
import Player from "./modules/components/Player.js";
import Enemy from "./modules/components/Enemy.js";

const root = document.getElementById("game")
const ctx = root.getContext("2d")
const offscreen = document.createElement('canvas');
const offscreenCtx = offscreen.getContext('2d')

const initState = store.getState()
let {x, y} = initState.game.player.location
store.dispatch(setupGame({radius: 6, numOfEnemies: 2}))

let animFrame = null
render(initState)
function render(state) {
    cleanup()
    animFrame = requestAnimationFrame(() => render(state));
    const playerLocation = state.game.player.location

    x = lerp(x, playerLocation.x, 0.1)
    y = lerp(y, playerLocation.y, 0.1)

    Map(ctx, state.game.map)
    state.game.enemies.forEach(enemy => {
        Enemy(ctx, point(enemy.location.x, enemy.location.y))
    })
    const pos = point(Math.floor(x), Math.floor(y))
    Player(ctx, pos)
}
store.subscribe(() => {
    const state = store.getState()
    cancelAnimationFrame(animFrame)
    render(state)
})

root.addEventListener('click', event => {
    const {x, y} = getMousePos(ctx, event)
    store.dispatch(movePlayer(point(x, y)))
})

root.addEventListener('mousemove', event => {
    const {x, y} = getMousePos(ctx, event)
    store.dispatch(hoverPos(point(x, y)))
})

function cleanup() {
    root.width = window.innerWidth
    root.height = window.innerHeight
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.translate(root.width * 0.5, root.height * 0.5)
}

//to round to n decimal places
//to round to n decimal places
// function round(num, places = 8) {
//     var multiplier = Math.pow(10, places);
//     return Math.round(num * multiplier) / multiplier;
// }
