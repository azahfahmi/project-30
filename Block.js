class Block {
  constructor(x, y, width, height){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.Visiblity = 255;
  }
  display(){
    if(this.body.speed < 3){
     super.display();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
    }
   }
};
