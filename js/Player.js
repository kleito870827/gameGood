import Enemy from './Enemy.js'
import {allEnemies} from './app.js'
export default class Player {
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
