
var monkey , monkey_running
var banana ,bananaImage, rock, obstacleImage
var bananaGroup, rockGroup
var score
var ground
var y
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,200);
  monkey = createSprite(26,190,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground = createSprite(250,199,2000,10)
  ground.velocityX = -5;
  bananaGroup = new Group();
  rockGroup = new Group();
  score = 0;
}


function draw() {
  background("white")
  drawSprites();
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY+0.8;
  if(keyDown("SPACE")&&monkey.y>150){
    monkey.velocityY = -15;
  }
  if(ground.x === -250){
    ground.x = 250
  }
  if(frameCount%80 ===0){
    spawnBanana();
    
    y = Math.round(random(5,120));
  }
  if(frameCount%120 ===0){
    spawnRock();
  }
  
 score = score+Math.round(frameRate()/60)
text("Survival Time:"+score,240,10);
}
function spawnBanana(){
  banana = createSprite(520,y,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime = 100;
    banana.velocityX = -6
    bananaGroup.add(banana);
}
function spawnRock(){
    rock = createSprite(520,175,20,20);
    rock.addImage(obstacleImage);
    rock.scale=0.1;
    rock.lifetime = 100;
    rock.velocityX = -6
    rockGroup.add(rock);
}





