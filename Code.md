```

var stars = []

// this sets up the size of the page and generates new stars

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
	  for (var i = 0; i < 400; i++) {
		stars[i] = new Star();
    }
}

// this is the reusable star class. x,y are the positions of each star on the screen. This cannot be changed as they are randomly shown throughout the screen.

class Star {
  constructor(x,y,z) {
			var speed=10
			var hor_speed = 10
			var base_hor_speed=0
			var base_speed=0

		// the starting position of each individual star
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);

		// how each individual star moves down the screen
    this.update = function() {
        this.z -= speed;
				this.x -= hor_speed;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
				if (this.x < 1) {
					  this.z = width;
            this.x = random(-width / 2, width / 2);
            this.y = random(-height / 2, height / 2);
				}

        }
    }
// the process of displaying each star
    this.draw = function() {
  // to increase the speed of the stars, press the mouse buttton
	     if(mouseIsPressed){
         speed+=1

// to stop the movement of each star and reset their speed to their base value, press any key. Ensure that the speed value here and the speed value at the top are equal.
	}
	     if(keyIsPressed){
         speed=base_speed
				 hor_speed=base_hor_speed
	}
        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 16, 0);
				var color = fill(250,50,255);
        ellipse(sx, sy, r, r,color);
      }
    }
}

function draw() {
    fill(0, 100);
    rect(0, 0, width, height);
    translate(width / 2, height / 2);
    fill(200);
    for (var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].draw();
    }
}

```
