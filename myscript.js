var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height -30;
var dx = 2;
var dy = -2;
var paddleHeight = 12;
var paddleWidth = 72;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39){
        rightPressed = true;
    } else if (e.keyCode == 37){
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39){
        rightPressed = false;
    } else if (e.keyCode == 37){
        leftPressed = false;
    }
}
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

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //rect method takes in four parameters
    drawBall() ;
    drawPaddle() ;

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius){
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius){
        if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        }else{
            alert("GAME OVER!!!");
            document.location.reload();
        }
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    // if statements added for collision detection
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX +=7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -=7;
    }
    x +=dx;
    y +=dy;
}

setInterval(draw, 10);
//creates an infinite loop every 10 milli seconds