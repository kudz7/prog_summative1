```

// this is the reusable star class. x,y are the positions of each star on the screen. This cannot be changed as they are randomly shown throughout the screen.

class Star {
  constructor(x,y,z) {


		// the starting position of each individual star
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);

		// how each individual star moves down the screen
    this.update = function() {
			var speed = vslider.value();
			var hor_speed = hslider.value();
			var base_hor_speed=0
			var base_speed=0
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
// to stop the movement of each star and reset their speed to their base value, press any key. Ensure that the speed value here and the speed value at the top are equal.

        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 16, 0);
				var color = fill(redSlider.value(),greenSlider.value(),blueSlider.value());
        ellipse(sx, sy, r, r,color);
      }
	}

}

var stars = []


// this sets up the size of the page and generates new stars

function setup() {
    var canvas=createCanvas(windowWidth/4, 300);
    canvas.parent('sketch-holder');
    background(0);
    noStroke();
		vslider = createSlider(0, 50, 0);
    vslider.parent('sketch-holder');
    vslider.position(410, 50);
    hslider = createSlider(0,50,0);
    hslider.parent('sketch-holder');
    hslider.position(410, 100);
    redSlider = createSlider(0, 255, 255);
    redSlider.parent('sketch-holder');
    redSlider.position(410, 150);
    greenSlider = createSlider(0, 255, 255);
    greenSlider.parent('sketch-holder');
    greenSlider.position(410, 200);
    blueSlider = createSlider(0, 255, 255);
    blueSlider.parent('sketch-holder');
    blueSlider.position(410, 250);
	  for (var i = 0; i < 400; i++) {
		stars[i] = new Star();
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
    }}


```
