const {round, abs, random} = Math;

export function throwError(msg) {
    console.error(msg)
    throw msg
}

export function deepEqual(objA, objB) {
    const ok = Object.keys, typeOfObjA = typeof objA, typeOfObjB = typeof objB;
    return objA && objB && typeOfObjA === 'object' && typeOfObjA === typeOfObjB ? (
        ok(objA).length === ok(objB).length &&
            ok(objA).every(key => deepEqual(objA[key], objB[key]))
    ) : (objA === objB)
}

export function roundCubeCoords(qq, rr, ss) {
    let q = round(qq)
    let r = round(rr)
    let s = round(ss)

    let qDiff = abs(q - qq)
    let rDiff = abs(r - rr)
    let sDiff = abs(s - ss)

    if (qDiff > rDiff && qDiff > sDiff) {
        q = -r - s
    } else if (rDiff > sDiff) {
        r = -q-s
    } else {
        s = -q-r
    }

    if (q === -0) q = 0
    if (r === -0) r = 0
    if (s === -0) s = 0

    return {q, r, s}
}

export function lerp(a, b, t) {
    return a * (1-t) + b * t
}

export function randNum(min, max) {
    return round(random() * (max - min) + min)
}

const alphabetArray = ('abcdefghijklmnopqrstuvwxyz').split('')
export function alphabeticalKeys(arr) {
    const alphabetLength = alphabetArray.length
    let keyAmt = 1
    let j = 0
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && i % alphabetLength === 0) {
            keyAmt++
            j = 0
        }
        let key = Array.from({length: keyAmt})
            .map(() => alphabetArray[j])
            .join('')
        Object.assign(obj, {[key]: arr[i]})
        j++
    }
    return obj
}
const EPSILON = Number.EPSILON;
function clamp (value, min, max) {
    return min < max
        ? (value < min ? min : value > max ? max : value)
        : (value < max ? max : value > min ? min : value);
}
function inverseLerp (min, max, t) {
    if (Math.abs(min - max) < EPSILON) return 0;
    else return (t - min) / (max - min);
}

function smoothstep (min, max, t) {
    const x = clamp(inverseLerp(min, max, t), 0, 1);
    return x * x * (3 - 2 * x);
}

export class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }

    peek() {
        return this.elements[this.head];
    }

    get length() {
        return this.tail - this.head;
    }

    get isEmpty() {
        return this.length === 0;
    }
}

// vector<Hex> hex_linedraw(Hex a, Hex b) {
//     int N = hex_distance(a, b);
//     FractionalHex a_nudge(a.q + 1e-6, a.r + 1e-6, a.s - 2e-6);
//     FractionalHex b_nudge(b.q + 1e-6, b.r + 1e-6, b.s - 2e-6);
//     vector<Hex> results = {};
//     double step = 1.0 / max(N, 1);
//     for (int i = 0; i <= N; i++) {
//         results.push_back(
//             hex_round(hex_lerp(a_nudge, b_nudge, step * i)));
//     }
//     return results;
// }