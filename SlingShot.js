class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

      //this.sling1 = load("sprites/sling1.png");
    }

    fly(){
        this.sling.bodyA =null;
    }

    display(){
      //image(this.sling1,50,200);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
           // write stroke() to set the color to red
           stroke(64,224,208)
           // Write line() to draw a line from pointA to pointB
           line(pointA.x-1, pointA.y, pointB.x-5, pointB.y);
           //image(this.sling1.pointA+20,pointA.y-10,10,30);
         pop()
        }
    }
    
}