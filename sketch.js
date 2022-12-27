
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var leftSide,rightSide,ground;
var world,engine


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(400,690,800,20);
	leftSide = new Ground(500,620,15,120);
	rightSide = new Ground(650,620,15,120);

	var ball_options ={
        
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 2
		
	}

	ball = Bodies.circle(200,500,20,ball_options)
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  Engine.update(engine);

  ground.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x,ball.position.y,20)

  
  
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
		
	}
}

