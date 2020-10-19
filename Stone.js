class Stone {
    constructor(x,y){
     var options = {
        'restitution': 1,
        'friction': 1,
        'density': 1.2,
     }
     this.body = Bodies.rectangle(x,y,50,70,options);
     this.width = 50;
     this.height = 70;
     this.x = mouseX;
     this.y = mouseY;
     this.image = loadImage("stone.png");
     World.add(world,this.body);
    }
    display(){
      push ();
      translate(this.body.position.x,this.body.position.y);
      imageMode (CENTER);
      image (this.image,0,0,this.width,this.height);
      pop ();    
    }
}