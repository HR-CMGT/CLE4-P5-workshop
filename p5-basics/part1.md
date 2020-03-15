
# P5 Workshop Part 1

- Setting up our Game
- What is P5?

## Setting up our Game

For **CLE 4 - Games** we will work with P5 in an Object-Oriented way.  First, download the zip and copy the `./p5-basics/start/` folder only to your working directory.

We will start by adding code to the `Game class`. The `constructor` function is called automatically when the game is created. The `update` function is called every frame. 

Use `this` for calling your own variables and functions.

```javascript
class Game {
    constructor() {
        this.score = 0
        console.log(`Creating the game`)
    }
    update(){
        this.score++
        console.log(`Your score is now ${this.score}`)
    }
}
```

## What is P5?

P5.js is a small library that makes drawing and animating Javascript games simpler. [The reference gives you many shortcuts to handy functionality](https://p5js.org/reference/). The most important keywords:

```javascript
background(255)                 // color the background white
fill(255,0,0)                   // the fill color of the next shape
stroke(0,255,0)                 // the stroke color of the next shape
rect(0,0,100,100)               // draw a rectangle at 0,0, width 100, height 100
ellipse(0,0,100,100)            // draw a circle at 0,0, width 100, height 100
fullscreen(true)                // set the game to fullscreen mode
width, height                   // the width and height of the screen
mouseX, mouseY                  // the x and y position of the mouse
mousePressed                    // true or false, if the mouse is pressed or not
keyPressed()                    // check when a key is pressed
apple = loadImage("apple.png")  // load an image
image(apple, 0, 0)              // show the loaded image at 0,0
```

## Using P5 in our game

In the following example, we draw the circle at the mouse position, and change the color when the mouse button is pressed.

```javascript
class Game {
    constructor() {
    }
    update(){
        if (mouseIsPressed) {
            fill(0,20,20)
        } else {
            fill(255,20,20)
        }
        ellipse(mouseX, mouseY, 80, 80);
    }
}
```
In the next example, we draw a circle, and let the circle move to the right by updating the x variable. When the circle leaves the screen, we reset the `x` variable.

```javascript
class Game {
    constructor() {
        this.x = 0
    }
    update(){
        this.x++
        if(this.x > width) {
            this.x = 0
        }
        ellipse(this.x, 100, 20, 20)
    }
}
```
And finally, we replace the circle with an image:

```javascript
class Game {
    constructor() {
        this.apple = loadImage("./p5-basics/images/apple.png")
        this.x = 0
    }
    update(){
        this.x++
        if(this.x > width) {
            this.x = 0
        }
        image(this.apple, this.x, 20)
    }
}
```
> [In Part 2, we will add images, animation and controls](part2.md)