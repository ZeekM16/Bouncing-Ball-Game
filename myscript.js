var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, ballRadius, 0, Math.PI*2, false);
    //arc method takes in parameters, used for making circle
    //false makes circle counter clockwise
    ctx.fillStyle = "red";
    //gives color to ball
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //rect method takes in four parameters
    drawBall() ;
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    // if statements added for collision detection
    x +=dx;
    y +=dy;
}

setInterval(draw, 10);
//creates an infinite loop every 10 milli seconds