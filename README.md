# prog_summative1
**original code from: https://www.openprocessing.org/sketch/398285**

```
var stars = []
var speed = 4;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    for (var i = 0; i < 400; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    fill(0, 100);
    rect(0, 0, width, height);
    translate(width / 2, height / 2);
    fill(255);
    for (var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}

function Star() {
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);

    this.update = function() {
        this.z -= speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
        }
    }

    this.show = function() {
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 16, 0);
        ellipse(sx, sy, r, r);
    }
}

```
