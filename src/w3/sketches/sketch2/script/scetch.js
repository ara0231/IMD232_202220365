//001

// let pos;
// let vel;
// let r = 60;

// function setup() {
//   setCanvasContainer('mySketchGoesHere', 3, 2, true);
//   background('WHite');
//   pos = createVector(width / 2, height / 2);
//   vel = createVector(3, 5);
//   console.log(pos);
//   console.log(vel);
//   ellipse(pos.x, pos.y, 50);
// }

// function draw() {
//   background('WHite');
//   pos.add(vel);
//   // if (pos.x < 0) {
//   //   vel.x *= -1;
//   // } else if (pos.x > width) {
//   //   vel.x *= -1;
//   // }
//   if (pos.x - r < 0 || pos.x + r > width) {
//     vel.x *= -1;
//   }
//   if (pos.y - r < 0 || pos.y + r > height) {
//     vel.y *= -1;
//   }
//   ellipse(pos.x, pos.y, 2 * r);
// }

//002

let pos;
let vel;
let acc;
let r = 25;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background('WHite');
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  console.log(pos);
  console.log(vel);
  ellipse(pos.x, pos.y, 50);
}

function draw() {
  background('WHite');
  update();
  infiniteEdge();
  display();

  // if (pos.x - r < 0 || pos.x + r > width) {
  //   vel.x *= -1;
  // }
  // if (pos.y - r < 0 || pos.y + r > height) {
  //   vel.y *= -1;
  // }
}

function display() {
  ellipse(pos.x, pos.y, 2 * r);
}

function update() {
  acc = p5.Vector.random2D();
  acc.mult(0.5);
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
}

function infiniteEdge() {
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
