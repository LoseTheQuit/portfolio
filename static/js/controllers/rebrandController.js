"use strict";

console.log("outer rebrandController");

angular
  .module("shell")
  .controller("rebrandController", function($scope, shellService) {
    console.log("rebrandController initialized!");
    $scope.trafficSpy = function(x) {
      var dataToSend = {};

      $.get("https://api.ipify.org?format=json", function(data, error) {
        dataToSend.site = "LTQ";
        dataToSend.ip = data.ip;
        dataToSend.referrer = document.referrer;
        dataToSend.vendor = navigator.vendor;
        dataToSend.userAgent = navigator.userAgent;
        dataToSend.platform = navigator.platform;
        dataToSend.language = navigator.language;
        dataToSend.hostname = window.location.hostname;

        if (document.referrer) {
          dataToSend.referrer = document.referrer;
        } else {
          dataToSend.referrer = "Direct";
        }

        // if (error === 'success') {
        if (error === "success" && window.location.hostname !== "localhost") {
          console.log(`traffic-spy`);
          console.log(error);

          shellService.trafficSpy(dataToSend, function(response) {
            console.log(response);
          });
        }
      });
    };

    $scope.trafficSpy();

    const learningRate = 0.1;
    // THIS IS THE MODEL
    const model = tf.sequential();

    // CREATE THE HIDDEN
    const hidden = tf.layers.dense({
      units: 4,
      inputShape: [6],
      activation: "relu"
    });
    // ADD THE LAYER
    model.add(hidden);

    // CREATER AN OPTIMIZER
    const output = tf.layers.dense({
      units: 1,
      // units: 3,
      activation: "sigmoid"
    });

    model.add(output);

    // CREATE A STOCHASTIC GRADIENT DESCENT OPTIMIZER
    const sgd_optimizer = tf.train.sgd(learningRate);

    // COMPLILE MODEL
    model.compile({
      optimizer: sgd_optimizer,
      loss: "meanSquaredError"
    });

    // const xs_inputs = tf.tensor2d([
    //   [0.25, 0.92],
    //   [0.52, 0.62],
    //   [0.25, 0.52],
    //   [0.64, 0.94],
    //   [0.34, 0.22]
    // ]);
    //
    // const ys_outputs = tf.tensor2d([
    //   [0.25, 0.92, 0.03],
    //   [0.52, 0.62, 0.03],
    //   [0.25, 0.52, 0.03],
    //   [0.64, 0.94, 0.03],
    //   [0.34, 0.22, 0.03]
    // ]);

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

    const xs_inputs = tf.tensor2d([
      // SMOOTH
      [0, 0],
      [0.5, 0.5],
      [1, 1]
      // SMOOTH
    ]);

    const ys_outputs = tf.tensor2d([
      // SMOOTH
      [1],
      [0.5],
      [0]
      // SMOOTH
    ]);

    let startTime;

    async function train() {
      startTime = performance.now();
      const config = {
        shuffle: true,
        // epochs: 3,
        callbacks: {
          onEpochEnd: function(epoch, log) {
            console.log(`Epoch ${epoch}: loss = ${log.loss}`);
          }
        }
      };

      for (let x = 0; x < 1000; x++) {
        const response = await model.fit(xs_inputs, ys_outputs, config);
      }

      console.log("Training Complete!");
    }

    // 1000/10
    // Tensor
    // [[0.9739702],
    //  [0.4975101],
    //  [0.0370057]]
    // 1000/5
    // Tensor
    //     [[0.9621034],
    //      [0.4909495],
    //      [0.0672191]]
    // 1000/3
    // Tensor
    // [[0.9336932],
    //  [0.484575 ],
    //  [0.0889973]]
    // 1000/2
    // Tensor
    //     [[0.9095705],
    //      [0.4766962],
    //      [0.1204459]]

    train().then(() => {
      const outputs = model.predict(xs_inputs);
      outputs.print();

      const endTime = performance.now();
      console.log(`Training took ${(endTime - startTime) / 1000} seconds.`);
    });

    $scope.ngTrain = (x, _x) => {
      startTime = performance.now();

      train().then(() => {
        const outputs = model.predict(xs_inputs);
        outputs.print();

        const endTime = performance.now();
        console.log(`Training took ${(endTime - startTime) / 1000} seconds.`);
      });
    };

    $scope.evaluate = (x, _x) => {
      console.log(x, _x);
      const inputs = tf.tensor2d([[x, _x]]);
      const outputs = model.predict(inputs);
      outputs.print();
      console.log(`Test Complete! ${Date.now()}`);
    };
  });
