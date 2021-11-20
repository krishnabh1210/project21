var canvas;
var object1,obj
var music;
var Rect1, Rect2,Rect3,Rect4;
var boxSprite;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces



  
  Rect1 = createSprite(150, 500, 250, 50);
  Rect1.shapeColor = "green";
  Rect1.debug = true;
  Rect2 = createSprite(350, 500,250,50);
  Rect2.shapeColor = "green";
  Rect2.debug = true;
 Rect3 = createSprite(550, 500, 250, 50);
  Rect3.shapeColor = "green";
  Rect3.debug = true;
  Rect4= createSprite(750, 500,250,50);
  Rect4.shapeColor = "green";
  Rect4.debug = true;

 boxSprite=createSprite(random(150,1050),50,50,50);







    //create box sprite and give velocity
boxSprite.velocityX=5;
boxSprite.velocityY=5
}

function draw() {
    background(rgb(0,0,0));
    //create edgeSprite
createEdgeSprites();
boxSprite.bouceOff();
drawSprites();

    //add condition to check if box touching surface and make it box
}
