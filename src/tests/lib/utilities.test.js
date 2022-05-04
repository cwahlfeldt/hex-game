import test from 'ava'
import {deepEqual} from '../../lib/utilities.js'

test(`does deep equal util work`, t => {
    t.truthy(deepEqual({x: 1}, {x: 1}))
    t.truthy(deepEqual(
        {x: {y: {arr: [1,2,3]}}},
        {x: {y: {arr: [1,2,3]}}}
    ))
})