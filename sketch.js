

//鍵盤e和r 滑鼠左鍵

function setup() {
  createCanvas(windowWidth,windowHeight);
  strokeWeight(10);
  background(255);
  

  
  
}

function draw() {
  
  if(key == 'e' || key == 'E'){background(random(255),random(255),random(255));}
  
  
  
  //circle(width/2,height/2, 100)
  //consnle.log(mouseIsPressed)
 if(mouseIsPressed){
   fill(255,150,255);
 }else{
   fill(100,0,255);
 }
 if(mouseIsPressed){
   stroke(50,100,200);
   strokeWeight(10);
   line(pmouseX,pmouseY,mouseX,mouseY);
 }

  circle(mouseX,mouseY,50);
}
 function mouseClicked(){
  fill(random(255),random(255),random(255))
  
}


function mouseMoved(){
  stroke(random(255),random(255),random(255));

   line(pmouseX,pmouseY,mouseX,mouseY);
}
function mouseDragged(){
  stroke(255,255,255);
   strokeWeight(100);
   line(pmouseX,pmouseY,mouseX,mouseY);
}


function keyPressed(){
  if (key == 'r' || key == 'R') {
 background(255);
  }
  
  
  
  
  
}
























