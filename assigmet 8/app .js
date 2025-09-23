// questio 1

// Take input from user
// let char = prompt("Enter a character (number or letter):");

// Get ASCII code of the first character
// let ascii = char.charCodeAt(0);

// // Check conditions
// if (ascii >= 48 && ascii <= 57) {
//     alert("The input is a Number.");
// }
// else if (ascii >= 65 && ascii <= 90) {
//     alert("The input is an Uppercase Letter.");
// }
// else if (ascii >= 97 && ascii <= 122) {
//    alert("The input is a Lowercase Letter.");
// }
// else {
//    alert("The input is not a number or letter.");
// }

// question 2

// Take two integers as input
// let num1 = +prompt("Enter the first integer:");
// let num2 = +prompt("Enter the second integer:");

// // Compare the numbers
// if (num1 > num2) {
//     alert(num1 + " is larger than " + num2);
// }
// else if (num2 > num1) {
//    alert(num2 + " is larger than " + num1);
// }
// else {
//     alert("Both numbers are equal.");
// }

// questio 3 

// Take input from user
// let number = prompt("Enter a number:");

// // Check conditions
// if (number > 0) {
//     alert(number + " is a Positive number.");
// }
// else if (number < 0) {
//     alert(number + " is a Negative number.");
// }
// else {
//     alert("The number is Zero.");
// }


// questio 4

// Take input from user
// let char = prompt("Enter a single character:");

// // Convert to lowercase (to handle both uppercase & lowercase)
// char = char.toLowerCase();

// // Check if vowel
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     alert(true);
// }
// else {
//     alert(false);
// }


// questio 5

// (a) Store correct password
// let correctPassword = "mySecret123";

// // (b) Ask user to enter password
// let userPassword = prompt("Enter your password:");

// // (c) Validate the two passwords
// if (!userPassword) {
//     alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// }
// else {
//     alert("Incorrect password");
// }

// questio 6

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// alert(greeting); // -> "Good day"


// ternery operator
// let hour = 13;
// let greeting = (hour < 18) ? "Good day" : "Good evening";
// alert(greeting);


// question 7

// Take time input in 24-hour format (e.g. 1900 = 7pm)
// let time = +prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm):");

// // Check conditions
// if (time >= 0 && time < 1200) {
//     alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");
// }
// else {
//     alert("Invalid time! Please enter a valid 24-hour format (0000–2359).");
// }






