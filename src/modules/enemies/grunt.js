import {point} from "../../lib/hexagons.js";

const grunt = (options = {}) => {
    const defaultOptions = {
        mapIndex: 0,
        location: point(0, 0),
        health: 1,
        credits: 10,
    }
    return {...defaultOptions, ...options}
}

export default grunt