let x=300;
let y=80;

function setup() {
createCanvas(600, 400);
}

function draw() {
background(220,180,106);

stroke(180,20,180);

fill(100,100,120);
ellipse(x,200,80,80);

x=x+5

if (x>width){
x=15
}

ellipse(300,y,80,80);
y=y+0

if (y>400){
y=15;
}

ellipse(200,x,80,80);
ellipse(y,300,80,80);



}
