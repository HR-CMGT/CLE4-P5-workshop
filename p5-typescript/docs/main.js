"use strict";
class Ball {
    constructor() {
        this.colors = [color(200, 0, 20), color(10, 40, 160)];
        this.radius = 80;
    }
    update() {
        if (mouseIsPressed) {
            fill(this.colors[0]);
        }
        else {
            fill(this.colors[1]);
        }
        ellipse(mouseX, mouseY, this.radius);
    }
}
class Game {
    constructor() {
        console.log("game created");
        this.ball = new Ball();
    }
    update() {
        this.ball.update();
    }
}
let game;
function preload() {
}
function setup() {
    createCanvas(900, 460);
    game = new Game();
}
function draw() {
    game.update();
}
//# sourceMappingURL=main.js.map