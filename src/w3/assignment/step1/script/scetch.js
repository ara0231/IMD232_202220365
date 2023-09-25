let pos;
let vel;
let acc;

let cc;
let mv;
let mm;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('White');

  cc = createVector(width / 2, height / 2);
  mv = createVector();
  mm = createVector();

  pos = createVector(random(width), random(height));
  vel = createVector(random());
  acc = p5.Vector.random2D();
  acc.mult(0.1);
}

function draw() {
  background('White');
  update();
  checkEdges();
  display();

  mv.set(mouseX, mouseY);
  translate(pos.x, pos.y);

  mm = p5.Vector.sub(mv, cc);
  stroke(0);
  line(0, 0, mm.x, mm.y);
}

function reset() {
  cc = createVector(width / 2, height / 2);
  mv = createVector(0, 0);
  mm = createVector();
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(2);
  pos.add(vel);
}

function checkEdges() {
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
}

function display() {
  noStroke();
  fill(0);
  ellipse(pos.x, pos.y, 50);
}
