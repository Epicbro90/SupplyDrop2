var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1, wall2, bottom;
var wall1body, wall2body, bottombody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	wall1=createSprite(width/2-100,615,10,100);
	wall2=createSprite(width/2+100,615,10,100);
	bottom=createSprite(width/2,655,200,10);
	wall1.shapeColor= "red"
	wall2.shapeColor= "red"
	bottom.shapeColor= "red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor= "white"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 10 , {restitution:1, friction:1, isStatic:true});
	World.add(world, packageBody);
	
	wall1body = Bodies.rectangle(width/2-100 , 615 , 10 , 100, {restitution:0.3, friction:100, isStatic:true});
	World.add(world,wall1body);
	wall2body = Bodies.rectangle(width/2+100 , 615 , 10 , 100, {restitution:0.3, friction:100, isStatic:true});
	World.add(world,wall2body);
	bottombody = Bodies.rectangle(width/2 , 655 , 200 , 10, {restitution:0.3, friction:100, isStatic:true});
	World.add(world,bottombody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



