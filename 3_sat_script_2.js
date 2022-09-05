//Scope: Where to look for things
// Q. What it is that we are looking for
// JavaScript is a Synchronous single threaded lang
// Inside the Execution Context

var a = 10;
var b = 25;
var c = 30;
function sum() {
  var a = 10;
  var b = 20;
  return a + b;
}
var total = sum();
sum();
