
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, tree, stone, mango1, ground, catapult;

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	boy = new Boy(200,400);
	tree = new Tree(780,250);
	mango1 = new Mango(810,65);
	mango2 = new Mango(700,120);
	mango3 = new Mango(870,120);
	mango4 = new Mango(950,180);
	mango5 = new Mango(630,200);
	mango6 = new Mango(720,220);
	mango7 = new Mango(780,170);
	mango8 = new Mango(850,230);
	stone = new Stone(100,300);
	catapult = new Launcher(stone.body,{x:140,y:340});
	
	Engine.run(engine);
	Engine.update(engine);
 }

function draw() {
  background(0);
  
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  catapult.display();

  drawSprites();
 }

 function mouseDragged(){
	 Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
 }

 function mouseReleased(){
	 catapult.fly();
 }

function keyPressed (){
	if(keyCode === 32){
	Matter.Body.setPosition(stone.body,{x:100,y:300});
	catapult.attach(stone.body)
	}
}

function detectCollision(stone,mango){
	mangoPos = mango.body.position;
	stonePos = stone.body.position;

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	if(distance<=mango.w+stone.w) {
		Matter.Body.setStatic = false;
	}
}