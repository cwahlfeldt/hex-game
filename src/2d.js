import store from "./state/store.js"
import { getMousePos } from "./lib/canvasUtilites.js"
import {hoverPos, moveEnemies, movePlayer, setupGame} from "./state/slices/gameSlice.js";
import { hexLerp, point } from "./lib/hexagons.js";
import { deepEqual, lerp } from "./lib/utilities.js";
import Map from './components/Map.js'
import Player from "./components/Player.js";
import Enemy from "./components/Enemy.js";

const root = document.getElementById("game")
const ctx = root.getContext("2d")

store.dispatch(setupGame({ radius: 6, numOfEnemies: 1 }))
let initState = store.getState()
let { x, y } = initState.game.player.location

render()
function render() {
    cleanup()

    const state = store.getState()
    const end = state.game.player.location
    Map(ctx, state.game.map)

    x = lerp(x, end.x, 0.1)
    y = lerp(y, end.y, 0.1)

    state.game.enemies.forEach(enemy => {
        Enemy(ctx, point(enemy.location.x, enemy.location.y))
    })

    const pos = point(x, y)
    Player(ctx, pos)
}

store.subscribe(async () => {
    await animate(render)
})

root.addEventListener('click', event => {
    const { x, y } = getMousePos(ctx, event)

    store.dispatch([
        moveEnemies(point(x, y)),
        movePlayer(point(x, y)),
    ])
})

function cleanup() {
    root.width = window.innerWidth
    root.height = window.innerHeight
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    ctx.translate(root.width * 0.5, root.height * 0.5)
}

async function animate(callback) {
    for (let i=0; i < 60 ; i++) {
        await wait(5)
        callback()
    }
}

function wait(ms)  {
    return new Promise( resolve => { setTimeout(resolve, ms) })
}