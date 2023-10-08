let moverA;
let gravity;
let wind;
let pmouseX;
let pmouseY;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background(255);
  moverA = new Mover(width / 2, height / 2, 10);
  gravity = createVector(0, 0.2);
  wind = createVector(0.0, 0);
}

function draw() {
  background(255);

  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.pos = createVector(mouseX, mouseY);
    moverA.setMouseHeld(true);
  } else {
    moverA.setMouseHeld(false);
  }

  moverA.applyGravity(gravity);

  if (moverA.isMouseHeld && (mouseX !== pmouseX || mouseY !== pmouseY)) {
    moverA.applyForce(wind);
  }

  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  pmouseX = mouseX;
  pmouseY = mouseY;
}

if (moverA.isMouseHeld) {
  moverA.applyGravity(gravity);
  if (mouseX !== pmouseX || mouseY !== pmouseY) {
    moverA.applyForce(wind);
  }
}
