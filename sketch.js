


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(600,height,1200,30)

	left= new Dustbin(690,610,20,150) 
	right= new Dustbin(910,610,20,150)

	bottom= new Dustbin(800,675,200,20);


	paper= new Paper(200,400,20)

	Engine.run(engine)
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	ground.display()
  
	left.display();
	right.display();
	bottom.display();

	paper.display();

}

function keyPressed(){
	if(keyCode=== 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75 ,y:-60 })
	}
}



