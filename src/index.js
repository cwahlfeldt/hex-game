const root = document.getElementById("game");
const ctx = root.getContext("2d");

root.width = window.innerWidth;
root.height = window.innerHeight;

function render() {
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}

render();
