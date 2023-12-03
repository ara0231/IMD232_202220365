let angle = 0;
let w = 30; // width of the cube
let ma; // angle for rotation
let maxD; // maximum distance
let camZ = 600; // initial camera Z position
let zoomSpeed = 50; // adjust zoom speed

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 300, 300);
}

function draw() {
  background(0);

  // Oscillating background gradient
  let from = color(128, 0, 255);
  let to = color(0, 128, 255);
  let lerpAmt = (sin(angle / 2) + 1) / 2;
  let bgColor = lerpColor(from, to, lerpAmt);
  ambientLight(bgColor);

  perspective(); // Change to perspective projection

  rotateX(-QUARTER_PI);
  rotateY(ma);

  // Move to the center of the canvas
  translate(0, 0);

  for (let z = -300; z < 300; z += w) {
    for (let x = -300; x < 300; x += w) {
      push();
      let d = dist(x, z, 0, 0);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let r = floor(map(sin(a), -1, 1, 50, 150));

      translate(x, 0, z);

      // Dynamic Sphere Color
      let col = color(
        map(sin(angle), -1, 1, 300, 255),
        map(cos(angle * 0.6), -1, 1, 100, 255),
        map(sin(angle * 0.3), -1, 1, 100, 255),
        60
      );

      fill(col);
      stroke(255);
      strokeWeight(1); // Adjust stroke thickness
      sphere(r);

      pop();
    }
  }

  angle += 0.05;
}

// Adjust canvas size and position when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Center the canvas in the window
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}

// Change camera zoom on mouse click
function mousePressed() {
  if (mouseY < height / 2) {
    // If clicked above the center, zoom in
    camZ -= zoomSpeed;
  } else {
    // If clicked below the center, zoom out
    camZ += zoomSpeed;
  }
  camera(0, 0, camZ, 0, 0, 0, 0, 1, 0); // Set the camera position
}
