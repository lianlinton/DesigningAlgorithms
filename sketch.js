var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}

/*
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -4;
  fixedRect.velocityY = 4;
}

function draw() {
  background(0, 0, 0);
  bounceOff(movingRect, fixedRect);
  drawSprites();
}


function bounceOff(object1, object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x - object1.x < object1.width/2 + object2.width/2){
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  } 
  if (object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y - object1.y < object1.height/2 + object2.height/2){
    object1.velocityY = object1.velocitY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }  
}

if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.velocityX = movingRect.velocityX * (-2);
    fixedRect.velocityX = fixedRect.velocityX * (-2);
} 
if (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-2);
    fixedRect.velocityY = fixedRect.velocityY * (-2);
  }
*/