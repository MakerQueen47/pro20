var car, wall;
var speed, weight;

var deformation = 0;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random (55, 90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1000,200, 60, height);
  car.velocityX = speed;
  car.shapeColor = "blue";
  wall.shapeColor = "tan";
}

function draw() {
  background("grey");
  
  if((wall.x-car.x) < (wall.width/2 + car.width/2) && (car.x-wall.x) < (wall.width/2 + car.width/2)
  && (wall.y-car.y) < (wall.height/2 + car.height/2) && (car.y-wall.y) < (wall.height/2 + car.height/2)) {

      car.velocityX = 0;

      deformation = ( 0.5 * weight * speed ) / 22500;

      //deformation = 200;

      if(deformation < 100 ){

         car.shapeColor = "green";

      } else if (deformation > 100 && deformation < 180) {

         car.shapeColor = "yellow";

      } else if (deformation > 180) {

         car.shapeColor = "red";
      }
    
  }

  drawSprites();
}