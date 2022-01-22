var oceanImg, purpleocean;
var btsImg, bts, btsGroup;
var haterImg, hater, hatersGroup;
var army, armyImg;
var heart = 0;
var gameState = "play";

function preload(){
    oceanImg = loadImage("background.jpg");
    btsImg = loadImage("bts.png");
    haterImg = loadImage("hater.png");
    armyImg = loadImage("army.png");
}

function setup() {
    createCanvas(600, 600);
    purpleocean = createSprite(300,300);
    purpleocean.addImage("purpleocean",oceanImg);
    purpleocean.velocityY = 1;
    btsGroup = new Group();
    hatersGroup = new Group();
    army=createSprite(200,200,50,50);
    army.addImage(armyImg);
    army.scale = 0.5;
}

function draw() {
  background(200);
  if(gameState==="play"){
    if(purpleocean.y > 400){
      purpleocean.y = 300;
    }
    if(keyDown("space")){
      army.velocityY = -5;
        }
    if(keyDown("left_arrow")){
      army.x = army.x-3;
    }    
    if(keyDown("right_arrow")){
      army.x = army.x+3;
    }
    if (btsGroup.isTouching(army)) {
      btsGroup.destroyEach();
      heart = heart+5;
     }
    if(hatersGroup.isTouching(army)){
      army.destroy();
      gameState="end";
    }
    army.velocityY = army.velocityY+0.8;
    
   
    
    spawnBts();
    drawSprites();
    }
    if(gameState==="end"){
    fill("Yellow");
    textSize(30);
    text("Game Over",230,250);
    
    army.destroy();
    hatersGroup.destroyEach();
    btsGroup.destroyEach();
    
    army.velocityY = 0;
    hatersGroup.setVelocityYEach(0);
    btsGroup.setVelocityYEach(0);
    
}
  textSize(20);
  fill(255);
  text("Hearts: "+ heart,width-150,30);
 }
  

function spawnBts() {
  if(frameCount%240===0){
    var bts = createSprite(200,50);
    bts.addImage(btsImg);
    bts.x= Math.round(random(300,400));
    bts.velocityY = 1;
    bts.lifeTime = 800;
    bts.scale = 0.3;
    btsGroup.add(bts); 
    
    var hater = createSprite(100,-15);
    hater.addImage(haterImg);
    hater.x = Math.round(random(50,200));
    hater.velocityY = 1;
    hater.lifeTime = 800;
    hater.scale = 0.3;
    hatersGroup.add(hater);
    
    army.depth = bts.depth;
    army.depth = bts.depth+1;
  }
}
