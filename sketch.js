var boy, boyanimation
var watermelon
var backgroundreal
var trapfly
var vine




function preload(){
  boyanimation= loadAnimation("boy running 1 reall.png", "boy running 3 reall.png", "boy running 4 reall.png")
  watermelonimage = loadImage("watermelon.png")
  backgroundImg = loadImage("real background.jpg")
  trapflyImg = loadImage("trapfly.png")
  vineImg = loadImage("vine.png")
}

function setup() {
  createCanvas(1540, 900);
  backgroundreal = createSprite(700,450,1,1)
  backgroundreal.addImage(backgroundImg)
  backgroundreal.scale=3
  boy = createSprite(75,550,15,50)
  boy.addAnimation("running", boyanimation)
  watermelon = createSprite(200,100,1,1)
  watermelon.addImage(watermelonimage)
  watermelon.scale=0.2
  trapfly = createSprite(400,650,2,2)
  trapfly.addImage(trapflyImg)
  vine = createSprite(300,0,1,1)
  vine.addImage(vineImg)
  

  
}

function draw() {
 background(1);
 if (keyDown("Up")){
   boy.velocityY=boy.velocityY-0.3
 }
 if (boy.Y<5){
   boy.Y=550
 }
  drawSprites();
    }
  
  
  




  


function spawnObstacles() {
  
   
    }
    
 
  


