let spices = 0;

function draw() {
  spices = spices + 1;
  console.log(spices);
}

let xPos = 0;
let yPos = 40;

let xSpeed = 1;
let ySpeed = 1;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  if (keyIsDown(LEFT_ARROW)) {
    xSpeed = -1;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xSpeed = 1;
  }
  if (keyIsDown(UP_ARROW)) {
    ySpeed = -1;
  }

  if (keyIsDown(DOWN_ARROW)) {
    ySpeed = 1;
  }

  circle(xPos, yPos, 30);
}
