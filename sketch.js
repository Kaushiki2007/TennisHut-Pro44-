var canvas;
var gameState = 0;
var playerCount;

function preload(){
 
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
 
}

function draw() {
  background(255);

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
 
}

