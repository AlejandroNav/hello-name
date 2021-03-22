const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

})
const mouse = {
    x:null,
    y:null,
}
canvas.addEventListener('click', function (event) {
    mouse.x=event.x
    mouse.y=event.y
    drawCircle(mouse.x,mouse.y);
})
canvas.addEventListener('mousemove', function (event) {
    mouse.x=event.x
    mouse.y=event.y
    drawCircle(mouse.x,mouse.y);
})
function drawCircle(eq,ye) {
context.strokeStyle = 'red';
context.lineWidth = 2;
context.beginPath();
context.arc(eq, ye, 10, 0, Math.PI * 2);
context.stroke();
}
function randomCoord() {
   const x = Math.ceil(Math.random() * 900 +50)
   return x
}

for (let index = 0; index < 40; index++) {
    drawCircle(randomCoord(),randomCoord())
}