// question 1
// let arr = [[]]

// // question 2

// let matric = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];

// let rows = 3;  
// let cols = 4;   
// let matrics = [];


// for (let i = 0; i < rows; i++) {
//   matric[i] = [];  // 
//   for (let j = 0; j < cols; j++) {
//     matric[i][j] = Math.abs(i - j);  
//   }
// }


// for (let i = 0; i < rows; i++) {
//   document.write(matric[i].join(" "));
//   document.write("<br/>")
// }

// for(let i = 0; i < matric.length ; i ++){
//     document.write (matric[i]+"<br />");
// }for (let i = 0; i < rows; i++) {
//   matrix[i] = [];  // create a new row
//   for (let j = 0; j < cols; j++) {
//     matrix[i][j] = value++;
//   }


// // Display the matrix
// for (let i = 0; i < rows; i++) {
//   console.log(matrix[i].join(" ")); // prints row values
// }

// question 3

// for(let i = 1; i <= 10 ; i ++){
//     console.log(i)
// };

// // question 4

// let number = + prompt("Enter the tabel number:")
// let lenght = +prompt("Enter the tabel lenght:")
// for(let i = 1 ; i <= lenght ; i ++){
//     document.write(`${number} x ${i} = ${number * i} <br>`);
// } 

// question 5

// const fruites = ["apple","banana","mango","orange","strawberry"] ;
// for(let i =0 ; i < fruites.length ; i ++){
//     document.write(fruites[i],"<br>");
// }


// question  6

// a. Counting
// document.write("<h3> Counting:</h3>");
// for (let i = 1; i <= 15; i++) {
//   document.write(i + (i < 15 ? ", " : ""));
// }

// // b. Reverse Counting
// document.write("<h3> Reverse Counting:</h3>");
// for (let i = 10; i >= 1; i--) {
//   document.write(i + (i > 1 ? ", " : ""));
// }

// // c. Even Numbers
// document.write("<h3> Even:</h3>");
// for (let i = 0; i <= 20; i += 2) {
//   document.write(i + (i < 20 ? ", " : ""));
// }

// // d. Odd Numbers
// document.write("<h3> Odd:</h3>");
// for (let i = 1; i < 20; i += 2) {
//   document.write(i + (i < 19 ? ", " : ""));
// }

// // e. Series with "k"
// document.write("<h3> Series:</h3>");
// for (let i = 2; i <= 20; i += 2) {
//   document.write(i + "k" + (i < 20 ? ", " : ""));
// }

// // question 7

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Take user input
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();

// // Search for the item
// let found = false;

// for (let i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     found = true;
//     alert(`${userInput} is available at index ${i} in our bakery.`);
//     break;
//   }
// }

// if (!found) {
// alert(`We are sorry. ${userInput} is not available in our bakery.`);
// }

// question 8

// const number=[24, 53, 78, 91, 12];

// let largest = number[0];

// for (let i = 0; i < number.length; i++) {
//   if (number[i] > largest) {
//     largest = number[i];  
//   }
// }
// document.write(`Arry item :<br>${number} <br>`)
// document.write("The largest number in the array is:", largest);

// // question 9

// const num = [24,53,78,91,12];
// let smalest = num[0];
// for(let i = 0; i< num.length; i++){
//     if (num[i]<smalest){
//         smalest = num[i];
//     }
// }
// document.write(`Arry item :<br>${num}<br>`)
// document.write(`The smalest number in the arry is :${smalest}`);

// question 10

// // Loop from 1 to 100
// for (let number = 1; number <= 100; number++) {
//     // Check if the number is a multiple of 5
//     if (number % 5 === 0) {
//         document.write(number +"<br/>");
//     }
// }





