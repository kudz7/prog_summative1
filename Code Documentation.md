# Code Documentation
Source of original: https://www.openprocessing.org/sketch/430009

This will include an explanation of:
- Classes
- Parameters
- Methods
- The example webpage

## Classes
**Star:** This is the reusable star component. It encapsulates the parameters: Base_Speed, Speed and Color. It encapsulates the methods: Draw and Update. 'this.x, this.y, this.z' determine the starting position of each individual star, the starting positions are randomly allocated.

## Parameters
**Base_Speed:** The default speed the stars go to once a key is pressed.

**Speed:** This is essentially how fast each star moves. At the beginning of the code, you can set a 'default' speed for this variable.In order to make the code more interactive, I have included an if statement from pressing the mouse. By holding the mouse down, the speed of each star is increased. If you want the speed to be reset to its 'reset value', simply press any key. A negative speed value makes the stars move backwards. 

**hor_speed:** The horizontal velocity of each star.

**base_hor_speed:** the default horizontal velocty of each star once a key is pressed.

**Color:** The color of the stars. Each Star is colored using rbg with a maximum value of 255 for each.

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
            
         
         
            
           
            

**Draw:** This is the draw method. This is where you can increase the speed of the stars by holding down the mouse button and reset the stars to their base speed by pressing any key. The only parameter in this method that needs to be changed is the color parameter. It makes use of the map function in order to determine the radius of each star (r). Each star is drawn through `ellipse(sx, sy, r, r, color);` 
'sx' and 'sy' are the centres of the stars. 'r' is the radius. 'color' is the color of the star.
