let {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Vertices,
  Bodies,
  Common,
} = Matter;

Common.setDecomp(decomp);

const oW = 1000;
const oH = 600;

let ropeA;
let ropeB;
let ropeC;
let mouse;
let mouseConstraint;

const engine = Engine.create(),
  world = engine.world;

const runner = Runner.create();

function setup() {
  setCanvasContainer('canvas', oW, oH, true);

  let horseShoe = Vertices.fromPath(
    '35 7 19 17 30 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 60 44 33 29 45 23 66 23 66 7 53 7'
  );
  let arrow = Vertices.fromPath('10 0 30 10 40 30 70 20 50 70 30 30 90 50');

  group = Body.nextGroup(true);

  ropeA = Composites.stack(220, 80, 7, 1, 40, 10, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([horseShoe]), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeA, 0.4, 0, -0.4, 0, {
    stiffness: 0.2,
    length: 6,
    // render: { type: 'line' },
  });
  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: 0, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeB = Composites.stack(500, 100, 9, 1, 10, 10, function (x, y) {
    return Bodies.circle(x, y, 20, { collisionFilter: { group: group } });
  });

  Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
    stiffness: 0.8,
    length: 2,
    // render: { type: 'line' },
  });
  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: 0, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  group = Body.nextGroup(true);

  ropeC = Composites.stack(750, 100, 7, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x, y, Common.choose([arrow]), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 0.6, length: 15 });
  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: 0, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  Composite.add(world, [ropeA, ropeB, ropeC]);

  mouse = Mouse.create(canvas.elt);
  // mouse.pixelRatio = (pixelDensity() * width) / oW;
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.1,
    },
  });

  Composite.add(world, mouseConstraint);

  background(30);
  Runner.run(runner, engine);
}

function draw() {
  mouse.pixelRatio = (pixelDensity() * width) / oW;
  background(40);

  noStroke();

  fill('Lightskyblue');
  ropeA.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex((eachVertex.x / oW) * width, (eachVertex.y / oH) * height);
      });
      endShape(CLOSE);
    });
  });

  fill('Lightpink');
  ropeB.bodies.forEach((eachBody) => {
    beginShape();
    eachBody.vertices.forEach((eachVertex) => {
      vertex((eachVertex.x / oW) * width, (eachVertex.y / oH) * height);
    });
    endShape(CLOSE);
  });

  fill('aqua');
  ropeC.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex((eachVertex.x / oW) * width, (eachVertex.y / oH) * height);
      });
      endShape(CLOSE);
    });
  });
}
