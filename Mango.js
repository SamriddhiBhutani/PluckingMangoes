class Mango {
    constructor(x,y){
        var options = {
       isStatic: true,
       restitution: 0,
       friction: 1,
        }
        this.body = Bodies.rectangle(x,y,70,90,options);
        this.width = 70 ;
        this.height = 90;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}