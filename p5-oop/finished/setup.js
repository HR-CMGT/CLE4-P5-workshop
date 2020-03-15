// NOTE
// ONLY USE THIS FILE TO START UP THE GAME 

let game

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    ellipseMode(RADIUS)
    game = new Game()
}

function draw() {
    game.update()
}