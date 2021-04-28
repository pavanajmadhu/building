class Sling{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB
        }
this.body=Matter.Constraint .create(options) 
this.pointB=pointB
World.add(world,this.body)
    }

    display(){
        var posA=this.body.bodyA.position
        var pointB=this.pointB
   line(posA.x,posA.y,pointB.x,pointB.y)
    }
}