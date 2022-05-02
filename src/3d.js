import * as THREE from 'three'
import store from "./state/store.js";
import {setupGame} from "./state/slices/gameSlice.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('game')});
renderer.setSize( window.innerWidth, window.innerHeight );

store.dispatch(setupGame({ radius: 6, numOfEnemies: 1 }))
const state = store.getState()

state.game.map.forEach(tile => {
    console.log(tile)
    const hex = drawHex(tile)
    const geometry = new THREE.ShapeGeometry( hex );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
})

camera.position.z = 500;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();

function drawHex({corners, screenCoords}) {
    const hex = new THREE.Shape()
    hex.moveTo(screenCoords.x, screenCoords.y)
    corners.forEach(corner => {
        hex.lineTo(corner.x, corner.y)
    })
    hex.lineTo(corners[0].x, corners[0].y)
    return hex
}