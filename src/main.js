let v1; // indskudsvinkel v1
let v2; // udskudsvinkel v2
let b1; // brydningsindeks af indskudsmateriale
let b2; // brydningsindeks af udskudsmateriale
let len = 200; // Længden af synligt lys
let tykkelse = 4; // Tykkelsen af lyset

// Kendte brydningsindekser for materialer
let LUFT = 1;
let VAND = 1.33;
let GLAS = 1.5;
let DIAMAND = 2.4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // Slider for indskudsvinkel
  indskudsvinkel = createSlider(-90, 90, -45);
  indskudsvinkel.position(width / 8 - indskudsvinkel.width, 50);
  indskudsvinkel.size(width / 6);

  // Slider for indskudt brydningsindeks
  indskudtBrydningsindeks = createSlider(1, 2.5, 1, 0.01);
  indskudtBrydningsindeks.position(width / 8 - width / 15, height * 7 / 8);
  indskudtBrydningsindeks.size(width / 4);

  // Slider for udskudt brydningsindeks
  udskudtBrydningsindeks = createSlider(1, 2.5, 1, 0.01);
  udskudtBrydningsindeks.position(width * 5 / 8 - width / 15, height * 7 / 8);
  udskudtBrydningsindeks.size(width / 4);
}

function indskudslys(v1) {
  // Omregning af indskudsvinkel (v1) til koordinater

  let deltaY = sin(v1) * len;
  let deltaX = -cos(v1) * len;

  push();
    stroke("red");
    strokeWeight(tykkelse);
    // Tegn linje fra center til bregenet position
    line(width / 2 + deltaX, height / 2 + deltaY, width / 2, height / 2);
  pop();
}

function udskudslys(v1) {

  b1 = indskudtBrydningsindeks.value();
  b2 = udskudtBrydningsindeks.value();
  // Beregn udskudsvinklen vha. Snells lov
  v2 = asin(sin(v1) * b1 / b2);

  let deltaY = -sin(v2) * len;
  let deltaX = cos(v2) * len;

  push();
    stroke("darkred");
    strokeWeight(tykkelse);
    // Tegn linje fra center mod udskudt lys
    line(width / 2, height / 2, width / 2 + deltaX, height / 2 + deltaY);
  pop();
}



//  UI for indskudtbrydningsindeks
function indskudtbrydningsindeksUI() {

  b1 = indskudtBrydningsindeks.value();

  let sliderX = width / 8 - width / 15;
  let sliderY = height * 7 / 8;
  let sliderW = indskudtBrydningsindeks.width;

  // Vis  brydningsindeks 
  textAlign(LEFT, BOTTOM);
  text("Brydningsindeks = " + b1, sliderX+100, sliderY-20);

  // Array med materialer og deres brydningsindekser
  let materials = [
    { navn: "LUFT", brydningsindeks: LUFT },
    { navn: "VAND", brydningsindeks: VAND },
    { navn: "GLAS", brydningsindeks: GLAS },
    { navn: "DIAMAND", brydningsindeks: DIAMAND }
  ];

  // Lavet en foor loop så jeg ikke skal gøre det manuelt hele tiden
  for (let i = 0; i < materials.length; i++) {
    let xPos = map(materials[i].brydningsindeks, 1, 2.5, sliderX, sliderX + sliderW)+10;
    push();
        stroke(0);
        line(xPos, sliderY - 10, xPos, sliderY + 20);
        noStroke();
        textAlign(CENTER, TOP);
        textSize(15)
        text(materials[i].navn, xPos, sliderY + 20);
    pop();
  }
}


function udskudtbrydningsindeksUI() {

  b2 = udskudtBrydningsindeks.value();

  let sliderX = width * 5 / 8 - width / 15;
  let sliderY = height * 7 / 8;
  let sliderW = udskudtBrydningsindeks.width;


  textAlign(LEFT, BOTTOM);
  text("Brydningsindeks = " + b2, sliderX+100, sliderY-20);

  let materials = [
    { navn: "LUFT", brydningsindeks: LUFT },
    { navn: "VAND", brydningsindeks: VAND },
    { navn: "GLAS", brydningsindeks: GLAS },
    { navn: "DIAMAND", brydningsindeks: DIAMAND }
  ];


  for (let i = 0; i < materials.length; i++) {
    let xPos = map(materials[i].brydningsindeks, 1, 2.5, sliderX, sliderX + sliderW)+10;
    push();
        stroke(0);
        line(xPos, sliderY - 10, xPos, sliderY + 20);
        noStroke();
        textAlign(CENTER, TOP);
        textSize(15)
        text(materials[i].navn, xPos, sliderY + 20);
    pop();
  }
}



function draw() {
  background(186, 183, 175);
  textSize(25);
  textAlign(CENTER, BOTTOM);
  v1 = indskudsvinkel.value();
  text("Indskudsvinkel = " + v1 + "°", width / 8, 50);


  indskudtbrydningsindeksUI();
  udskudtbrydningsindeksUI();

  indskudslys(v1);
  udskudslys(v1);


  push();
    stroke("black");
    strokeWeight(4);
    line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
  pop();
}
