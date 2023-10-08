class Mover {
  constructor(x, y, radius) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.radius = radius;
    this.mass = radius ** (1 / 2);
  }

  //class no function

  applyForce(force) {
    // force.div(this.mass);

    let divedForce = p5.Vector.div(force, this.mass);
    this.acc.add(divedForce);

    //p5. ~ 는 앞에건 변화 안시키고 뒤에값을 넣어줌.
    p5.Vector.div(force, this.mass);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    // p5.Vector.div(force, this.mass); 이거 쓰면 무조건 써야하는 문장.
    // 값을 유지시키고 계속 더해지는 것을 방지하기 위해
    //acc 초기화를 시키고 다시 계산시킴
    this.acc.mult(0);
  }

  edgeBounce() {
    if (this.pos.x < 0 + this.radius) {
      let delta = this.pos.x - (0 + this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1 - this.radius) {
      let delta = this.pos.x - (width - 1 - this.radius);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1 - this.radius) {
      let delta = this.pos.y - (height - 1 - this.radius);
      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    }
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }
}
