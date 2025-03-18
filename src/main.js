let slider;
let brydningsindeksSlider;
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(186, 183, 175);
    angleMode(DEGREES);

    brydningsindeksSlider = createSlider(10, 3, 0);
    text("adaaa", 10, 1000);
    brydningsindeksSlider.position(width*4/6, height*7/8);
    brydningsindeksSlider.size(200);

    slider = createSlider(-90, 90, 0);
    slider.position(10, 20);
    slider.size(200);

}
let c = 299792458; //Lysets hastighed

function indskudslys(v1){
    //omregning af indskudsvinkel v1 til koordinat

    //hvor hypotunsen/længden Li=len
    //deltaY = Li*Sin(theta)
    let deltaY = sin(v1)*(len);
    //deltaX = Li*cos(theta)
    let deltaX = -cos(v1)*(len);

    push();
        stroke("red");
        strokeWeight(2);
        //(x_center+deltaX, y_center+deltaY, x_center, y_center) - startpunktet ændres
        line((windowWidth/2)+deltaX, (windowHeight/2)+deltaY, windowWidth/2, windowHeight/2);
    pop();
}
let v1; //indskudsvinkel v1
let b1 = 1; //brydningsindeks luft
let b2 = 1.5; //brydningsindeks luft
let len = 150; 
function udskudslys(v1){
    //beregning af udskudsvinkel v2, via Snells-lov
    v2 = asin(sin(v1)*b1/b2);
    
    //omregning af udskudsvinkel v2 til koordinat
    let deltaY = sin(v2)*(len);
    let deltaX = cos(v2)*(len);


    push();
    stroke("darkred")
    strokeWeight(2);
    line(windowWidth/2, windowHeight/2, windowWidth/2+deltaX, windowHeight/2+deltaY);
    pop();
}

function draw(){
    background(186, 183, 175);
    v1 = slider.value();
    
    indskudslys(v1);
    udskudslys(v1);

    //Barrier
    push();
    stroke("black");
    strokeWeight(4);
    line(windowWidth/2, 0, windowWidth/2, windowHeight);
    pop();  
}