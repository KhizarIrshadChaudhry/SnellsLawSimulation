
let v1; //indskudsvinkel v1
let v2; //udskudsvinkel v2
let b1; //brydningsindeks af indskudsmateriale
let b2; //brydningsindeks af udskudtdsmateriale
let len = 200; //Længden af synlig lys
let tykkelse = 4; //Tykkelse af synlig lys

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(186, 183, 175);
    angleMode(DEGREES);

    indskudsvinkel = createSlider(-90, 90, -45);
    indskudsvinkel.position(width/4-200, 20);
    indskudsvinkel.size(200);

    indskudtBrydningsindeks = createSlider(0, 2, 1, 0.1);
    indskudtBrydningsindeks.position(10, 60);
    indskudtBrydningsindeks.size(200);

    udskudtBrydningsindeks = createSlider(0, 2, 1, 0.1);
    udskudtBrydningsindeks.position(width/2+width/30, 60);
    udskudtBrydningsindeks.size(200);

}

function indskudslys(v1){
    //omregning af indskudsvinkel v1 til koordinat

    //hvor hypotunsen/længden Li=len
    //deltaY = Li*Sin(theta)
    let deltaY = sin(v1)*(len);
    //deltaX = Li*cos(theta)
    let deltaX = -cos(v1)*(len);

    push();
        stroke("red");
        strokeWeight(tykkelse);
        //(x_center+deltaX, y_center+deltaY, x_center, y_center) - startpunktet ændres
        line((width/2)+deltaX, (height/2)+deltaY, width/2, height/2);
    pop();
}

function udskudslys(v1){
    //beregning af udskudsvinkel v2, via Snells-lov
    v2 = asin(sin(v1)*b1/b2);
    
    //omregning af udskudsvinkel v2 til koordinat
    let deltaY = -sin(v2)*(len);
    let deltaX = cos(v2)*(len);


    push();
    stroke("darkred")
    strokeWeight(tykkelse);
    line(width/2, height/2, width/2+deltaX, height/2+deltaY);
    pop();
}

function draw(){
    background(186, 183, 175);
    v1 = indskudsvinkel.value();
    text("Indskudsvinkel = "+v1, width/8, 20)

    b1 = indskudtBrydningsindeks.value()
    text("Brydningsindeks = "+b1, width/8, 60)

    b2 = udskudtBrydningsindeks.value()
    text("Brydningsindeks = "+b2, width/8+width/2, 60)
    indskudslys(v1);
    udskudslys(v1);

    //Barrier
    push();
    stroke("black");
    strokeWeight(4);
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
    pop();  
}