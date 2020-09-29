var monkey, ground, monkey_running, invisibleGround;
var banana,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var survivalTime = 0;
var score = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = new Group();
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  survivalTime = 0;
  score = 0;
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
}

function draw() {
  background("white");
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.collide(invisibleGround);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(windowWidth,windowHeight - 35,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.lifetime = windowWidth/banana.velocityX;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(windowWidth,windowHeight - 35,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = windowWidth/obstacle.velocityX
  }
}