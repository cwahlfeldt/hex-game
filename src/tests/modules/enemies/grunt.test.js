import test from "ava"
import {point} from "../../../lib/hexagons.js";
import grunt from "../../../modules/enemies/grunt.js";

const defaultGrunt = {
    tileIndex: 0,
    location: point(0, 0),
    health: 1,
    credits: 10,
}

test('can create default grunt', t => {
    t.deepEqual(
        grunt(),
        defaultGrunt
    )
})

test('can change defaults of grunt data', t => {
    t.deepEqual(
        grunt({health: 2}),
        {
            tileIndex: 0,
            location: point(0, 0),
            health: 2,
            credits: 10,
        }
    )
})