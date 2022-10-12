// 1
// var a = "Shailraj";
// var b = (5<3);
// var c;
// var d = null;

// console.log(`
// value of a : ${a} and type : ${typeof(a)}
// value of a : ${b} and type : ${typeof(b)}
// value of a : ${c} and type : ${typeof(c)}
// value of a : ${d} and type : ${typeof(d)}
// `);

//2

// var fn = 'raj';
// var ln = 'shailraj';
// var ms = 'singlexd';
// var con = 'india';
// var age = 21;

// console.log(`

// My full name is ${fn + ' ' + ln}
// marital status ${ms}
// my country is ${con}
// i am ${age}
// `);

//  3

// var a = "Shailraj";
// console.log(a.toUpperCase());

// 4

// var a = 'javascript is love';
// console.log(a.includes('script'));

// 5

// var a = 'Shairlaj v raj';
// console.log(a.split('-'));

//6

// var a = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(a.split(','));

//7

// var a = 'Facebook, script, Google, Microsoft, Apple, IBM, Oracle, script, Amazon';
// console.log(a.lastIndexOf('script'));

//8

// var a = 'You cannot end a sentence with because because because is a conjunction';
// console.log(a.search('because'));

//9

// var a = '   raj shailraj vijaysinh  '
// console.log(a.trim());

//10
// console.log('falsy value exmple');
// var a = 1 === "1";
// var b = 10 == 5;
// var c = 1 > 5;
// var d = -1 === 1;

// console.log(`
//              ${a}
//              ${b}
//              ${c}
//              ${d}
//              `);

// var e = 1 == "1";
// var f = 10 != 5;
// var g = 1 < 5;
// var h = -1 != 1;

// console.log('truthy value exmple');
// console.log(`
//              ${e}
//              ${f}
//              ${g}
//              ${h}
//              `);

//11

// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');

// var a = 'python';
// var b = 'jaguar';

// console.log(a.length);
// console.log(b.length);

// console.log(a.length > b.length);

//12

// let d = new Date();

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getMinutes());

//13

// var area = function (base,height){
//     let area = 0.5 * base * height
//     console.log(`triangle which base = ${base} and
//     height = ${height}
//     area = ${area}`);
// }

// area(5,10);

//14

// var slope = function (x1,y1,x2,y2){
//     m = (y2-y1)/(x2-x1)
//     console.log(`slope of ${x1},${y1} and ${x2},${y2} = ${m}`);
// }

// slope(8,9,7,8);

//15

// console.log(`Calculate the slope, x-intercept and y-intercept of y = 2x -2 for y-intercept take x = 0`);

// let xIntercept = function (x) {
//     y = 2x - 2 ;                 //ERROR ERROR ERROR ERROR ERROR
//   console.log(`slope of x-intercept is ${y}`);
// };
// xIntercept(0)

// console.log(`Calculate the slope, x-intercept and y-intercept of y = 2x -2 for x-intercept take y = 0`);

// let yIntercept = function (y) {

//     x = (y + 2) / 2
//   console.log(`slope of y-intercept is ${x}`);
// };
// yIntercept(0)

//16

//let radius = prompt("Enter radius of circle : ")
// let radius = 5
// const pi = Math.PI
// if (radius != null) {
//     console.log(`Area of Circle with radius ${radius} is = ${pi * radius * radius}

//     and

//     circumference of a circle is =  ${2 * pi * radius}`);
//   }

//17

// let dateFormater = function (date, seprator) {
//   let day = date.getDate();
//   let month = date.getMonth() + 1; //  +1 because .getMonth reuren 0 to 11
//   let year = date.getFullYear();

//   if (day < 10) {
//     day = "0" + day;
//   }
//   if (month < 10) {
//     month = "0" + month;
//   }

//   //  // return day + " " + seprator + " " + month + " " + seprator + " " + year;
//   return year + " " + seprator + " " + month + " " + seprator + " " + day;
// };

// let now = new Date();

// console.log(dateFormater(now, "/"));
// console.log(dateFormater(now, "-"));

// just playing with date language

// let date = new Date();
// let options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   timeZone: 'UTC'
// };
// console.log(date.toLocaleDateString('hi-IN', options));

//18

//    //let age = prompt("Enter Your age : ")

// let age = 19 ;

// if (age >= 18) {
//   console.log("You are old enoug to drive");
// } else if (age < 18) {
//     console.log("wait till 18 to drive vehicle");
// } else {
//     console.log("Enter proper input 😡");
// }

//19

//      // const number = prompt("Enter a number: ");

// const number = 20;

// if (number % 2 == 0) {
//   console.log("The number is even and reminder is zero");
// } else {
//   console.log("The number is odd.");
// }

//20

// let score = 91;

// switch (score != 0) {
//   case score <= 100 && score >= 80:
//     console.log("You got A grade");
//     break;
//   case score <= 79 && score >= 70:
//     console.log("You got B grade");
//     break;
//   case score <= 69 && score >= 60:
//     console.log("You got C grade");
//     break;
//   case score <= 59 && score >= 50:
//     console.log("You got D grade");
//     break;
//     case score <= 49 && score >= 0:
//     console.log("You got F grade");
//     break;
//   default:
//     console.log("You got 🍔 not grade");
// }

//21

// let month = "decenber";

// if (month == "june" || month == "july" || month == "august") {
//   console.log("its summer ☀️");
// } else if (month == "march" || month == "epril" || month == "may") {
//   console.log("its spring");
// } else if (month == "decenber" || month == "january" || month == "february") {
//   console.log("its winter ❄️");
// } else if (month == "september" || month == "october" || month == "november") {
//   console.log("its autumn ");
// } else {
//   console.log("enter proper input");
// }

//22

// function daysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }

// console.log(daysInMonth(2, 2009));
// console.log(daysInMonth(11, 2009));

//23

// function monthNameToMonth(monthName) {
//   const months = {
//     january: 1,
//     february: 2,
//     march: 3,
//     april: 4,
//     may: 5,
//     june: 6,
//     july: 7,
//     august: 8,
//     september: 9,
//     october: 10,
//     november: 11,
//     december: 12,
//   };
//   return months[monthName.toLowerCase()];
// }

// function getDaysInMonth(year, month) {
//   return new Date(year, month, 0).getDate();
// }

// function formatDaysInMonth(year, monthName) {
//   let month = monthNameToMonth(monthName);
//   let days = getDaysInMonth(year, month);
//   monthName =
//     monthName.toUpperCase().slice(0, 1) + monthName.toLowerCase().slice(1);
//   return `${monthName} ${year} has ${days} days`;
// }

// let monthName = prompt("Enter the month name:");
// let year = prompt("Enter the year:");
// console.log(formatDaysInMonth(year, monthName));

//24

