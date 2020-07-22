var car,wall;
var speed,weight;
var deform;
function setup() {
  createCanvas(1300,400);
  car =createSprite(50, 200, 50, 50);
  wall=createSprite(1300,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255); 
  car.velocityX=speed;
  if(wall.x-car.x<(car.width+wall.width)/2) {
car.velocityX=0;
deform=0.5*weight*speed*speed/22509;
if(deform>180){
  car.shapeColor=color(255,0,0);
}
if(deform<180 && deform>100){
  car.shapeColor=color(230,230,0);
}
if(deform<100){
  car.shapeColor=color(0,255,0);
}
  }
  drawSprites();
}