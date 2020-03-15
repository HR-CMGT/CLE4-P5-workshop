// plaats je eigen code in game.js

let game:Game

function preload() {

}

function setup() {
    createCanvas(900, 460)
    game = new Game()
}

function draw() {
    game.update()
}