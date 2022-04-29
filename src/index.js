import store from "./modules/state/store.js"
import { getMousePos } from "./modules/lib/canvasUtilites.js"
import {hoverPos, moveEnemies, movePlayer, setupGame} from "./modules/state/slices/gameSlice.js";
import { hexLerp, point } from "./modules/lib/hexagons.js";
import { deepEqual, lerp } from "./modules/lib/utilities.js";
import Map from './modules/components/Map.js'
import Player from "./modules/components/Player.js";
import Enemy from "./modules/components/Enemy.js";

const root = document.getElementById("game")
const ctx = root.getContext("2d")

store.dispatch(setupGame({ radius: 6, numOfEnemies: 1 }))
let initState = store.getState()
let { x, y } = initState.game.player.location

let animFrame = null
render()
function render() {
    cleanup()
    // animFrame = requestAnimationFrame(render);

    const state = store.getState()
    initState = state
    const end = state.game.player.location

    x = lerp(x, end.x, 0.1)
    y = lerp(y, end.y, 0.1)

    Map(ctx, state.game.map)

    state.game.enemies.forEach(enemy => {
        Enemy(ctx, point(enemy.location.x, enemy.location.y))
    })

    const pos = point(x, y)
    // const pos = point(end.x, end.y)
    Player(ctx, pos)

}
let interval = null
store.subscribe(async () => {
    // cancelAnimationFrame(animFrame)
    await animate(() => {
        render()
    })
})

root.addEventListener('click', event => {
    const { x, y } = getMousePos(ctx, event)

    store.dispatch([
        moveEnemies(point(x, y)),
        movePlayer(point(x, y)),
    ])
})

// root.addEventListener('mousemove', event => {
//     const { x, y } = getMousePos(ctx, event)
//     store.dispatch(hoverPos(point(x, y)))
// })

function cleanup() {
    root.width = window.innerWidth
    root.height = window.innerHeight
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.translate(root.width * 0.5, root.height * 0.5)
}

async function animate(callback) {
    for (let i=0; i < 60 ; i++) {
        await wait(5); // loop will be halted here until promise is resolved
        callback()
    }
}

function wait(ms)  {
    return new Promise( resolve => { setTimeout(resolve, ms); });
}

//to round to n decimal places
//to round to n decimal places
// function round(num, places = 8) {
//     var multiplier = Math.pow(10, places);
//     return Math.round(num * multiplier) / multiplier;
// }
