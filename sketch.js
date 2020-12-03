var bullet, speed, weight;
var wall,thickness;

var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)

  wall=createSprite(1200,200,thickness,200);

  bullet=createSprite(50,200,50,5);
  
}

function draw() {
  background("black");
  bullet.shapeColor="white";

  if(keyDown("space")){
    bullet.velocityX=speed  
  }

if(hasCollided(bullet,wall)){
  bullet.velocityX=0
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage > 10){
    wall.shapeColor="red";
  }
  if(damage < 10){
    wall.shapeColor="green";
  }
}
  drawSprites();
}
function hasCollided(lbullet,lwallS){

  bulletRightedge = lbullet.x + lbullet.width;
  wallLefttedge = wall.x;

  if(bulletRightedge>=wallLefttedge ){
    return true;
  }
  else{
    return false;
  }
}