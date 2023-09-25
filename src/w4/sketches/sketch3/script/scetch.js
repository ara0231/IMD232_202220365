// let x;
// let y;
let pos;
let vel;
// let xAdd = 5;
// let yAdd = 3;

let r = 15;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('#ff7733');

  //초기값 할당
  //   x = width / 2;
  //   y = height / 2;

  pos = createVector(width / 2, height / 2);
  vel = createVector(5, 3);
}
function draw() {
  background('#ff7733');
  //위치 갱신
  //   x += xAdd;
  //   y += yAdd;

  // pos.x += vel.x pos.y += vel.y

  pos.add(vel);

  //화면 밖에서 다시 안으로
  //   if (x < 0) {
  //     x += width;
  //   } else if (x >= width) {
  //     x -= width;
  //   }
  //   if (y < 0) {
  //     y += height;
  //   } else if (y >= height) {
  //     y -= height;
  //   }

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

  fill(255);
  ellipse(pos.x, pos.y, 2 * r);
}
