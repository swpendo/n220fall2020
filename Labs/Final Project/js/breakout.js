var ball = { x: 100, y: 100,
    velocityX: 2.5, velocityY: 2.5,
    update: function() {
    noFill();
    stroke(207, 12, 48);
    circle(this.x, this.y, 10);
    this.x += this.velocityX;
    this.y += this.velocityY;
    }
};

var paddle = {
    x: 100, y: 350, w: 150, h: 20,
    update: function() {
    noFill();
    stroke(17, 13, 84);
    rect(this.x, this.y, this.w, this.h);
    if(keyIsDown(LEFT_ARROW)) {
    this.x -= 2.5;
    }
    
    
    if(keyIsDown(RIGHT_ARROW)) {
    this.x += 2.5;
    }
    }
};
    
    
var blocks = [];
    
    for(var i = 0; i < 6; i++) {
    blocks[i] = { x: i * 60, y: 10 };
    }
    
    function setup() {
    createCanvas(400, 400);
    }
    
    function draw() {
    background(250, 250, 250);
    
    ball.update();
    paddle.update();
    
    if(ball.x > 400) {
    ball.x = 400;
    ball.velocityX *= -1;
    }
    
    if(ball.x < 0) {
    ball.x = 0;
    ball.velocityX *= -1;
    }
    
    if(ball.y < 0) {
    ball.y = 0;
    ball.velocityY *= -1;
    }
    
    if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
    ball.velocityY *= -1;
    }
    
    for(var i = 0; i < blocks.length; i++) {
    var b = blocks[i];
    rect(b.x, b.y, 60, 20);
    
    if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
    ball.velocityY *= -1;
    
    //remove block from array
    blocks.splice(i, 1);
    }
    }
    
};
    
function hitTestPoint(px, py, bx, by, bw, bh) {
    
    if(px > bx && px < bx + bw) {
    if(py > by && py < by + bh) {
    return true;
    }
    }
    
    return false;
};