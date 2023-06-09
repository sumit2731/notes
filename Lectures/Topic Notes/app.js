var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var handleCb = cb => cb(null);

// add tests
suite.
  add('new function', function() {
    handleCb(function(error, res) {});
  }).
  add('new promise', function() {
    return new Promise((resolve, reject) => {});
  }).
  add('promise resolve', function() {
    Promise.resolve().then(() => {});
  }).
  on('cycle', function(event) {
    console.log(String(event.target));
  }).
  on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  }).
  run();