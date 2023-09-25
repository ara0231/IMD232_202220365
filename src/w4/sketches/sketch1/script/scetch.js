let posX;
let posY;

let posXAdd = 3;
let posYAdd = 5;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('WHite');
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  background('WHite');
  ellipse(posX, posY, 50);
  posX += posXAdd;
  posY += posYAdd;
}
