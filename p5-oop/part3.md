# Object Oriented P5

- Working with classes
- Working with arrays
- Collisions
- Removing items

First, copy the files from the `./start` folder.

To avoid having lots of code in our `game.js` file, we will create functionality in separate files. Add the Player and Bug files to `index.html` before the game file.

```html
<script src="player.js"></script>
<script src="bug.js"></script>
```
Now, you can use the `Player` and `Bug` classes in `game.js`. Create instances with the `new` keyword. Don't forget to call the `update` methods!

```javascript
class Game {
    constructor(){
        this.player = new Player()
        this.bug = new Bug()
    }

    update(){
        this.player.update()
        this.bug.update()
    }
}
```

## Creating 100 bugs

You can store multiple bugs in an array:

```javascript
class Game {
    constructor(){
        this.bugs = []
        for(let i = 0;i<100;i++) {
            this.bugs.push(new Bug())
        }
    }

    update(){
        for(let bug of this.bugs) {
            bug.update()
        }
    }
}
```

## Checking collisions

Because all our objects are circles, we can use this circle collision formula to see if a bug hits the player:

```javascript
class Game {
    update(){
        for(let bug of this.bugs) {
            bug.update()
            if(this.checkCollision(bug, this.player)) {
                console.log("this bug is hit!")
            }
        }
    }
    // circle collision formula
    checkCircleCollision(bug, player){
        let dx = bug.x - player.x
        let dy = bug.y - player.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        return (distance < bug.radius + player.radius)
    }
}

```

[You can find the code for rectangular collisions on the MDN site](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)

## Removing bugs from the array

When we collide with a bug, we want to remove it from the game. But there's a small problem:

> It's never a good idea to modify an array while you are still looping through it.

So, when looping through the bugs array, we will only set a variable to remember if it has to be removed or not:

```javascript
for(let bug of this.bugs) {
    bug.update()
    if(this.checkCollision(bug, this.player)) {
        bug.killed = true
    }
}
```
After the loop has finished, we use `filter` to keep only the living bugs in the array:
```javascript
this.bugs = this.bugs.filter(bug => bug.killed == false)
```
