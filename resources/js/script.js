const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particulMatriz = [];
const colorin = 'LightBlue'

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
})

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x
    mouse.y = event.y
})

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * .2 - .1;
        this.speedY = Math.random() * .4 - .01;
    }
    update() {
        this.x += this.speedX
        this.y += this.speedY
    }
    draw() {
        context.fillStyle = colorin;
        context.strokeStyle = 'red';
        context.lineWidth = 2;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
}

 function init() {
     for (let index = 0; index < 1500; index++) {
         particulMatriz.push(new Particle());
     }

 }
 init();

function handleParticles() {
    for (let i = 0; i < 1500; i++) {
        particulMatriz[i].update();
        particulMatriz[i].draw();
        console.log(particulMatriz[i]);
    }

}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate)
}
animate();
