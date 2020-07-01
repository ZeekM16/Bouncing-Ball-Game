var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

function draw() {
    ctx.beginPath();
    ctx.arc(220,140,20,0,Math.PI*2,false);
    //arc method takes in parameters, used for making circle
    //false makes circle counter clockwise
    ctx.fillStyle = "red";
    //gives color to ball
    ctx.fill();
    ctx.closePath();

}

setInterval(draw, 10);
//creates an infinite loop every 10 milli seconds