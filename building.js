class Box{
  constructor(x,y){
    var options={
    restitution:0.5,
    density:1,
    friction:1

    }
  this.body=Bodies.rectangle(x,y,50,50,options)
  
  World.add(world,this.body)
  }


  display(){
    push()
    var pos=this.body.position
    fill("red")
   stroke("red")
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    
  rectMode(CENTER)
  rect(0,0,50,50);
  pop();
  }
}