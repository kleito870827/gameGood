// Enemies our player must avoid

class Enemy {
    constructor (x,y, speed) {
    // Variables applied to each of our instances go here,
    this.x=x;
    this.y=y;
    this.speed=speed;
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses

    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}
update(dt) {
  this.x += this.speed *dt;
  if (this.x > 505){
    this.x = 0;
    this.newSpeed();
  }
}
newSpeed () {
  this.speed = Math.random()*2+200 ;
  this.y = 50 + Math.random() * 200;
}
render () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
}

class Goal {
  constructor (x, speed){
    this.x = x;
    this.speed = speed;
    this.sprite = 'images/Selector.png';
  }
  update () {
 this.x += this.speed;
    if (this.x >= 400){
   this.speed *= -1;
 }else if (this.x <= 0){
   this.speed *= -1;
 }



  }
  render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, -40);
  }
}

// Now write your own player class
class Player {
  constructor (x,y){
    this.x=x;
    this.y=y;
    this.sprite='images/char-boy.png';
  }
  update () {
    if (this.x > 400) this.x=400;
    if (this.x < 0) this.x=0;
    if (this.y > 400) this.y=400;
    if (this.y < 0){
      this.sprite='images/char-cat-girl.png';
      this.x = 200;
      this.y = 400;
      allEnemies.push(new Enemy(100, 100, 400 + 5));
    }
    for (var i = 0; i < 3; i++) {
      if (this.checkCollisions(allEnemies[i])){
        this.x=200;
        this.y=400;
        this.sprite = 'images/char-boy.png';
        if (allEnemies.length > 3){
            allEnemies.pop();
        }
      }
    }
  }
  checkCollisions (enemy) {
    if (this.x+80 > enemy.x+10 && this.x+80 < enemy.x+100 && this.y+10 < enemy.y+80 && this.y+10 > enemy.y+10 ){
      return true;
    }else if (this.x+10 > enemy.x+10 && this.x+10 < enemy.x+100 && this.y+10 < enemy.y+30 && this.y+10 >enemy.y+100 ){
      return true;
    }else if (this.x+30 > enemy.x+10 && this.x+30 < enemy.x+100 && this.y+70 < enemy.y+100 && this.y+70 >enemy.y ){
      return true;
    }else if (this.x+70 > enemy.x+10 && this.x+70 < enemy.x+100 && this.y+70 < enemy.y+100 && this.y+70 >enemy.y ){
      return true;
    }else return false;
  }
  render () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput(f) {
    if(f == 'left') this.x -= 100;
    if(f == 'up') this.y -= 100;
    if(f == 'right') this.x += 100;
    if(f == 'down') this.y += 100;
  }
}




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
