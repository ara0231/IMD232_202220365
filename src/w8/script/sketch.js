let dom;
let htmrl;

function setup() {
  select('#hereGoesMyP5sketch');
  htmlDom = documanenr.querySelector('#hereGoesMyP5sketch');
  //   console.log('p5 selct',dom);
  //   console.log('p5 selct',dom);

  let canvas = createCanvas(600, 400);
  canvas.parent(dom);
  background('black');
}

function draw() {
  //   if (mouseIsPressed) {
  //     fill(0);
  //   } else {
  //     fill(255);
  //   }
  //   ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() {
  if (htmlDom.clientWidth < canvasW) {
    resizeCanvas(
      htmlDom.clientWidth,
      (htmlDom.clientWidth * canvasH) / canvasW
    );
    background('black');
  } else if (width !== canvasW) {
    resizeCanvas(canvasW, canvasH);
    background('black');
  }
}
