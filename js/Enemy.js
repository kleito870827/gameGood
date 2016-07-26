export default class Enemy {
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
