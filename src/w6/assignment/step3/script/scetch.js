let pos;
let vel;
let acc;

let mv;

let a;
let b;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('white');

  mv = createVector();

  pos = createVector(random(width), random(height));
  vel = createVector();
  acc = createVector();
}

function draw() {
  background('white');
  update();
  display();

  mv.set(mouseX, mouseY);

  stroke(0);
  if (!mouseIsPressed) {
    line(pos.x, pos.y, mv.x, mv.y);
  }
}

function update() {
  if (!mouseIsPressed) {
    a = p5.Vector.sub(mv, pos);
    a.setMag(1);
    b = p5.Vector.sub(a, vel);
    b.limit(50);
    acc.add(b);

    vel.add(acc);
    pos.add(vel);
    acc.mult(0);
  }
}

function display() {
  noStroke();
  fill(0);
  ellipse(pos.x, pos.y, 50);
}
