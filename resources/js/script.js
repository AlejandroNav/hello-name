const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

})
context.fillStyle = 'red';
context.strokeStyle = 'red';
context.lineWidth = 25;
context.beginPath();
context.arc(650, 250, 120, 0, Math.PI * 2);
context.stroke();

