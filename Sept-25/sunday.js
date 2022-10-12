// HOF

// Callback

// function greet(userName, callback) {
//   console.log("Hello ", userName);
//   callback();
// }
// function callback() {
//   console.log("I am call back");
// }
// greet("Anurag", callback);

// const callback = (n) => {
//   return n ** 2;
// };

// function squ(callback, n) {
//   return callback(n) * n;
// }

// console.log(squ(callback, 5));

// settimeout
// function CourseName() {
//   console.log("Welcome to JS Bootcamp");
// }

// setTimeout(CourseName, 2000);

// setTimeout(() => {
//   console.log("Welcome to JS BootCamp");
// }, 3000);

// setInterval

// setInterval(() => {
//   console.log("Refresh the Page");
// }, 2000);

// foreach
// Only work with array

// const greet = ["Hey", "Hi", "Hello", "Hola"];
// greet.forEach((val) => {
//   console.log(val);
// });

// map : iterate and modify
// const num = [1, 2, 3, 4, 5];
// let abc = num.map((val) => {
//   return val * val;
// });
// console.log(abc);

// Filter

// const countries = ["India", "Germany", "Japan", "England", "Finland", "Africa"];
// const ret = countries.filter((country) => {
//   return country.includes("ia");
// });
// console.log(ret);

// reduce

// const choc = [1, 2, 3, 4, 5];
// const wrap = choc.reduce((acc, pos) => acc  pos, 2);
// console.log(wrap);

// Sort
// const names = ["HiteshSir", "Anurag", "Anirud", "Mithun", "SuryaSir"];
// console.log(names.sort());

// Des =>  Spread and Rest

// function sum(x, y) {
//   return x + y;
// }

// let vari = [1, 2];
// console.log(sum(...vari)); // Spred

// function sumTwo(...args) {
//   console.log(args);
//   args;
// }

// sumTWo(1, 2, 3, 4, 5, 6, 7, 8);

// New

// set and map

// let tech = [
//   "html",
//   "CSS",
//   "js",
//   "nodejs",
//   "reactjs",
//   "html",
//   "css",
//   "js",
//   "Angular",
// ];

// let abc = new Set(tech);
// console.log(abc);

// Map

let map = new Map();
// console.log(map);
// Setter
// map.set("1", "Str1");
// map.set(true, "Str2");
// map.set(1, "Str3");
// console.log(map);

// console.log(map.get(1));

// closure

// function Gradparent() {
//   let dad = "Hello Dad";
//   function parent() {
//     console.log(dad);
//   }
//   parent();
// }

// Gradparent();

// function grandpran() {
//   let dad = "Hello Dad";
//   function par() {
//     console.log(dad);
//   }
//   return par;
// }

// let var2 = grandpran();
// var2();

// try and catch
// try {
//   let firstname = "Anurag";
//   console.log(firstname + " " + lastname);
// } catch (err) {
//   console.log(err.name);
// } finally {
//   console.log("I will run");
// }
// console.log("Hello World");

// promise
// callback, .then .catch, async await
// pending, resolve and rejected

// const MakePromise = new Promise((resolve, rejected) => {
//   setTimeout(() => {
//     const Exam = ["HTMl", "CSS", "JS", "Tailwind"];
//     if (Exam.length > 0) {
//       resolve("Done");
//     } else {
//       rejected("Rejected");
//     }
//   }, 2000);
// });

// MakePromise.then((result) => {
//   console.log(result);
// }).catch((result) => {
//   console.log(result);
// });

// Async await

// const uno = () => {
//   return "I am One";
// };

// const dos = () => {
//   return new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve("I am Two");
//     }, 2000);
//   });
// };

// const tres = () => {
//   return "I am three";
// };

// const call = async () => {
//   let one = uno();
//   console.log(one);

//   let two = await dos();
//   console.log(two);

//   let three = tres();
//   console.log(three);
// };

// call();

// fetch
// const url = "https://restcountries.com/v2/all"; // Countires API

// fetch(url)
//   .then((result) => result.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// DOM
