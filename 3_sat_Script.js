// Changing Datatype
// String to number
// let fakenum = "25";

// let orgNum = Number(fakenum);
// console.log(typeof orgNum);
// console.log(typeof fakenum);

// Number to string

// let newnum = 25;
// let strnum = String(newnum);
// console.log(typeof strnum);

// Destructuring and Spread

// let arrayone = [1, 2, 3, 4, 5];

// let [a, b, c, d, e] = arrayone;
// console.log(c);

// let fullstack = [
//   ["html", "css", "js", "tailwind"],
//   ["nodejs", "express", "mongodb"],
// ];

// let [frontend, backend] = fullstack;

// console.log(frontend);

// let arrayone = [1, 2, 3, 4, 5];
// let [a, , b, , c] = arrayone;
// console.log(c);

// let arrayone = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let [a, b, ...anurag] = arrayone;

// console.log(a, b);
// console.log(anurag);

// Spread and rest
// function sum(x, y) {
//   return x + y;
// }

// let vari = [5, 7];
// console.log(sum(...vari)); //Spread Op

// REST

// function sumtwo(...args) {
//   console.log(args); // Array
//   let sum = 0;
//   for (let a of args) {
//     sum = sum + a;
//   }
//   return sum;
// }
// console.log(sumtwo(1, 2, 3, 4, 5));

//NEW
// new is a keyword

// let person = {}
// let person = {
//   name: "Anurag",
// };
// console.log(person.name);

// let person = new Object();
// person.name = "Anurag";
// console.log(person);

// var person = function (firstname, coursecount) {
//   this.firstname = firstname;
//   this.coursecount = coursecount;

// };

// var anurag = new person("Anurag", 7);
// console.log(anurag);

// var anirudh = new person("Anirudh", 5);
// console.log(anirudh);

// let now = new Date();

// Set and map
//Set - > Set only contain the unique elements

// let a = [1, 2, 3, 1, 2, 3, 4, 3, 2, 4, 1, 2, 4, 1, 12, 3, 4];

// let num = new Set(a);
// console.log(num);
// num.add(5);
// console.log(num);
// num.delete(12);
// console.log(num);
// console.log(num.has(7));
// for (let i of num) {
//   console.log(i);
// }

// Maps
//
// getter and setter

// let newmap = new Map();
// console.log(newmap);
// newmap.set("1", "one");
// newmap.set(1, "one");
// newmap.set(true, "one");

// console.log(newmap);

// {1:"one"} //object
// {1,2,3,4,5} //set
// {'1' => 'one', 1 => 'one', true => 'one'} //map // FAT ARROW

// let city = [
//   ["India", "Delhi"],
//   ["Gujarat", "Surat"],
//   ["Raj", "jaipur"],
// ];

// let newmap = new Map(city);
// console.log(newmap);
// console.log(newmap.get("India"));

// for (let [keys, values] of newmap) {
//   console.log(key.keys());
// }

// foreach and for of

// Closure
//

// Sce

// function outer() {
//   let varibale = "Seven";
//   function inner() {
//     console.log(varibale);
//   }
//   inner();
// }
// outer();

// console.log("Clouser");

function outer() {
  let var1 = "Anurag";
  function inner() {
    console.log(var1);
  }
  return inner;
}
let var1 = outer();
var1();
