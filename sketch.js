
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var boy;
var stone;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var tree;
var ground
var slingshot;

function preload(){
	boy = loadImage("boy.png");
	stone = loadImage("stone.png");
	mango1 = loadImage("mango.png");
	mango2 = loadImage("mango.png");
	mango3 = loadImage("mango.png");
	mango4 = loadImage("mango.png");
	mango5 = loadImage("mango.png");
	tree = loadImage("tree.png");
	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	slingshot = new Slingshot(150,160);
	ground = new Ground(-549, 400, 1500, 600);
	stone = new Stone(150,160);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



