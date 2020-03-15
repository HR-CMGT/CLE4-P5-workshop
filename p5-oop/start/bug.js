class Bug {
    constructor() {
        this.x = random(width)
        this.y = random(height)
        this.radius = random(2, 30)
        this.speed = 1
        this.killed = false
    }

    update() {
        this.x += random(-this.speed, this.speed)
        this.y += random(-this.speed, this.speed)

        fill(80,80,160)
        ellipse(this.x, this.y, this.radius, this.radius)
    }
}