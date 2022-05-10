export function getMousePos(ctx, event) {
    const canvas = ctx.canvas
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const transform = ctx.getTransform();
    const invMat = transform.invertSelf();

    return {
        x: x * invMat.a + y * invMat.c + invMat.e,
        y: x * invMat.b + y * invMat.d + invMat.f
    };
}

export function drawCircle(
    ctx,
    x = 0,
    y = 0,
    color = 'black',
    radius = 20,
    strokeWidth = 0
) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    ctx.fillStyle = color
    ctx.fill()
    ctx.lineWidth = strokeWidth
    ctx.strokeStyle = color
    ctx.stroke()
    ctx.closePath()
}
