class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
  }

  attract(mover) {
    let dirV = p5.Vector.sub(this.pos, mover.pos);
    let dist = dirV.mag();

    dust = constrain(dist, 5, 25);

    let str = (this.mass * mover.mass) / dist ** 2;
    return dirV.setMag(str);
  }

  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
