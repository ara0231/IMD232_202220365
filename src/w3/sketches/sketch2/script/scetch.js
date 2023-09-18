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

//힌트=마우스로향하는 벡터를 구하는 방법을 사용 벡터 서트렋션
//화면 중앙에서 마우스로 향하는 벡터 -> 잘하면 마우스로만 벡터를 사용가능
//하지만 값을 좀 줄여야함. 값이 커져서 빨라지기 때문
