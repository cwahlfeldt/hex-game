export function getMousePos(ctx, event) {
    const canvas = ctx.canvas
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // needed to account for `ctx.translate(root.width * 0.5, root.height * 0.5)`
    const transform = ctx.getTransform();
    const invMat = transform.invertSelf();

    return {
        x: x * invMat.a + y * invMat.c + invMat.e,
        y: x * invMat.b + y * invMat.d + invMat.f
    };
}
