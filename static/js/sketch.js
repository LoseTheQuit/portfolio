// const learningRate = 0.1;
// // THIS IS THE MODEL
// const model = tf.sequential();
//
// // CREATE THE HIDDEN
// const hidden = tf.layers.dense({
//   units: 4,
//   inputShape: [2],
//   activation: "sigmoid"
// });
// // ADD THE LAYER
// model.add(hidden);
//
// // CREATER AN OPTIZER
// const output = tf.layers.dense({
//   units: 1,
//   // units: 3,
//   activation: "sigmoid"
// });
//
// model.add(output);
//
// // CREATE A STOCHASTIC GRADIENT DESCENT OPTIMIZER
// const sgd_optimizer = tf.train.sgd(learningRate);
//
// // COMPLILE MODEL
// model.compile({
//   optimizer: sgd_optimizer,
//   loss: "meanSquaredError"
// });
//
// // const xs_inputs = tf.tensor2d([
// //   [0.25, 0.92],
// //   [0.52, 0.62],
// //   [0.25, 0.52],
// //   [0.64, 0.94],
// //   [0.34, 0.22]
// // ]);
// //
// // const ys_outputs = tf.tensor2d([
// //   [0.25, 0.92, 0.03],
// //   [0.52, 0.62, 0.03],
// //   [0.25, 0.52, 0.03],
// //   [0.64, 0.94, 0.03],
// //   [0.34, 0.22, 0.03]
// // ]);
//
// const xs_inputs = tf.tensor2d([
//   // SMOOTH
//   [0, 0],
//   [0.5, 0.5],
//   [1, 1]
//   // SMOOTH
// ]);
//
// const ys_outputs = tf.tensor2d([
//   // SMOOTH
//   [1],
//   [0.5],
//   [0]
//   // SMOOTH
// ]);
// var startTime = performance.now();
//
// async function train() {
//   const config = {
//     shuffle: true,
//     // epochs: 2
//     epochs: 10,
//     callbacks: {
//       onEpochEnd: function(epoch, log) {
//         console.log(`Epoch ${epoch}: loss = ${log.loss}`);
//       }
//     }
//   };
//
//   for (let x = 0; x < 1000; x++) {
//     const response = await model.fit(xs_inputs, ys_outputs, config);
//     // console.log(`INDEX ${x}`);
//     // console.log(response.history.loss[0]);
//   }
// }
//
// // 1000/5
// // Tensor
// //     [[0.9621034],
// //      [0.4909495],
// //      [0.0672191]]
// // 1000/2
// // Tensor
// //     [[0.9095705],
// //      [0.4766962],
// //      [0.1204459]]
//
// train().then(() => {
//   const outputs = model.predict(xs_inputs);
//   outputs.print();
//   console.log("Training Complete!");
//   var endTime = performance.now();
//   console.log(
//     `Call to doSomething took ${(endTime - startTime) / 1000} seconds.`
//   );
// });
