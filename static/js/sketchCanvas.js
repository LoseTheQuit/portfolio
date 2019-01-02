let x_vals = [];
let y_vals = [];

let m, a, b, c, d;

const learningRate = 0.2;
const optimizer = tf.train.sgd(learningRate);

function setup() {
  createCanvas(360, 360);
  // createCanvas(640, 360);
  m = tf.variable(tf.scalar(random(-1, 1)));
  a = tf.variable(tf.scalar(random(-1, 1)));
  b = tf.variable(tf.scalar(random(-1, 1)));
  c = tf.variable(tf.scalar(random(-1, 1)));
  d = tf.variable(tf.scalar(random(-1, 1)));
}
function mouseDragged() {
  let x = map(mouseX, 0, width, -1, 1);
  let y = map(mouseY, 0, height, 1, -1);

  x_vals.push(x);
  y_vals.push(y);
}

function mousePressed() {
  let x = map(mouseX, 0, width, -1, 1);
  let y = map(mouseY, 0, height, 1, -1);

  x_vals.push(x);
  y_vals.push(y);
}

function predict(_x) {
  // y = xx + b
  const _xs = tf.tensor1d(_x);
  // const ys = _xs.mul(m).add(b);
  // return ys;

  // y = ax^2 + bx + c
  // const ys = _xs
  //   .square()
  //   .mul(a)
  //   .add(_xs.mul(b).add(c));
  // return ys;
  // y = ax^3 + bx^2 + cx + d
  return _xs
    .pow(tf.scalar(3))
    .mul(a)
    .add(_xs.square().mul(b))
    .add(_xs.mul(c))
    .add(d);
}

function loss(pred, label) {
  return pred
    .sub(label)
    .square()
    .mean();
}

function draw() {
  background(255);
  stroke(0);
  strokeWeight(8);

  line(0, height, 0, 55);

  for (let i = 0; i < x_vals.length; i++) {
    let px = map(x_vals[i], -1, 1, 0, width);
    let py = map(y_vals[i], -1, 1, height, 0);

    console.log(px, py);
    point(px, py);
  }

  if (x_vals.length > 0) {
    tf.tidy(() => {
      const __ys = tf.tensor1d(y_vals);
      optimizer.minimize(() => loss(predict(x_vals), __ys));
      //////
    });
    tf.tidy(() => {
      const curveX = [];

      for (let x = -1; x <= 1.01; x += 0.05) {
        curveX.push(x);
      }

      let ys = predict(curveX);
      let curveY = ys.dataSync();

      beginShape();
      noFill();
      stroke(0);
      strokeWeight(2);
      for (let i = 0; i < curveX.length; i++) {
        let x = map(curveX[i], -1, 1, 0, width);
        let y = map(curveY[i], -1, 1, height, 0);
        vertex(x, y);
      }
      endShape();
    });
  }
}
