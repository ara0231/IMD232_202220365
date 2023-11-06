class Vehicle {
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    this.pos = createVector(x, y); // 위치값을 벡터값에따라 넣음
    this.vel = p5.Vector.random2D(); // 속도값에 랜덤한 값을 넣음
    this.acc = createVector(); //가속도에 벡터값을 넣음.
    this.mass = mass; // Vehicle의 질량값
    this.rad = rad; //Vehicle의 반지름값
    this.speedMx = speedMx; //Vehicle의 속도 최대값
    this.forceMx = forceMx; //Vehicle 힘의 최대 값
    this.neighborhooodRad = 50; //Vehicle의 행동의 이웃의 반경의 반지름값
    this.color = color; //색상값에 변수 color 값을 넣음
  } // constructor에 각 값을 순서대로 입력하여 넣어 초기화

  cohesion(others) {
    let cnt = 0; //함수 cnt를 선언하고 값을 0으로함.
    const steer = createVector(0, 0); //함수 steer을 선언하고 벡터값을 넣어줌
    others.forEach((each) => {
      if (each !== this) {
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.pos);
          cnt++;
        }
      } //만약 각의 값이
    }); //주체말고 다른것들의 각을 설정함.
    if (cnt > 0) {
      steer.div(cnt); //steer의 값을 cnt로 나눔
      steer.sub(this.pos); //steer값을 위치값을 더함
      steer.setMag(this.speedMx); //steer에 최대 속도값을 앞서 설정한 speedMx 값으로 정함
      steer.sub(this.vel); //steer값에 속도값을 더함
      steer.limit(this.forceMx); //steer에 힘의 최대값의 한계점을 걸어둔다.
    } //만약 cnt의 값이 0보다 클 때
    return steer;
  } //다른것의 위치를 평균으로 이동한다.

  align(others) {
    let cnt = 0; //변수 cnt를 선언하고 0의 값을 넣어줌
    const steer = createVector(0, 0); // 변수 steer을 선언하고 벡터값 0,0을 넣어줌
    others.forEach((each) => {
      if (each !== this) {
        //만약 자신을 제외한 다른요소를 실행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; //제곱
        if (distSq < this.neighborhooodRad ** 2) {
          steer.add(each.vel);
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++; //cnt값에 순차적으로 값을 더함
        }
      }
    }); //다른것들의 각의 값이
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    } //만약 cnt의 값이 0보다 클 때는 steer의 값으로 초기화한다.
    return steer;
  }

  separate(others) {
    let cnt = 0; //변수 cnt를 선언하고 0의 값을 넣어준다.
    const steer = createVector(0, 0); // 변수 steer을 선언하고 벡터값 0,0을 넣어줌
    others.forEach((each) => {
      if (each !== this) {
        const dist = this.pos.dist(each.pos);
        if (dist > 0 && this.rad + each.rad > dist) {
          const distNormal = dist / (this.rad + each.rad);
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          towardMeVec.setMag(1 / distNormal);
          steer.add(towardMeVec);
          cnt++;
        }
      } // 다른것과 충돌을 막는 함수
    });
    if (cnt > 0) {
      steer.div(cnt);
      steer.setMag(this.speedMx);
      steer.sub(this.vel);
      steer.limit(this.forceMx);
    }
    return steer;
  } //만약 cnt의 값이 0보다 클 때는 steer의 값으 초기화한다.

  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass); //
  } //힘을 넣어 작용하게 함

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.speedMx);
    this.pos.add(this.vel);
    this.acc.mult(0);
  } // 가속도에 더해지는 값 최대 속도, 더해지는 가속도값 들을 초기화 시킴.

  borderInfinite() {
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }
    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
  } //만약 화면 밖으로 나간 것들의 위치를 이동시킴.

  display() {
    push();
    translate(this.pos.x, this.pos.y); //중앙값을 this.pos.x, this.pos.y으로 변경
    rotate(this.vel.heading()); //변경되는 가속도 값에 비례해서 본체가 돌아갈 수 있도록 함
    noStroke(); // 윤관선 제거
    fill(this.color); // 채워지는 색을 위에서 설정한 값으로 설정되게 함.
    beginShape(); //그려지는것을 시작함.
    vertex(this.rad, 0); //다각형의 꼭짓점을 반지름과 0의 좌표에 설정
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); //꼭짓점을 -135의 코사인에반지금값을 곱하고, -135의 사인에반지름값을 곱한값에 설정
    vertex(0, 0); //꼭짓점을 0,0의 좌표에 설정.
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135))); //꼭짓점을 135의 코사인에반지금값을 곱하고, 135의 사인에반지름값을 곱한값에 설정
    endShape(CLOSE); //그려지는것을 종료함.
    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop();
  } //화면에보이는 것을 설정하는 함수
} //함수 Vehicle를 선언
