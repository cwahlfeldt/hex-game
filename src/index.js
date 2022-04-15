import store from "./modules/state/store.js"
import {getMousePos} from "./modules/lib/canvasUtilites.js"
import {generateMap, spawnEnemies, spawnPlayer} from "./modules/state/slices/gameSlice.js";
import Map from './modules/components/Map.js'
import Player from "./modules/components/Player.js";
import {movePlayer} from "./modules/state/slices/gameSlice.js";
import {point} from "./modules/lib/hexagons.js";
import Enemy from "./modules/components/Enemy.js";

const root = document.getElementById("game")
const ctx = root.getContext("2d")

store.dispatch(generateMap(6))
store.dispatch(spawnPlayer())
store.dispatch(spawnEnemies(4))

render()
function render() {
    cleanup()
    const state = store.getState()

    Map(ctx, state.game.map)
    state.game.enemies.forEach(enemy => {
        // console.log(enemy)
        Enemy(ctx, enemy.location)
    })
    Player(ctx, state.game.player.location)
}
store.subscribe(render)
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

// function animateLerp(a, b, callback) {
//     let x = 0
//     let y = 0
//     if (a.x !== b.x && a.y !== b.y) {
//         x = lerp(a.x, b.x, 0.1)
//         y = lerp(a.y, b.y, 0.1)
//     }
//     callback(x, y)
// }