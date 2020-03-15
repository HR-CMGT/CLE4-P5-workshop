class Player {
    constructor() {
        this.x = width / 2
        this.y = height / 2
        this.radius = 8
        this.xspeed = 1
        this.yspeed = 0
    }

    update() {
        this.checkInput()

        this.x += this.xspeed
        this.y += this.yspeed

        fill(255)
        ellipse(this.x, this.y, this.radius, this.radius)
    }

    checkInput() {
        this.xspeed = this.yspeed = 0

        if (keyIsDown(LEFT_ARROW)) {
            this.xspeed = -3
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.xspeed = 3
        }

        if (keyIsDown(UP_ARROW)) {
            this.yspeed = -3
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.yspeed = 3
        }
    }

}