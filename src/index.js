import store from "./modules/state/store.js"
import {generateMap, setupGame, spawnEnemies, spawnPlayer} from "./modules/state/slices/gameSlice.js";
import {getMousePos} from "./modules/lib/canvasUtilites.js"
import {movePlayer} from "./modules/state/slices/gameSlice.js";
import {point} from "./modules/lib/hexagons.js";
import {inverseLerp, lerp, smoothstep} from "./modules/lib/utilities.js";
import Map from './modules/components/Map.js'
import Player from "./modules/components/Player.js";
import Enemy from "./modules/components/Enemy.js";

const root = document.getElementById("game")
const ctx = root.getContext("2d")
let animFrame = null
//
// store.dispatch(generateMap(6))
// store.dispatch(spawnPlayer())
// store.dispatch(spawnEnemies(4))

const state = store.getState()
let {x, y} = state.game.player.location

store.dispatch(setupGame({radius: 6, numOfEnemies: 4}))
render()
function render() {
    animFrame = requestAnimationFrame(render);
    cleanup()
    const state = store.getState()
    const playerLocation = state.game.player.location

    x = lerp(x, playerLocation.x, 0.1)
    y = lerp(y, playerLocation.y, 0.1)

    Map(ctx, state.game.map)
    state.game.enemies.forEach(enemy => {
        Enemy(ctx, point(enemy.location.x, enemy.location.y))
    })
    Player(ctx, point(x, y))
}

store.subscribe(() => {
    cancelAnimationFrame(animFrame)
    render()
})

window.addEventListener('resize', render)
root.addEventListener('click', event => {
    const {x, y} = getMousePos(ctx, event)
    store.dispatch(movePlayer(point(x, y)))
})

function cleanup() {
    root.width = window.innerWidth
    root.height = window.innerHeight
    ctx.translate(root.width * 0.5, root.height * 0.5)
    ctx.clearRect(0, 0, root.width, root.height)
}

//to round to n decimal places
//to round to n decimal places
// function round(num, places = 8) {
//     var multiplier = Math.pow(10, places);
//     return Math.round(num * multiplier) / multiplier;
// }
