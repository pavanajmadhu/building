const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(600,480,1200,10)
    
    box1= new Box(700,450)
    box2= new Box(750,450)
    box3= new Box(800,450)
    box4= new Box(850,450)
    box5= new Box(900,450)

    box6= new Box(700,400)
    box7= new Box(750,400)
    box8= new Box(800,400)
    box9= new Box(850,400)
    box10= new Box(900,400)

    box11= new Box(700,350)
    box12= new Box(750,350)
    box13= new Box(800,350)
    box14= new Box(850,350)
    box15= new Box(900,350)

    box16= new Box(700,300)
    box17= new Box(750,300)
    box18= new Box(800,300)
    box19= new Box(850,300)
    box20= new Box(900,300)

    box21= new Box(700,250)
    box22= new Box(750,250)
    box23= new Box(800,250)
    box24= new Box(850,250)
    box25= new Box(900,250)


    ball= new Ball(630,350)

    rope= new Sling(ball.body,{x:630,y:250})




}
function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    rope.display();


    ball.display();

    ground.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}