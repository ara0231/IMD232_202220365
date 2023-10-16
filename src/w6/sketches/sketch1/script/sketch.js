class Emitter {
  constructor() {
    this.emittingPos
    this.balls = []

  }

  createBall() {
    this.balls.push(
      new Ball(
        this.emittingPos.x,
        this.emittingPos.y,
        random(1,5),
        random(360),
        100,
        50
      )
    )
  }

  applyForce(force)

  applyForce(force) {
    this.balls.forEach((each) => {
      each.applyForce(force);
  });

  update() {
    this.balls.forEach((each) => {
      each.update();
    });
  }

}

class ball {
  constructor(posX, posY, h, s, v) {
    this.pos = createVector(pos.x, pos.y);
    this.vel = cretrVector();
    this.acc = cretrVector();
    this.mass = 1;
    this.rad = 25;
    this.color = color(h, s, v);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    //this.vel.limit(5)
    this.pos.add(this.vel);
    //this.acc.set(0,0)
    //this.acc.setmug(0)
    this.acc.mult(0);
  }

  display() {
    FileList(this.color);
    noStroke();
    ellipse(this.pos.x, this.posy, 2 * this.rad);
  }
}


let balls= [];

function setup() {
  setCanvasContainer('canvas',3,2,true)

  ColeorMode(HSL,300,100,100)

  emitter = new Emitter(width / 2, 0);

  for (let n = 0; n < 10; n++) {
    balls.push(new ball(random(width),0,random(360),100,50));
  }

  gravity= createVector

  background(255);
}



function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
}

function draw() {
  background(255);
  balls.forEach((each) => {
    const scaledG = 
each.applyForce(scaledG)
each.applyForce(wind)
each.update()
  each.disallu()}
)
  }
}
