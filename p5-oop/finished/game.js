class Game {

    constructor(){
        console.log("game created")

        this.player = new Player()

        this.bugs = []
        for(let i = 0;i<100;i++) {
            this.bugs.push(new Bug())
        }
    }

    update(){
        background(50,50,100)
        this.player.update()
        for(let bug of this.bugs) {
            bug.update()
            if(this.checkCircleCollision(bug, this.player)) {
                bug.killed = true
            }
        }

        this.removeKilledBugs()
    }

    checkCircleCollision(bug, player){
        let dx = bug.x - player.x
        let dy = bug.y - player.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        return (distance < bug.radius + player.radius) 
    }

    removeKilledBugs() {
        this.bugs = this.bugs.filter(bug => bug.killed == false)
    }
}