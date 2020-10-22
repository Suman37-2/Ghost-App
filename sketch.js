var back,backimg;
var ghost,ghostimg;
var door,doorimg,doorgrp;
var climber,climberimg,invclimber,climbergrp,invclimbergrp;
var gameState=play,play=2,end=1;

function preload(){
  backimg=loadImage("tower.png");
  ghostimg=loadAnimation("ghost-jumping.png","ghost-standing.png");
  doorimg=loadImage("door.png");
  climberimg=loadImage("climber.png");
  
}

function setup(){
  createCanvas(550,550);
  
  back=createSprite(275,275,550,550);
  back.addImage(backimg);
  back.velocityY=3;
  
  ghost=createSprite(225,200,20,20);
  ghost.addAnimation("gh",ghostimg);
  ghost.scale=0.3;
  
  doorgrp=new Group();
  climbergrp=new Group();
  invclimbergrp=new Group();
  
}


function draw(){
  background(0);
  
  
    
  
  if(back.y>550){
    back.y=400;
    
  }
  if(keyDown("space")){
    ghost.velocityY=-4;
  }
  ghost.velocityY=ghost.velocityY+0.5;
  
    if(keyDown("right")){
      ghost.x=ghost.x+4;
    }
    if(keyDown("left")){
      ghost.x=ghost.x-4;
    }
  spawnDoors();

    
    
    ghost.collide(climbergrp);
    
    if(ghost.y>550 || ghost.isTouching(invclimbergrp)){
    stroke("yellow");
    textSize(20);
    text("Game Over",240,260);
      
    ghost.destroy();
    doorgrp.destroyEach();
    climbergrp.destroyEach();
    invclimbergrp.destroy();
    
      
  }  
  

    
    
    
    
  
  drawSprites();
  
}
function spawnDoors(){
  if(frameCount%100===0){
    var a=Math.round(random(100,480));
     door=createSprite(a,0,20,20);
    door.addImage(doorimg);
    door.velocityY=3;
    door.lifetime=200;
    doorgrp.add(door);
    
    
    climber=createSprite(door.x,60,20,20);
    climber.addImage(climberimg);
    climber.velocityY=3;
    climber.lifetime=200;
    climbergrp.add(climber);
    
    invclimber=createSprite(door.x,70,climber.width,10);
    invclimber.velocityY=3;
    invclimber.lifetime=200;
    invclimber.visible=false;
    invclimbergrp.add(invclimber);
    
  }
}

