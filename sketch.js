var seaImg
var ship 

function preload(){
seaImg = loadImage("sea.png");
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
}

function setup(){
  createCanvas(400,400);
  seaImg = createSprite(380,20,150,400);
  spriteName.addImage(seaImg);


  ship = createSprite(300,200,50,70);
  shipImg1.addAnimetion("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
}

function draw() {
  
drawSprite();

if (scene.x < 0){
  scene.x = scene.width/2;
}
  
  background("blue");
}