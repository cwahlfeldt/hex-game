import {point} from "../lib/hexagons.js";

const player = (options = {}) => {
    const defaultOptions = {
        tileIndex: 0,
        location: point(0, 0),
        health: 3,
        power: 100,
        credits: 0
    }
    return {...defaultOptions, ...options}
}

export default player