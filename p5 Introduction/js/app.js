function setup() {
  var red = "#FF0000";
  var startX = 30;

  createCanvas(800, 600);
  noStroke();

  background(red);

  fill(111, 208, 232);
  rect(startX, 60, 300, 150);

  fill(red);
  circle(100, 100, 30);

  stroke(2);
  line(startX, 500, 200, 20);
}
