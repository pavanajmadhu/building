class Ball{
    constructor(x,y){
      var options={
      restitution:0.5,
      density:1,
      friction:1
  
      }
    this.body=Bodies.circle(x,y,30,options)
    
    World.add(world,this.body)
    }
  
  
    display(){
      push()
      var pos=this.body.position
      fill("black")
     stroke("red")
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      
    ellipseMode(RADIUS)
    ellipse(0,0,30,30);
    pop();
    }
  }