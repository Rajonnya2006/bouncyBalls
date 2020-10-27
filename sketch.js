const Engine = Matter.Engine;//engine is like universe
const World = Matter.World;//world like the Earth inside universe
const Bodies = Matter.Bodies;// bodies are objects on the Earth
var engine1, world1, ground, ball, ball2;



function setup() {
  createCanvas(800,400);
  engine1 = Engine.create();//create engine1
  world1 = engine1.world;//create world1 inside engine1
  var ground_options = {//giving properties to ground
    isStatic:true
  }
  ground = Bodies.rectangle(400,390,400,20, ground_options);//create ground using bodies
  World.add(world1,ground);//after creating ground added to world1
  var ball_options = {
    restitution:0.9
  }
  ball = Bodies.circle(400, 100, 20, ball_options);
  World.add(world1, ball);
  var ball2_options = {
    restitution:0.3
  }
  ball2 = Bodies.circle(500,100,30, ball2_options);
  World.add(world1, ball2);
}

function draw() {
  background(255,255,255); 
 Engine.update(engine1);//start the engine1
 rectMode(CENTER);//make the centre point as x and y
 rect(ground.position.x, ground.position.y, 400, 20);//draw the rectangle for ground
 circle(ball.position.x, ball.position.y, 20);
 circle(ball2.position.x, ball2.position.y, 30);
  drawSprites();
}