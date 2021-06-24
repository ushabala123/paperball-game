
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var engine,world
var bin1,bin2,bin3,ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  paperBall= new Paper(200,200,50);
  bin1= new Bin(700,680,100,20)
  bin2=new Bin(650,680,20,100)
  bin3= new Bin(750,680,20,100)
  ground=new Ground(400,690,900,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  paperBall.display()
  bin1.display()
  bin2.display()
  bin3.display()
  ground.display()
  drawSprites();
 
}



