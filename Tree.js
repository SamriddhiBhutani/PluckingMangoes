class Tree{
    constructor(x,y) {
        var options = {
           isStatic: true,
       }
      this.body = Bodies.rectangle(x,y,430,500,options);
      this.width = 430;
      this.height = 500;
      this.image = loadImage("tree.png");
      World.add(world,this.body);
    }

    display(){
       var pos = this.body.position;
       imageMode (CENTER);
       image(this.image,pos.x,pos.y,this.width,this.height);
    }
}
