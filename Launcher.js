class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB= pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(body){
        this.rope.bodyA = body;
     }
    display() {
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight (10);
        push ();
        stroke ("blue");
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        pop ();
        }
    }
    
}
