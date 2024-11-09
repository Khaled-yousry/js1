// ---------------------1----------------
// var X = window.prompt("please enter number..");
// console.log(X);
// ---------------------2---------------
// var y = window.prompt("please enter number..");
// if (y % 3 === 0 && y % 4 === 0) {
//   console.log("yes");
// } else {
//   console.log("No");
// }
// ---------------------3--------------
// var x = +window.prompt("please enter number1..");
// var y = +window.prompt("please enter number2..");

// if (x > y) {
//   console.log(x);
// } else if (x < y) {
//   console.log(y);
// }
// ---------------------4--------------
// var x = +window.prompt("please enter number1..");

// if (x >= 0) {
//   console.log("positive");
// } else if (x < 0) {
//   console.log("negative");
// }
// ---------------------5--------------
// var num1 = +window.prompt("please enter number1..");
// var num2 = +window.prompt("please enter number2..");
// var num3 = +window.prompt("please enter number3..");

// var max = 0;
// if (num1 >= num2 && num1 >= num3) {
//   max = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   max = num2;
// } else {
//   max = num3;
// }
// var min = 0;
// if (num1 < num2 && num1 < num3) {
//   min = num1;
// } else if (num2 < num1 && num2 < num3) {
//   min = num2;
// } else {
//   min = num3;
// }
// console.log("max=" + max);
// console.log("min=" + min);

// ---------------------6--------------

// var x = +window.prompt("please enter number...");

// if (x % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// ---------------------7--------------
// var x = window.prompt("please enter character...");

// if (
//   x === "a" ||
//   x === "e" ||
//   x === "i" ||
//   x === "o" ||
//   x === "u" ||
//   x === "A" ||
//   x === "E" ||
//   x === "I" ||
//   x === "O" ||
//   x === "U"
// ) {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }
// ---------------------8--------------

// var x = +window.prompt("please enter number...");

// for (i = 1; i <= x; i++) {
//   console.log(i);
// }
// ---------------------9--------------
// var x = +window.prompt("please enter number...");

// for (i = 1; i <= 12; i++) {
//   console.log(x * i);
// }
// ---------------------10--------------
// var x = +window.prompt("please enter number...");
// for (i = 1; i <= x; i++) {
//   if (i % 2 === 0) {
//     console.log("even=" + i);
//   }
// }
// ---------------------11--------------
// var sum = 1;
// var x = +window.prompt("please enter number1...");
// var y = +window.prompt("please enter number2...");
// for (i = 0; i < y; i++) {
//   sum = sum * x;
// }
// console.log(sum);
// ---------------------12--------------

// var x1 = +window.prompt("please enter subject1 mark...");
// var x2 = +window.prompt("please enter subject2 mark...");
// var x3 = +window.prompt("please enter subject3 mark...");
// var x4 = +window.prompt("please enter subject4 mark...");
// var x5 = +window.prompt("please enter subject5 mark...");
// var sum = x1 + x2 + x3 + x4 + x5;
// var avg = sum / 5;
// var percentage = (avg * 100) / 100;
// console.log("sum=" + sum);
// console.log("avg=" + avg);
// console.log("percentage=" + percentage);
// ---------------------13--------------
// var x = +window.prompt("please enter month...");
// if (
//   x === 1 ||
//   x === 3 ||
//   x === 5 ||
//   x === 7 ||
//   x === 8 ||
//   x === 10 ||
//   x === 12
// ) {
//   console.log("Days in Month:31");
// } else if (x === 4 || x === 6 || x === 9 || x === 11) {
//   console.log("Days in Month:30");
// } else {
//   console.log("Days in Month:28");
// }
// ---------------------14--------------
// var x1 = +window.prompt("please enter Physics...");
// var x2 = +window.prompt("please enter Chemistry...");
// var x3 = +window.prompt("please enter Biology...");
// var x4 = +window.prompt("please enter Mathematics...");
// var x5 = +window.prompt("please enter Computer...");
// var totalGrade = x1 + x2 + x3 + x4 + x5;
// var Percentage = (totalGrade / (5 * 100)) * 100;
// if (Percentage >= 90 && Percentage <= 100) {
//   console.log("Grad A");
// } else if (Percentage >= 80 && Percentage < 90) {
//   console.log("Grad B");
// } else if (Percentage >= 70 && Percentage < 80) {
//   console.log("Grad C");
// } else if (Percentage >= 60 && Percentage < 70) {
//   console.log("Grad D");
// } else if (Percentage >= 40 && Percentage < 60) {
//   console.log("Grad E");
// } else {
//   console.log("Grad F");
// }
// ---------------------15--------------
// var x = +window.prompt("please enter month...");
// switch (x) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Days in Month:31");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Days in Month:30");
//     break;
//   case 2:
//     console.log("Days in Month:28");
//     break;
// }
// ---------------------16--------------
// var x = window.prompt("please enter character...");

// switch (x) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }
// ---------------------17--------------
// var x = +window.prompt("please enter number1..");
// var y = +window.prompt("please enter number2..");

// switch (x > y) {
//   case true:
//     console.log(x);
//     break;
//   case false:
//     console.log(y);
//     break;
// }
// ---------------------18--------------
// var x = +window.prompt("please enter number...");

// switch (x % 2 === 0) {
//   case true:
//     console.log("even");
//     break;
//   case false:
//     console.log("odd");
//     break;
// }
// ---------------------19--------------
// var x = +window.prompt("please enter number1..");

// switch (x > 0) {
//   case true:
//     console.log("positive");
//     break;
//   case false:
//     if (x < 0) {
//       console.log("negative");
//     } else {
//       console.log("zero");
//     }
//     break;
// }
// ---------------------20--------------
// var x = +window.prompt("please enter number1...");
// var z = window.prompt("please enter operator...");
// var y = +window.prompt("please enter number2...");
// switch (z) {
//   case "+":
//     console.log(x + y);
//     break;
//   case "-":
//     console.log(x - y);
//     break;
//   case "*":
//     console.log(x * y);
//     break;
//   case "/":
//     console.log(x / y);
//     break;
// }
