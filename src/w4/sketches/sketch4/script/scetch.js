let pos;
let vel;

let r = 15;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('#ff7733');

  pos = createVector(width / 2, height / 2);
  vel = createVector(5, 3);

  //임의의 방향으로 1만큼 뻗은 벡터 만들기
  //   vel = createVector(0, 1);
  //   vel.rotate(random(TAU));

  vel = p5.Vector.random2D();

  vel.mult(0);
  acc = createVector(0, 0.1);

  console.log(vel.mag());
}
function draw() {
  background('#ff7733');
  update();
  infinitEdge();
  disPlay();
}

function update() {
  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
}

function infinitEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}

function disPlay() {
  fill(255);
  ellipse(pos.x, pos.y, 2 * r);
}
