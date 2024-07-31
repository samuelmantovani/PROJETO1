function setup() {
  createCanvas(1000, 800);
   background("white");
}


function draw() {
  
  stroke ("black");
  fill ("red");
 
  

  
  if (mouseIsPressed){
    circle(mouseX, mouseY, 30);
  }
}
