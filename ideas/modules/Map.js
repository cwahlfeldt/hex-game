import {hexShapedGrid} from "../../src/lib/hexagons.js";
import {randomizeMap} from "../../src/modules/tileMap.js";

const Map = (map) => ({
    create: (size) => {
        Map(() => {
            // hexShapedGrid(size).map(() => )
        })
    },
    randomize: (amount) => Map(randomizeMap(map, amount)),
    result: () => map,
})