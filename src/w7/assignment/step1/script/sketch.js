let traffic; //변수 traffic 선언
let infiniteOffset = 80; //변수 infiniteOffset 선언후 값을 80을 넣는다.

function setup() {
  setCanvasContainer('canvas', 3, 2, true); // setCanvasContainer 함수를 사용하여 id canvas를 부르고 캔버스의 비율을 3 :2로 한다.
  colorMode(HSL, 360, 100, 100, 100); //색상모드를 HSL로 설정
  background('white'); //배경색을 흰색으로 설정
  traffic = new Traffic(); //변수 traffic안에 새로운 class Traffic을 넣음
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  } //변수 traffic에 Vehicle의 높이 너비의 랜덤한 값을 더함
} //함수 setup을 선언

function draw() {
  background('white'); //배경색을 흰색으로 설정
  traffic.run(); //함수 traffic을 실행
} //함수 draw를 선언

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY); //함수 traffic에 Vehicle을 더한 값을 마우스의 값을 따라 움직이게 함.
} //함수 mouseDragged를 선언
