//

let pos;
let vel;
let acc;

let cc;

let a;
let b;
let c;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');

  cc = createVector(width / 2, height / 2);

  pos = createVector(width / 2, height / 2);
  vel = createVector();
  acc = createVector();
}

function draw() {
  background('white');
  update();
  display();

  cc.set(constrain(mouseX, 0, width), constrain(mouseY, 0, height));

  stroke(0);
  line(pos.x, pos.y, mouseX, mouseY);
}

function update() {
  a = createVector(mouseX, mouseY);
  b = p5.Vector.sub(a, pos);

  b.setMag(2);

  let c = p5.Vector.sub(b, vel);

  c.limit(0.1);
  acc.add(c);
  vel.add(acc);
  pos.add(vel);
  acc.mult(0);
}

function display() {
  noStroke();
  fill(0);
  ellipse(pos.x, pos.y, 50);
}
