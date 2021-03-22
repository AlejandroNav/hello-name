const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

})
const mouse = {
    x: null,
    y: null,
}
canvas.addEventListener('click', function (event) {
    mouse.x = event.x
    mouse.y = event.y
    drawCircle();
})
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x
    mouse.y = event.y
    drawCircle();
})

function drawCircle() {
    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
    context.fill();
}


class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 6 + 3;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX
        this.y += this.speedy
    }
    draw(){

    }

}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //     drawCicle();
    drawCircle();
    requestAnimationFrame(animate)
    console.log("si funciona");
}
animate();
