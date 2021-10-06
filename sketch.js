var canvas;
var gameState = 0;
var playerCount;
var database;
var allPlayers;
var char1_img, char2_img, court, ball_img;
var player1, player2, players, score;

function preload(){
 char1_img = loadAnimation("Img/A.png", "Img/B.png", "Img/C.png", "Img/D.png");
 char2_img = loadAnimation("Img/E1.jpg","Img/E2.jpg","Img/E3.jpg","Img/E4.jpg");
 court = loadImage("Img/track.jpg");
 ball_img = loadImage("Img/ball.png");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
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

