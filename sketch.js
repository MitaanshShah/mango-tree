
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1, mango2, mango3, mango4, mango5;
var ground, tree;
var world;

function preload()
{
	green = loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	tree = Bodies.rectangle(900, 450, 10,10);
	World.add(world, tree);

	Engine.run(engine);

	tree = createSprite(900, 450, 10, 10)
	tree.addImage(green)
	
	ground = new Ground(600, height, 1400, 20);
	mango1 = new Mango(300, 450, 50, 50);
	mango2 = new Mango(400, 450, 50, 50);
	mango3 = new Mango(500, 450, 50, 50);
	mango4 = new Mango(600, 450, 50, 50);
	mango5 = new Mango(700, 450, 50, 50);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Matter.Body.scale(tree, 1, 1)

  drawSprites();
 
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}



