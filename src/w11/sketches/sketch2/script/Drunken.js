class Drunken {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
    this.acc = createVector();
    this.mass = 1;
    this.iscross = false;
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.iscross = false;
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  infiniteEdge() {
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.iscross = true;
    } else if (this.pos.x > width) {
      this.pos.x = 0;
      this.iscross = true;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.iscross = true;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
      this.iscross = true;
    }
  }

  display() {
    stroke(0);
    fill(255);
    ellipse(this.pos.x, this.pos.y, 50);
  }
}
