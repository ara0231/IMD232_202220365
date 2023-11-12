class MatterRect {
  constructor(x, y, w, h, options) {
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, this.w, this.h, options);
    Composite.add(matterEngine.world, this.body);
    // console.log(this.body);
  }

  display() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
  }

  isDead() {
    return this.body.position.y > height + 100;
  }

  remove() {
    Composite.remove(matterEngine.world, this.body);
  }
}
