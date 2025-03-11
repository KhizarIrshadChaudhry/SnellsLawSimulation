function setup(){
    createCanvas(windowWidth, windowHeight);
    background(186, 183, 175);
    angleMode(DEGREES);

}
let c = 299792458; //Lysets hastighed

function indskudslys(v1=0){
    let  x = tan(v1)*(windowWidth/2-windowWidth/8);
    stroke("red");
    line(windowWidth/8, (windowHeight/2)+x, windowWidth/2, windowHeight/2);
}
function udskudslys(){
    stroke("darkred")
    line(windowWidth*4/8, windowHeight/2, windowWidth*7/8, windowHeight/2);
}

function draw(){
    indskudslys(0);
    udskudslys();


    //Barrier
    stroke("black");
    strokeWeight(4);
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
    
}