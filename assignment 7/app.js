// // question 1

// // Take input from the user

// let city = prompt("Enter your city name:");

// // Check if the city is Karachi (case-insensitive)
// if (city && city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome to " + city);
// }

// // question 2

// // Take gender input from the user
// let gender = prompt("Enter your gender (male/female):");

// // Check the gender and show appropriate message
// if (gender) {
//     gender = gender.toLowerCase();

//     if (gender === "male") {
//         alert("Good Morning Sir");
//     } else if (gender === "female") {
//         alert("Good Morning Ma’am");
//     } else {
//         alert("Invalid input. Please enter 'male' or 'female'.");
//     }
// } else {
//     alert("No input provided.");
// }

// question 3

// // Take color input from the user
// let signalColor = prompt("Enter the color of the traffic signal (Red / Yellow / Green):");

// // Check the color and show the appropriate message
// if (signalColor) {
//     signalColor = signalColor.toLowerCase();

//     if (signalColor === "red") {
//         alert("Must Stop");
//     } else if (signalColor === "yellow") {
//         alert("Ready to move");
//     } else if (signalColor === "green") {
//         alert("Move now");
//     } else {
//         alert("Invalid color. Please enter Red, Yellow, or Green.");
//     }
// } else {
//     alert("No input provided.");
// }

// question 4

// // Take remaining fuel input from the user
// let fuel = prompt("Enter the remaining fuel in your car (in litres):");

// // Convert input to a number
// fuel = parseFloat(fuel);

// // Check if the input is a valid number
// if (!isNaN(fuel)) {
//     if (fuel < 0.25) {
//         alert("Please refill the fuel in your car");
//     } else {
//         alert("You have enough fuel");
//     }
// } else {
//     alert("Invalid input. Please enter a number.");
// }

// question 5

// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// question 6

// // Get marks for 3 subjects
// let mark1 = parseFloat(prompt("Enter marks for subject 1:"));
// let mark2 = parseFloat(prompt("Enter marks for subject 2:"));
// let mark3 = parseFloat(prompt("Enter marks for subject 3:"));

// // Get total marks
// let totalMarks = parseFloat(prompt("Enter total marks:"));

// // Calculate total obtained and percentage
// let obtainedMarks = mark1 + mark2 + mark3;
// let percentage = (obtainedMarks / totalMarks) * 100;

// // Determine grade
// let grade = "";

// if (percentage >= 80) {
//     grade = "A-one";
// } else if (percentage >= 70) {
//     grade = "A";
// } else if (percentage >= 60) {
//     grade = "B";
// } else {
//     grade = "Fail";
// }

// // Show result
// alert("Marks Sheet\n\n" +
//       "Total Marks: " + totalMarks +
//       "\nMarks Obtained: " + obtainedMarks +
//       "\nPercentage: " + percentage.toFixed(2) + "%" +
//       "\nGrade: " + grade);


//       question 7

// Store the secret number between 1 and 10
// let secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt user for their guess
// let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check the guess
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again! The secret number was " + secretNumber);
// }


// question 8

// Take input from user
// let num = parseInt(prompt("Enter a number:"));

// // Check if the input is a valid number
// if (!isNaN(num)) {
//     // Check divisibility by 3
//     if (num % 3 === 0) {
//         alert(num + " is divisible by 3");
//     } else {
//         alert(num + " is not divisible by 3");
//     }
// } else {
//     alert("Please enter a valid number");
// }

// question 9

// // Take input from user
// let num = parseInt(prompt("Enter a number:"));

// // Check if the input is a valid number
// if (!isNaN(num)) {
//     // Check even or odd
//     if (num % 2 === 0) {
//         alert(num + " is an even number");
//     } else {
//         alert(num + " is an odd number");
//     }
// } else {
//     alert("Please enter a valid number");
// }

// question 10


// // Take temperature input from the user
// let temperature = parseFloat(prompt("Enter the temperature:"));

// // Check if input is valid
// if (!isNaN(temperature)) {
//     if (temperature > 40) {
//         alert("It is too hot outside.");
//     } else if (temperature > 30) {
//         alert("The Weather today is Normal.");
//     } else if (temperature > 20) {
//         alert("Today's Weather is cool.");
//     } else if (temperature > 10) {
//         alert("OMG! Today's weather is so Cool.");
//     } else {
//         alert("It's quite cold outside.");
//     }
// } else {
//     alert("Please enter a valid temperature.");
// }


// question 11

// // Take inputs
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operation = prompt("Enter the operation (+, -, *, /, %):");

// // Check inputs validity
// if (isNaN(num1) || isNaN(num2)) {
//     alert("Please enter valid numbers.");
// } else {
//     let result;

//     if (operation === "+") {
//         result = num1 + num2;
//     } else if (operation === "-") {
//         result = num1 - num2;
//     } else if (operation === "*") {
//         result = num1 * num2;
//     } else if (operation === "/") {
//         if (num2 === 0) {
//             alert("Error: Division by zero is not allowed.");
//             result = null;
//         } else {
//             result = num1 / num2;
//         }
//     } else if (operation === "%") {
//         if (num2 === 0) {
//             alert("Error: Modulus by zero is not allowed.");
//             result = null;
//         } else {
//             result = num1 % num2;
//         }
//     } else {
//         alert("Invalid operation entered.");
//         result = null;
//     }

//     if (result !== null) {
//         alert(`Result: ${num1} ${operation} ${num2} = ${result}`);
//     }
// }



