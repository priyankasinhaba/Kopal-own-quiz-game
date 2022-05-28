var canvas, backgroundImage;
var backgroundImage1,backgroundImage2, backgroundImage3,backgroundImage4,backgroundImage5;
var backgroundImage6, backgroundImage7,backgroundImage8,backgroundImage9;

var gameState = 0;


var form, player, game;

var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10;

var qCheck = 0;
var score = 0;

function preload(){
  wrongSound = loadSound("images/Sound wrong.wav")
  rightSound = loadSound("images/Sound right.wav")
  //backgroundImage1=loadImage("images/background image1.jpg");
  // backgroundImage2=loadImage("images/background image2.jpg");
  // backgroundImage3=loadImage("images/L image.png");
  // backgroundImage4=loadImage("images/light yagami1.jpg");
  // backgroundImage5=loadImage("images/misa1");
  // backgroundImage6=loadImage("images/misa2.jpg");
  // backgroundImage7=loadImage("images/Near.jpg");
  // backgroundImage8=loadImage("images/Ryuk.jpg");
  // backgroundImage9=loadImage("images/Teru Mikami.webp");
}

function setup(){
  database = firebase.database();

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  game = new Game();
  game.start();

}


function draw(){
 background("lightgreen");






console.log(score);



}
