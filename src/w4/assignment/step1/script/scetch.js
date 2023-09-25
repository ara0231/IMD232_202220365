let pos;
let vel;
let acc;

let mv;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');

  mv = createVector();

  pos = createVector(random(width), random(height));
  vel = createVector(random(), random());
  acc = p5.Vector.random2D();
  acc.mult(0.1);
}

function draw() {
  background('white');
  update();
  display();

  mv.set(mouseX, mouseY);

  stroke(0);
  line(pos.x, pos.y, mv.x, mv.y);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(2);
  pos.add(vel);
}

function display() {
  noStroke();
  fill(0);
  ellipse(pos.x, pos.y, 50);
}
