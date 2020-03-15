# Using the GamePad 🎮 🕹

For the arcade cabinet, we need gamepad support. Load the gamepad script in `index.html`.

```html
<script src="gamepad.js">
```

In your game, include the following code. Then connect a PS4/XBox controller to your laptop.

```javascript
class Game {
    constructor(){
        this.gamepad = new P5GamePad()
    }
    update(){
        this.gamepad.update()
    }
}
```
## GamePad movement

You can read the X direction of the controller joystick with `axes[0]` and the Y direction with `axes[1]`.

```javascript
class Game {
    update(){
        if(this.gamepad.axes[0] == -1) {
            this.playerX -= 5
        }
        if(this.gamepad.axes[0] == 1) {
            this.playerX += 5
        }
    }
}
```
## GamePad buttons

You can use `addEventListener` to listen for button presses. `gamepadbutton0` is the X button on the PS4 controller.

```javascript
class Game {
    constructor(){
        this.gamepad = new P5GamePad()
        document.addEventListener("gamepadbutton0", ()=>this.resetScore())
    }
    resetScore(){
        console.log("Button 0 was pressed")
    }
}
```
If you want to know the index number of the other buttons without guessing, you can uncomment this line in [gamepad.js](https://github.com/HR-CMGT/CLE4-P5-workshop/blob/master/p5-basics/start/gamepad.js)
```javascript
// console.log("gamepadbutton" + index)
```
