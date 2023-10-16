let emitter;
let particle;
let g;

function setup() {
  setCanvasContainer('canvas', 1, 2, true);
  colorMode(HSL, 360, 100, 100);
  particle = new ball(width / 2, 0, 0, 0, 1, 0, 100, 50);

  emitter = new Emitter(width / 2, heigth);

  g = createVector(0, 0.1);

  background('white');
}

function draw() {
  background('white');
  const scaledG = p5.Vector.mult(g, particle.mass);
  particle.applyforce(scaledG);
  particle.update();
  particle.display();

  emitter.createBall();
  emitter.applyGravity(g);
  emitter.update();
  emitter.display();
}
