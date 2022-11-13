function preload(){
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video= createCapture(VIDEO);
    video.hide();
tint_color = "";
}
function draw(){
    image(video,200,150,250,250);
fill(250,50,40);
stroke(255,0,0);
circle(50,50,80);
circle(50,430,80);
circle(590,50,80);
circle(590,430,80);
fill(0,120,0);
stroke(0,120,0);
rect(90,40,460,20);
rect(41,89,20,302);
rect(90,420,460,20);
rect(580,89,20,302);
}
function take_snapshot(){
   save('student_name.png');
}
 function filter_tint()
    {
        tint_color= document.getElementById("color_name").value;
    }
 