import {convertHexToPixel, convertPixelToHex, getAllNeighbors, hexagon, hexCorners, point} from "./hexagons.js";
import {randNum} from "./utilities.js";

const {min, max} = Math

export function hexagonPiece(optionArgs) {
    const options = {
        hex: hexagon(0, 0, 0),
        isTraversable: true,
        ...optionArgs,
    }

    const hex = hexagon(options.hex.q, options.hex.r, options.hex.s)
    return {
        hex,
        center: convertHexToPixel(hex),
        corners: hexCorners(hex),
        neighbors: getAllNeighbors(hex),
        isTraversable: options.isTraversable,
        color: 'rgba(42, 160, 216, .5)',
    }
}

export function getNearestHexPiece(x, y, optionsArgs) {
    return hexagonPiece({
        hex: convertPixelToHex(point(x, y)),
        ...optionsArgs
    })
}

export function hexShapedMap(radius) {
    let map = []
    for (let q = -radius; q <= radius; q++) {
        let r1 = max(-radius, -q - radius);
        let r2 = min(radius, -q + radius);
        for (let r = r1; r <= r2; r++) {
            const hex = hexagonPiece({
                hex: hexagon(q, r, -q - r),
            })
            map.push(hex);
        }
    }

    return map
}

export function randomizeTraversableHexes(hexMap, numOfTiles = 6) {
    const map = hexMap
    const max = map.length - 1
    const min = 1
    Array.from({length: numOfTiles}).forEach(i => {
        const num = randNum(min, max)
        const randHex = map[num]
        console.log(num)
        randHex.isTraversable = !randHex.isTraversable
    })
    return map

}