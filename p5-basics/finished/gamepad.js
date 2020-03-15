class P5GamePad {

    // simple singleplayer gamepad
    constructor() {
        this.axes = [0,0]
        this.previousGamepad = {buttons:[]}
        window.addEventListener("gamepadconnected", (e)=>this.connect(e))
        window.addEventListener("gamepaddisconnected", (e)=>this.disconnect(e))
    }

    connect(evt){
        this.controller = evt.gamepad
        console.log('Gamepad connected.')
    }

    disconnect(){
        this.controller = undefined
        console.log('Gamepad disconnected.')
    }

    // get the current status
    update() {
        if(this.controller) {
            let pad = navigator.getGamepads()[this.controller.index]
            if (pad) this.checkButtons(pad) 
        }
    }

    // ps4 controller: connect bluetooth door ps button+share button 8 sec in te drukken
    checkButtons(gamepad) {
        for (let index = 0; index < gamepad.buttons.length; index++) {
            if (this.buttonPressed(gamepad.buttons[index]) && !this.buttonPressed(this.previousGamepad.buttons[index])) {
                // console.log("gamepadbutton" + index)
                document.dispatchEvent(new Event("gamepadbutton"+index))
            }
            // let op, deze code is alleen voor het arcade cabinet, om te zorgen dat BUTTON 8 en BUTTON 9 samen terug naar het menu gaan
            if (this.buttonPressed(gamepad.buttons[8]) && 
                this.buttonPressed(gamepad.buttons[9]) &&
                (!this.buttonPressed(this.previousGamepad.buttons[8]) ||  !this.buttonPressed(this.previousGamepad.buttons[9]))) {
                    document.dispatchEvent(new Event('redirect'))
            }
        }

        // afronden voor arcade cabinet joystick - kan alleen 0 of 1 zijn
        this.axes[0] = Math.round(gamepad.axes[0])
        this.axes[1] = Math.round(gamepad.axes[1])

        this.previousGamepad = gamepad
    }

    // helper function for different browsers
    buttonPressed(b) {
        if (typeof (b) == "object") {
            return b.pressed
        }
        return b == 1
    }
}