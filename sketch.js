const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, paper;
var bin1,bin2,bin3;

function setup(){
    var canvas = createCanvas(600,200);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

	ground = Bodies.rectangle(400,200,800,15,ground_options);
	
	World.add(world,ground);
	
	

    var paper_options ={
		
		'restitution': 0.3,
		'friction':0.5,
		'density':1.2
		
    }

	paper = Bodies.circle(30,182.5,10, paper_options);
	World.add(world,paper);
	
	bin1 = Bodies.rectangle(400,160,10,50)
	World.add(world, bin1);
	
    bin2 = Bodies.rectangle(450,185,90,10)
	World.add(world, bin2);
	
	bin3 = Bodies.rectangle(500,160,10,50)
	World.add(world, bin3);
	

   
}

function draw(){
	background(0);

   

    Engine.update(engine);
    rectMode(CENTER);
	rect(ground.position.x,200,800,15);

	rect(400,160,10,50);

	rect(450,185,90,10);

	rect(500,160,10,50);
	

    ellipseMode(RADIUS);
	ellipse(paper.position.x, paper.position.y, 10, 10);

	keyPressed();
	
}

function keyPressed(){
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}
}                                                                                