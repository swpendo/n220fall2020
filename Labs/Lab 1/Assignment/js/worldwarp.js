let xPos = 0;
let yPos = 300;

let xSpeed = 5;
let ySpeed = 0;

function setup() {
  createCanvas(800, 600);
  noStroke;
}

function draw() {
  background(111, 47, 153);
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  if (xPos > 800) {
    xPos = 0;
  }

  ellipse(xPos, yPos, 66, 66);
}
