# Code Documentation
Source of original: https://www.openprocessing.org/sketch/430009

This will include an explanation of:
- Classes
- Parameters
- Methods
- The example webpage

## Classes
**Star:** This is the reusable star component. It encapsulates the parameters: speed, hor_speed and color. It encapsulates the methods: Draw and Update. 'this.x, this.y, this.z' determine the starting position of each individual star, the starting positions are randomly allocated. It also encapsulates the colour of each star using rbg sliders.

## Parameters

**Speed:** This is essentially how fast each star moves. The vertical velocity of each star is changed by moving the sliders on the example webpage. The default (minimum) value is 0 while the maximum value is 50.

**hor_speed:** The horizontal velocity of each star. Each horizontal can be changed by moving the sliders on the example webpage. The default (minimum) value is 0 while the maximum value is 50.

**Color:** The color of the stars. Each Star is colored using rbg with a maximum value of 255 for each and a minimum value of 0. Each rbg component can be changed by moving the sliders example webpage.

## Methods
**Update:** This method is what causes the stars to appear to move towards the user through the line `this.z-=speed`. The horizontal velocity is done through `this.x-=hor_speed` When the star reaches the edge of the screen, they are reset to their starting positions:

     
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
            
         
         
            
           
            

**Draw:** This is the draw method.  It makes use of the map function in order to determine the radius of each star (r). Each star is drawn through `ellipse(sx, sy, r, r, color);` 
'sx' and 'sy' are the centres of the stars. 'r' is the radius. 'color' is the color of the star.
