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

export function uuid() {
    return random().toString(36).slice(-6)
}