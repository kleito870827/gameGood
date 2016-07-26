export default class Goal {
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
