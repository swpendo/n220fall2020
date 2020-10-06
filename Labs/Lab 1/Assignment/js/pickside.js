function setup() {
  createCanvas(400, 300);
  noStroke();
}

function draw() {
  background(32, 122, 13);

  if (mouseX < 200) {
    fill(16, 39, 194);
  }

  if (mouseX > 200) {
    fill(194, 33, 16);
  }

  ellipse(mouseX, mouseY, 66, 66);
}
