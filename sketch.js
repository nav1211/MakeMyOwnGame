// make the player jump properly
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0;
var fatigue = 10;
var storyObjectl, gameObject;

var player, rocks, bison, ravine, cactii, fruits, veggies, gate, backgroundSprite, track;
var playerImg, rockImg, bisonImg, ravineImg, cactiiImg, fruitImg, veggieImg, gateImg, backgroundImg, titleImg;
var score = 0;

function preload(){
	//playerImage = loadImage("images/player.jpg");
	//trackImage = loadImage("images/track.jpg");
	rockImg = loadImage("images/rocks.png");
	bisonImg = loadImage("images/bison.png");
	ravineImg = loadImage("images/ravine.jpg");
	cactiiImg = loadImage("images/cactus.png");
	fruitImg = loadImage("images/apple.png");
	veggieImg = loadImage("images/carrot.png");
	gateImg = loadImage("images/gates.jpg");
	backgroundImg = loadImage("images/background.jpg");
	titleImg = loadImage("images/image.png");
	playerImg = loadImage("images/player.png");
	//playerImg = loadImage("images/player.jpg");
}

function setup(){
	createCanvas(displayWidth, displayHeight);

	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.
	storyObject = new Story();
	gameObject = new Game();
	backgroundSprite = createSprite(displayWidth/2, displayHeight/2, displayWidth*2, displayHeight*5);
	backgroundSprite.addImage("background", backgroundImg);

	backgroundSprite.velocityX = -10;
	player = createSprite(displayWidth-1400, displayHeight-180, 30, 30);
	player.addImage("player", playerImg);

	//Engine.run(engine);
  
}


function draw() {
	background(255);
	image(titleImg, displayWidth - 1000, 50);
	if(backgroundSprite.x < 0){
		backgroundSprite.x = backgroundSprite.width/2
	}
  
  if(gameState === 0){
	  storyObject.display();
  }

  else if(gameState === 1){
	  //background(backgroundImg);
	  score = Math.round(score+0.5);
	  textSize(20);
	  fill("blue");	
	  text("Score:" + score, displayWidth-150,50);
	  textSize(20);
	  fill("blue");
	  text("Fatigue: " + fatigue, displayWidth-150, 80)
	  gameObject.play();
	  //gameObject.spriteCreation();
  }
  drawSprites();
}

function keyPressed(){
	if(keyCode === 32){
		gameState = 1;
		
	}
}



