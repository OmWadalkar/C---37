var canvas,backgroundImg;
var gameState = 0
var playerCount;
var database;
var form,game,player;
var allPlayers;
var distance = 0;
var car1,car2,car3,car4;
var cars;


function setup(){
  database = firebase.database();
  console.log(database);
  canvas  = createCanvas(displayWidth-20,displayHeight-30);
 game = new Game();
 game.getState();
 game.start();
  
}

function draw(){


 if (playerCount === 4) {
    game.update(1);

 }
 if (gameState === 1) {
   clear();
   game.play();
 }
    }
  
