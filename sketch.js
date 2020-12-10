
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,division1,division2,division3,division4,division5,division6,division7;
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12;
var divisionsHeight = 300;
var particles = [];
var plinkos = [];
var value = 0;

function preload()
{
	
}

function setup() {
	createCanvas(428, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(200,690,550,20);
  division1 = new Division(5,557,10,250)
  division2 = new Division(75,557,10,250)
  division3 = new Division(145,557,10,250)
  division4 = new Division(215,557,10,250)
  division5 = new Division(285,557,10,250)
  division6 = new Division(355,557,10,250)
  division7 = new Division(425,557,10,250)
  plinko1 = new Plinko(25,55,20)
  plinko2 = new Plinko(75,55,20)
  plinko3 = new Plinko(125,55,20)
  plinko4 = new Plinko(175,55,20)
  plinko5 = new Plinko(225,55,20)
  plinko6 = new Plinko(275,55,20)
  plinko7 = new Plinko(325,55,20)
  plinko8 = new Plinko(375,55,20)
  plinko9 = new Plinko(25,130,20)
  plinko10 = new Plinko(75,130,20)
  plinko11 = new Plinko(125,130,20)
  plinko12 = new Plinko(175,130,20)
  plinko13 = new Plinko(225,130,20)
  plinko14 = new Plinko(275,130,20)
  plinko15 = new Plinko(325,130,20)
  plinko16 = new Plinko(375,130,20)
  plinko17 = new Plinko(25,205,20)
  plinko18= new Plinko(75,205,20)
  plinko19 = new Plinko(125,205,20)
  plinko20 = new Plinko(175,205,20)
  plinko21 = new Plinko(225,205,20)
  plinko22 = new Plinko(275,205,20)
  plinko23 = new Plinko(325,205,20)
  plinko24 = new Plinko(375,205,20)
  plinko25 = new Plinko(25,280,20)
  plinko26 = new Plinko(75,280,20)
  plinko27 = new Plinko(125,280,20)
  plinko28 = new Plinko(175,280,20)
  plinko29 = new Plinko(225,280,20)
  plinko30 = new Plinko(275,280,20)
  plinko31 = new Plinko(325,280,20)
  plinko32 = new Plinko(375,280,20)
  plinko33 = new Plinko(25,355,20)
  plinko34 = new Plinko(75,355,20)
  plinko35 = new Plinko(125,355,20)
  plinko36 = new Plinko(175,355,20)
  plinko37 = new Plinko(225,355,20)
  plinko38 = new Plinko(275,355,20)
  plinko39 = new Plinko(325,355,20)
  plinko40 = new Plinko(375,355,20)
 
 
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display(); 
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();



 if(frameCount%40 === 0)
 {
   particles.push(new Particles(random(50,380),10,40))
  
 }
 
 for(var j = 0; j<particles.length;j++)
 {
   particles[j].display();
  
 }
  
  drawSprites();
    
    fill(random(0,255),random(0,255),random(0,255));
   
}


function score(){
  if(particles.body.position.x < 300 && particles.body.position.y>500)
  {
     value = value + 500;
  }   
  }



