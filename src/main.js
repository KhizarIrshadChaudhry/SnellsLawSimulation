function setup(){
    createCanvas(windowWidth, windowHeight);
    background(186, 183, 175);
    angleMode(DEGREES);

}
let c = 299792458; //Lysets hastighed

function indskudslys(v1=0){
    //omregning af indskudsvinkel v1 til koordinat
    let y = sin(v1)*(windowWidth/2-windowWidth/4);

    text(v1, width*2/8, 50)
    
    push();
    stroke("red");
    strokeWeight(2);
    line(windowWidth/4, (windowHeight/2)+y, windowWidth/2, windowHeight/2);
    pop();
}
let v1 = -45; //indskudsvinkel v1
let b1 = 1; //brydningsindeks luft
let b2 = 1.5; //brydningsindeks luft

function udskudslys(v1){
    //beregning af udskudsvinkel v2
    v2 = asin(sin(v1)*b1/b2);
    text(v2, width*5/8, 50)
    //omregning af udskudsvinkel v2 til koordinat
    let  x = -sin(v2)*(windowWidth/2-windowWidth/4);
    push();
    stroke("darkred")
    strokeWeight(2);
    line(windowWidth*4/8, windowHeight/2, windowWidth*3/4, windowHeight/2+x);
    pop();
}

function draw(){
    indskudslys(v1);
    udskudslys(v1);


    //Barrier
    push();
    stroke("black");
    strokeWeight(4);
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
    pop();
    
}