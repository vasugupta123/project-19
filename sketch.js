var ball,img,paddle;
function preload() {
ball=loadAnimation("ball.png");
paddle=loadAnimation("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  circle2=createSprite(20,200,20,20);
  circle2.addAnimation("c1",ball);
  block2=createSprite(380,200,10,80);
  block2.addAnimation("c2",paddle);
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
 edges=createEdgeSprites();
  circle2.bounceOff(edges[0]);
  circle2.bounceOff(edges[2]);
  circle2.bounceOff(edges[3]);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  circle2.bounceOff(block2,explosion);

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
    block2.velocityX=2;
  circle2.velocityX=2;
  {
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
block2.velocityY=-2;
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}



function explosion()  {
circle2.velocityY=random(-8,8);
  
}
