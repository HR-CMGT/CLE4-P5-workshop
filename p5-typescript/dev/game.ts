class Game {
    private ball:Ball
    constructor(){
        console.log("game created")
        this.ball = new Ball()
    }

    public update(){
        this.ball.update()
    }
}