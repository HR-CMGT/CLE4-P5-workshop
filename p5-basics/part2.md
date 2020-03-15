# P5 Workshop Part 2

- Loading and animating images
- Controlling the player
- Checking collision
- Keeping score
- Finishing the game

## Loading and animating images

```javascript
class Game {
    constructor(){
        this.appleX = random(width)
        this.appleY = 30
        this.apple = loadImage('images/apple.png')
    }

    update(){
        background(255)
        this.appleY++
        image(this.apple, this.appleX, this.appleY)
    }
}
```

## Controlling the player

By checking the keyboard input we can adjust the X value of the player character.

```javascript
class Game {

    constructor(){
        this.playerX = 500
        this.player = loadImage('images/kikker.png')
    }

    update(){
        background(255)

        if (keyIsDown(LEFT_ARROW)) {
            this.playerX -= 5
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.playerX += 5
        }
        
        image(this.player, this.playerX, 255)
    }
}
```
> [You can add gamepad support for the Arcade Cabinet with these instructions](../gamepad.md)

## Checking Collision

After combining the above examples, we need to check if the player hits an apple. We can do this by comparing the `x` and `y` coordinates of the apple and the player:

```javascript
update(){
    if(this.appleY > 255 && this.appleX > this.playerX && this.appleX < this.playerX + 150) {
        console.log("you caught an apple!")
    }
}
```
## Displaying the score

Use `loadFont()` to get custom fonts. Then we can use [P5 Typography commands to display text](https://p5js.org/reference/#group-Typography)

```javascript
class Game {
    constructor(){
        this.score = 10
        this.font = loadFont('fonts/PressStart2P-Regular.ttf')
    }
    update(){
        fill(255)
        textFont(this.font)
        textSize(36)
        text(this.score, 10, 50)
    }
}
```

## Game Over Screen

By simplifying your `game.js` update function, you can update and draw different things depending on the state of the game. Now you can change the game state to game over once you miss an apple: `this.state = "gameover"`. This will cause the gameover screen to be shown!

```javascript
class Game {
    constructor(){
        this.state = "playing"
        this.bg = loadImage('./images/background_900x460.png')
        this.gameover = loadImage('./images/game-over.png')
    }
    update(){
        if(this.state == "playing"){
            image(this.bg, 0, 0)
            image(this.apple, this.appleX, this.appleY)
            image(this.player, this.playerX, 255)
        } else if(this.state == "gameover") {
            image(this.gameover, 0, 0)
        }
    }
}

```
## Improving the switching between screens

You can create separate drawing functions for each state, and use the `switch` statement, to make your code more readable. This way, it's easy to add more than two screens:

```javascript
class Game {
    update(){
        switch(this.state) {
        case "playing":
            this.drawGame()
            break;
        case "gameover":
            this.drawGameOver()
            break;
        }
    }
    drawGame(){

    }
    drawGameOver(){
        
    }
}
```

## Finishing the game

Add these features to the apple catching game:

- Show the game over screen after missing 3 apples instead of one.
- Add a start screen
- Drop several apples at the same time using an array
- Each apple has its own falling speed

## What's next?

- [Object Oriented P5](./p5-oop/readme.md)
- [Using a GamePad and the Arcade Cabinet](gamepad.md)

## Finished Code

You can check the finished project, including gamepad support, in the [finished folder](./finished)
