

// this is the reusable star class. x,y are the positions of each star on the screen. This cannot be changed as they are randomly shown throughout the screen.

class Star {
  constructor(x,y,z) {


		// the starting position of each individual star
    this.x = random(-width / 2, width / 2);
    this.y = random(-height / 2, height / 2);
    this.z = random(width);
  }

		// how each individual star moves down the screen
    update(){
		  var speed = 0
			var hor_speed = 0
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
    draw(){
// to stop the movement of each star and reset their speed to their base value, press any key. Ensure that the speed value here and the speed value at the top are equal.

        var sx = map(this.x / this.z, 0, 1, 0, width);
        var sy = map(this.y / this.z, 0, 1, 0, height);
        var r = map(this.z, 0, width, 16, 0);
        var red = 255;
        var green = 255;
        var blue = 255;
				var color = fill(red, green, blue);
        ellipse(sx, sy, r, r,color);

	}

}
