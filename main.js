img="";

function preload(){
    img=loadImg("dog_cat.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
}

function draw(){
    image(img, 0, 0, 640, 420);
     fill("#FF0000");
      text("Dog", 45, 75); 
      stroke("#FF0000"); 
      noFill(); 
      rect(30, 60, 450, 350 );
}
