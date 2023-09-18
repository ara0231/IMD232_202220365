function setup() {
  setCanvasContainer('p5-canvas', 530, 530);
  background('#ffe2f1');
}
function draw() {
  background('#ffe2f1');

  // width height
  rectMode(CORNER);
  colorMode(RGB);
  fill(255);
  stroke(0);
  strokeWeight(1);

  //벽
  noStroke();
  fill('#ffd4eb');
  rect(0, 0, 30, 500);
  rect(60, 0, 30, 500);
  rect(120, 0, 30, 500);
  rect(180, 0, 30, 500);
  rect(240, 0, 30, 500);
  rect(300, 0, 30, 500);
  rect(360, 0, 30, 500);
  rect(420, 0, 30, 500);
  rect(480, 0, 30, 500);

  //바닥
  noStroke();
  fill('#d9ae9e');
  rect(0, 500, 2000, 3000);

  //선반
  //풀
  stroke('#54ad4a');
  strokeWeight(5);
  line(179, 55, 179, 30);
  line(187, 55, 187, 30);
  line(195, 55, 195, 30);

  stroke('#2d6427');
  strokeWeight(5);
  line(229, 55, 229, 35);
  line(237, 55, 237, 35);
  line(245, 55, 245, 35);

  stroke('#2c8f22');
  strokeWeight(8);
  line(295, 55, 295, 35);
  line(280, 55, 280, 35);

  //장식
  stroke('#846a61');
  fill('#3b3d49');
  strokeWeight(1);
  rect(270, 170, 50, 10);
  rect(270, 160, 50, 10);
  rect(270, 150, 50, 10);
  rect(270, 140, 50, 10);
  fill('##d8e8ec');
  rect(390, 120, 50, 60);
  rect(340, 150, 40, 30);
  fill('#31b5d1');
  rect(395, 125, 40, 50);
  rect(345, 155, 30, 20);

  //선반닥
  stroke('#846a61');
  strokeWeight(1);
  fill('#f2e5d5');
  rect(150, 90, 200, 8);
  rect(250, 180, 220, 8);

  //화분
  fill('#fabd5c');
  rect(170, 50, 35, 40);
  fill('#ff6f3a');
  rect(220, 50, 35, 40);
  fill('#ef5068');
  rect(270, 50, 35, 40);

  //창문
  stroke('#846a61');
  fill('#96bffd');
  rect(-30, 90, 80, 330);
  fill('#698869');
  rect(-30, 200, 80, 230);

  fill('white');
  rect(20, 90, 33, 330);
  fill('#ead9e8');
  noStroke();
  rect(25, 90, 4, 330);
  rect(35, 90, 4, 330);
  rect(45, 90, 4, 330);
  stroke('#846a61');
  fill('#ffecfc');
  rect(0, 90, 60, 5);

  //책상
  fill('#698869');
  rect(130, 350, 300, 10);
  rect(140, 360, 8, 140);
  rect(410, 360, 8, 140);

  fill('#486948');
  rect(149, 360, 260, 30);

  fill(65);
  rect(450, 380, 50, 120);
  fill(0);
  noStroke();
  rect(450, 400, 50, 10);
  rect(450, 420, 50, 10);

  //의자
  fill('#dd799f');
  noStroke();
  rect(300, 410, 10, 100);

  fill('#ef5d94');
  rect(350, 410, 10, 100);

  rect(350, 290, 30, 150);
  rect(280, 410, 80, 30);
  rect(280, 410, 10, 100);
  rect(370, 410, 10, 100);

  fill('#aa3a64');
  rect(350, 290, 10, 120);

  //모니터
  fill(65);
  noStroke();
  rect(240, 300, 30, 50);
  fill(40);
  rect(180, 240, 150, 80);
  fill(0);
  noStroke();
  rect(185, 244, 140, 60);
}
