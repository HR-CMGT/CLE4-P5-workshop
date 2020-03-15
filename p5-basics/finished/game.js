class Game {

    constructor(){
        this.gamepad = new P5GamePad()
        document.addEventListener("gamepadbutton0", ()=>this.resetScore())

        this.score = 0
        this.playerX = 500
        this.resetApple()
        this.state = "playing"   // "gameover"

        this.bg = loadImage('images/background_900x460.png')
        this.gameOverBg = loadImage('./images/game-over.png')
        this.apple = loadImage('images/apple.png')
        this.player = loadImage('images/kikker.png')
        this.font = loadFont('fonts/PressStart2P-Regular.ttf');
    }

    resetScore() {
        this.score = 0
    }

    showScore(){
        fill(255)
        textFont(this.font)
        textSize(36)
        text(this.score, 10, 50)
    }

    resetApple() {
        this.appleX = random(width)
        this.appleY = 30
    }

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

    drawGame() {
        this.gamepad.update()
        this.movePlayer()
        this.moveApple()
        
        image(this.bg, 0, 0)
        image(this.apple, this.appleX, this.appleY)
        image(this.player, this.playerX, 255)

        this.showScore()
    }

    drawGameOver() {
        image(this.gameOverBg, 0, 0)
    }

    moveApple() {
        this.appleY+=2
        if(this.appleY > 255 && this.appleX > this.playerX && this.appleX < this.playerX + 150) {
            console.log("you caught an apple!")
            this.score++
            this.resetApple()
        }
        if(this.appleY > height) {
            this.resetApple()
            this.state = "gameover"
        }
    }

    movePlayer() {
        if (keyIsDown(LEFT_ARROW) || this.gamepad.axes[0] == -1) {
            this.playerX -= 5
        }
        if (keyIsDown(RIGHT_ARROW) || this.gamepad.axes[0] == 1) {
            this.playerX += 5
        }
    }
}