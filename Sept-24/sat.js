// JavaScript - Test Class /  Interview Class / Revision Class

// First Name of jS
// Launched Year of JS
//

// var, let and const
// what is variable ?
// hoisting

// primitive: Number, String, Boolean, null, undefined.
// Non-prim : Array and Object

// Math
// const PI = Math.PI;

// console.log(Math.floor(9.91));
// console.log(Math.min(-5, -3, 2, 4, 6));
/*
Math.round
Math.pow(3,3)

*/

// Math.random() = > 0 to 0.9999999999

// let randnum = Math.floor(Math.random() * 10);
// console.log(randnum);

// String
// let user = "Anurag";
// let username = "Anurag";

// console.log(user.toUpperCase());
// console.log(user.length);

// Coercion in JavaScript

// Operator
// + , - * / % ** pow

// ==, >< >= <= != , ===

// && ||
// conditions
// if, if else , if -  else if - else , switch , ternary op
// let rating = 5;
// if (rating == 3) {
//   console.log("Four");
// } else if (rating == 5 || rating == 1) {
//   console.log("Five");
// } else {
//   console.log("Rating not given");
// }

//
// let user = "Hitesh Sir";
// switch (user) {
//   case "Hitesh_Sir":
//     console.log("Hitesh Sir");
//     break;
//   case "Anurag":
//     console.log("Anurag Tiwari");
//     break;
//   default:
//     console.log("Hello World");
//     break;
// }
// condition ? true event : false event

// let raining = true;

// raining ? console.log("It is Raining") : console.log("Not Raining");
// For  loop

// for (let i = 0; i <= 5; i = i + 1) {
//   console.log(`${i}`);
// }

// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// Array

// let students = ["Shivam", "Noman", "Sudhadip", "Akash", "Anitha", "Alfiya"];
// let UpperStud = [];

// for (let i = 0; i < students.length; i++) {
//   UpperStud.push(students[i].toUpperCase());
// }
// console.log(UpperStud);

// for of
// for (let element of array){ }

// let arr1 = [1, 2, 3, 4, 5];
// for (let elem of arr1) {
//   console.log(elem);
// }

// let names = {
//   anurag: 97,
//   Shubham: 98,
//   hiteshsir: 100,
//   students: ["Stud1", "Stud2", "stud3"],
//   username: function () {
//     return this.anurag;
//   },
// };
// console.log(names.username());
// console.log(names.students[1]);

// Date

// let some = new Date();
// console.log(some.toString());

// break and con

// Function

// function sum() {
//   let sums = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sums = sums + arguments[i];
//   }
//   return sums;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7));

// Arrow function
const dec = () => {
  console.log("Anurag");
};

dec();
