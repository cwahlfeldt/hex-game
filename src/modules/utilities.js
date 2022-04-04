export function throwError(msg) {
    console.error(msg)
    throw msg
}

export function deepEqual(objA, objB) {
    const ok = Object.keys, typeOfObjA = typeof objA, typeOfObjB = typeof objB;
    return objA && objB && typeOfObjA === 'object' && typeOfObjA === typeOfObjB ? (
        ok(objA).length === ok(objB).length &&
            ok(objA).every(key => deepEqual(objA[key], objB[key]))
    ) : (objA === objB);
}
