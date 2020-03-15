// plaats je eigen code in game.js

let game

function preload() {

}

function setup() {
    createCanvas(900, 460)
    game = new Game()
}

function draw() {
    game.update()
}