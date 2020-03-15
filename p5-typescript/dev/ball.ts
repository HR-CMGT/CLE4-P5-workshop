class Ball {

    private colors = [color(200, 0, 20), color(10, 40, 160)]
    private radius = 80

    constructor(){

    }
    
    public update(){
        if (mouseIsPressed) {
            fill(this.colors[0])
        } else {
            fill(this.colors[1])
        }
        ellipse(mouseX, mouseY, this.radius)
    }
}