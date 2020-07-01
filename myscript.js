var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;

function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, false);
    //arc method takes in parameters, used for making circle
    //false makes circle counter clockwise
    ctx.fillStyle = "red";
    //gives color to ball
    ctx.fill();
    ctx.closePath();
    x +=dx;
    y +=dy;

}

setInterval(draw, 10);
//creates an infinite loop every 10 milli seconds