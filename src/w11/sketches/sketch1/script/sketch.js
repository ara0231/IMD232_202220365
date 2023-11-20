let cam;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  //   createCanvas(800, 300);
  cam = createCapture(VIDEO);
  cam.hide();
  //   cam.size(320, 480);
  //   noloop();
}

function draw() {
  background('white');
  //   image(cam, 0, 0, width, height);
  image(cam, 0, 0, width, (cam.heigth / cam.width) * width);
  loadpixels();

  //   console.log('pixel', cam.pixels[0]);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = width * y + x;
      // cam.pixels[idx]
      const color = cam.pixels[idx];
      const b = brightness(color);
      //   ellips(x, y, (brightness / 255) * 20);
    }
  }
  updatePixels();
}
