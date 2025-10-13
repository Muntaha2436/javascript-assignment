// question 1

// let firstName = prompt("Enter your first name:");

// let lastName = prompt("Enter your last name:");

// let fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "! Welcome!");

// question  2

// let mobileModel = prompt("Enter your favorite mobile phone model:");
// let modelLength = mobileModel.length;
// document.write("My favorite mobile phone model is: " + mobileModel + "<br>");
// document.write("Length of your input is: " + modelLength);

// question 3

// let word = "Pakistani";
// let index = word.indexOf("n");

// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + index);

// question 4

// let word = "Hello World";
// let lastIndex = word.lastIndexOf("l");

// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + lastIndex);

// question 5

// let word = "Pakistani";
// let character = word.charAt(3);

// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + character);

// question 6

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName.concat(" ", lastName);


// alert("Hello, " + fullName + "! Welcome!");

// question 7

// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");

// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);

// question 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var newMessage = message.replace(/and/g, "&");

// document.write("After Replacement: " + newMessage);

// question 9

// let strValue = "472";
// let numValue = Number(strValue);

// document.write("Value: " + strValue + "<br>");
// document.write("Type: " + typeof strValue + "<br><br>");

// document.write("Value: " + numValue + "<br>");
// document.write("Type: " + typeof numValue);


// question 10

// let userInput = prompt("Enter any text:");
// let upperCaseInput = userInput.toUpperCase();

// document.write("User Input: " + userInput + "<br>");
// document.write("Upper Case: " + upperCaseInput);

// question 11

// let userInput = prompt("Enter any text:");

// let titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

// document.write("User Input: " + userInput + "<br>");
// document.write("Title Case: " + titleCase);

// question 12


// let num = 35.36;

// let str = num.toString();
// let result = str.replace(".", "");


// document.write("Number: " + num + "<br>");
// document.write("Result: " + result);

// question 13

// let username = prompt("Enter your username:");


// let isValid = true;


// for (let i = 0; i < username.length; i++) {
//     let charCode = username.charCodeAt(i);

  
//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false;
//         break;
//     }
// }

// if (!isValid) {
//     alert("Please enter a valid username. It should not contain [@ . , !]");
// } else {
//     alert("Username accepted: " + username);
// }


// question 14

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

// userInput = userInput.toLowerCase();


// if (A.includes(userInput)) {
//     alert(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery.");
// } else {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }


// question 15

// let password = prompt("Enter your password:");


// function isValidPassword(pass) {

 
//     if (pass.length < 6) {
//         alert("❌ Password must be at least 6 characters long.");
//         return false;
//     }
//     if (!isNaN(pass.charAt(0))) {
//         alert("❌ Password should not start with a number.");
//         return false;
//     }

//     let hasLetter = false;
//     let hasNumber = false;

    
//     for (let i = 0; i < pass.length; i++) {
//         let charCode = pass.charCodeAt(i);

//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasLetter = true;
//         }

        
//         if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }

//     if (!hasLetter || !hasNumber) {
//         alert("❌ Password must contain both alphabets and numbers.");
//         return false;
//     }


//     return true;
// }

// if (isValidPassword(password)) {
//     alert("✅ Password is valid!");
// } else {
//     alert("⚠️ Please enter a valid password.");
// }

// question 16


// var university = "University of Karachi";
// var universityArray = university.split("");

// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }

// question 17

// let userInput = prompt("Enter any text:");


// let lastChar = userInput.charAt(userInput.length - 1);

// document.write("User Input: " + userInput + "<br>");
// document.write("Last Character: " + lastChar);

// question 18


// let text = "The quick brown fox jumps over the lazy dog";
// let lowerText = text.toLowerCase();
// let words = lowerText.split(" ");

// let count = 0;

// for (let i = 0; i < words.length; i++) {
//     if (words[i] === "the") {
//         count++;
//     }
// }

// document.write("Text: " + text + "<br>");
// document.write("There are " + count + " occurrence(s) of word 'the'.");
