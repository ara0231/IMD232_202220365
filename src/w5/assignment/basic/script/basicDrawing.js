let cv;
let mv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('#ff7733');
  cv = createVector(width / 2, height / 2);
  mv = createVector();
}
function draw() {
  background('#ff7733');
  stroke(255);
  line(0, 0, cv.x, cv.y);

  mv.x = mouseX;
  mv.y = mouseY;
  stroke('crimson');
  line(0, 0, mv.x, mv.y);

  mv.sub(cv);
  stroke(255);
  line(0, 0, mv.x, mv.y);
}
