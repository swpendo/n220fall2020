function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(100);

    //For loop syntax
    for( var i = 0; i < 3; i++) {
        circle(100, 100, i * 30);
    }
    console.log("Afterwards: " + i);
}