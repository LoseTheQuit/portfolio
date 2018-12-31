let x_vals = [];
let y_vals = [];

let m, b;

const learningRate = 0.2;
const optimizer = tf.train.sgd(learningRate);

function setup() {
  createCanvas(640, 360);
  m = tf.variable(tf.scalar(random(1)));
  b = tf.variable(tf.scalar(random(1)));
}

function mousePressed() {
  let x = map(mouseX, 0, width, 0, 1);
  let y = map(mouseY, 0, height, 1, 0);

  x_vals.push(x);
  y_vals.push(y);
}

function predict(_x) {
  // y = mx + b
  const tfxs = tf.tensor1d(_x);
  const ys = tfxs.mul(m).add(b);
  return ys;
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

  for (let i = 0; i < x_vals.length; i++) {
    let px = map(x_vals[i], 0, 1, 0, width);
    let py = map(y_vals[i], 0, 1, height, 0);
    point(px, py);
  }

  if (x_vals.length > 0) {
    tf.tidy(() => {
      const __ys = tf.tensor1d(y_vals);
      optimizer.minimize(() => loss(predict(x_vals), __ys));

      let lineX = [0, 1];
      let ys = predict(lineX);
      // ys.print();

      let x1 = map(lineX[0], 0, 1, 0, width);
      let x2 = map(lineX[1], 0, 1, 0, width);

      let lineY = ys.dataSync();

      // console.log(lineY);
      let y1 = map(lineY[0], 0, 1, height, 0);
      let y2 = map(lineY[1], 0, 1, height, 0);
      //
      line(x1, y1, x2, y2);
    });

    tf.tidy(() => {});
  }
}
