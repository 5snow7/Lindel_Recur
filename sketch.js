let can;let t;let st;
let ax=[];let rule=[];let x1;
let xm,ym;let len,ang;

function setup() {
ax=["A","A+B"];x1=0;start();
rule=["A+A--A+A","A+A-A-AA+A+A-A","A+A-A+A-A+A-A+AA+AA+A"];
st=ax[0];
can=createCanvas(900,550);
can.position(10,20);
can.class("bdd");
t=new logo(200,200,0);
len=5;ang=60;
textSize(18);j=0;str="no";
xm=50;ym=450;
}

function draw() {
//clear();
background(250,150,0);

t.set1(400,400,0);
//for(let j=3;j<12;j++){t.poly(50,j);}

t.set1(50,350,0);

t.set1(xm,ym,0);
t.sketch(len,ang,lindel(st,1));
text(st,50,200);
//text(key,50+10,100);j++;

}

function keyTyped(){
if(key=="r"){
st=lindel(st,1);
x1++;if(x1>4){x1=0;st=rule[1];}
}
}

function mousePressed(){
xm=mouseX;ym=mouseY;

}
