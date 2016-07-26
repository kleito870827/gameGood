// Enemies our player must avoid
import Enemy from './Enemy.js';
import Player from './Player.js';
import Goal from './Goal.js';
import Engine from './engine.js';

// Now write your own player class




// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(200,400);
var allEnemies = [new Enemy(100,100,400), new Enemy(100,150,300), new Enemy(100,200,200)];
var goal = new Goal(0, 2);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
export {goal};
export {allEnemies};
Engine (window, player);
