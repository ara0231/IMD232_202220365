var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
  world = engine.world;

let elemT = document.querySelector('#canvas');

const MatterShape = [];

// create renderer
var render = Render.create({
  element: elemT,
  engine: engine,
  options: {
    width: 800,
    height: 600,
    showAngleIndicator: true,
    showCollisions: true,
    showVelocity: true,
    wireframes: false,
  },
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// add bodies
// var group = Body.nextGroup(true);

const vertices = [
  { x: 5.5 * 2, y: -4.8 * 2 },
  { x: 7.6 * 2, y: -1.6 * 2 },
  { x: 6.5 * 2, y: 1.8 * 2 },
  { x: 2.7 * 2, y: 4.5 * 2 },
  { x: -1.2 * 2, y: 4.2 * 2 },
  { x: -3.6 * 2, y: 1.9 * 2 },
  { x: -1.3 * 2, y: -2.8 * 2 },
];

var ropeA = Composites.stack(100, 80, 10, 1, 0, 0, function (x, y) {
  return Bodies.polygon(x, y, 8, 21, {
    // collisionFilter: { group: group },
    render: {
      fillStyle: 'Lightpink',
    },
  });
});

Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
  stiffness: 0,
  length: 0,
  // render: { type: 'line' },
});

Composite.add(
  ropeA,
  Constraint.create({
    bodyB: ropeA.bodies[0],
    pointB: { x: -0, y: 0 },
    pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
    // stiffness: 1,
  })
);

// group = Body.nextGroup(true);

var ropeB = Composites.stack(335, 80, 10, 1, 10, 70, function (x, y) {
  return Bodies.circle(x, y, 20, {
    // collisionFilter: { group: group },
    render: {
      fillStyle: 'Lightskyblue',
    },
  });
});

Composites.chain(ropeB, 0.5, 0, -0.5, 0, {
  stiffness: 0,
  length: 0,
  // render: { type: 'line' },
});
Composite.add(
  ropeB,
  Constraint.create({
    bodyB: ropeB.bodies[0],
    pointB: { x: 0, y: 0 },
    pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
    stiffness: 0,
  })
);

// group = Body.nextGroup(true);

var ropeC = Composites.stack(600, 80, 13, 1, 10, 10, function (x, y) {
  return Bodies.rectangle(x - 10, y, 30, 50, {
    // collisionFilter: { group: group },
    chamfer: 5,
    render: {
      fillStyle: 'aqua',
    },
  });
});

Composites.chain(ropeC, 0.5, 0, -0.5, 0, { stiffness: 0, length: 0 });
Composite.add(
  ropeC,
  Constraint.create({
    bodyB: ropeC.bodies[0],
    pointB: { x: -0, y: 0 },
    pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
    stiffness: 1,
  })
);

Composite.add(world, [ropeA, ropeB, ropeC]);

// add mouse control
var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
  min: { x: 0, y: 0 },
  max: { x: 700, y: 600 },
});
