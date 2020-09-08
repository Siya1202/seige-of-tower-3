const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground1;
var hexagon1;
var slingshot;
var engine,world;
var score = 0;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);

  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 =new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,195,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);
  hexagon1 = new Hexagon(100,100)
  slingshot = new SlingShot(hexagon1.body,{x:100, y:200});

  ground1 = new Ground(355,270,400,5);
}

function draw() {
  background(0); 

  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

  Engine.update(engine);

  box1.display();
  box1.score();

  box2.display();
  box2.score();

  box3.display();
  box3.score();

  box4.display();
  box4.score();

  box5.display();
  box5.score();

  box6.display();
  box6.score();

  box7.display();
  box7.score();

  box8.display();
  box8.score();

  box9.display();
  box9.score();

  box10.display();
  box10.score();

  box11.display();
  box11.score();

  box12.display();
  box12.score();

  box13.display();
  box13.score();

  box14.display();
  box14.score();

  box15.display();
  box15.score();

  box16.display();
  box16.score();
  
  ground1.display();
  hexagon1.display();
  slingshot.display();
  
  drawSprites();
}

function mouseDragged(){
  
      Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(hexagon1.body);
  }
}