function drawHexagon(ctx, hex) {
    const {corners, isTraversable} = hex
    ctx.moveTo(0, 0)
    ctx.beginPath();
    corners.forEach(corner => {
        ctx.lineTo(corner.x, corner.y)
    })
    ctx.lineTo(corners[0].x, corners[0].y)

    ctx.lineWidth = 6
    ctx.strokeStyle = '#3f3f3f'
    ctx.stroke()

    ctx.fillStyle = 'rgba(42, 160, 216, .2)'
    if (isTraversable)
        ctx.fillStyle = hex.color
    ctx.fill()
    ctx.closePath()
}

export default function Map(ctx, map) {
    map.forEach(hex => {
        drawHexagon(ctx, hex)
    })
}