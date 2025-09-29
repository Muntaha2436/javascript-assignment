// question 1

// const student=[]

// // question 2
// let app=()

// question 3
// const colour =["red","yellow","pink","blue","black"];

// question 4

// const value =[1,2,3,4,5,6];

// question 5

// const passedStudent = [true,false,true,false,true];

// question 6

// const combine = ["math",5,true,"red",8,false]

// question 7

// const qualification = ["SSC", "HSC", "BCS",
// "BS", "BCOM", "MS", "M. Phil", "PhD"]
// document.write(qualification)


// question 8

// Array to store 3 student names
// let studentNames = ["Ali", "Sara", "John"];

// // Array to store their scores (out of 500)
// let studentScores = [400, 450, 470];

// // Total marks for each student
// let totalMarks = 500;

// // Show output using console.log or document.write
// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     document.write(`Name: ${studentNames[i]}, Score: ${studentScores[i]}, Percentage: ${percentage.toFixed(2)}%`);
// }

// question 9

// let colors = ["Red", "Green", "Blue", "Yellow"];

// document.write("<b>Initial array:</b> " + colors.join(", ") + "<br><br>");
// let colorToAddStart = prompt("Which color do you want to add to the beginning?");
// colors.unshift(colorToAddStart);

// document.write("<b>After adding color to the beginning:</b> " + colors.join(", ") + "<br><br>");
// let colorToAddEnd = prompt("Which color do you want to add to the end?");
// colors.push(colorToAddEnd);

// document.write("<b>After adding color to the end:</b> " + colors.join(", ") + "<br><br>");
// colors.unshift("Purple", "Orange");

// document.write("<b>After adding two colors to the beginning:</b> " + colors.join(", ") + "<br><br>");
// colors.shift();

// document.write("<b>After deleting the first color:</b> " + colors.join(", ") + "<br><br>");

// colors.pop();

// document.write("<b>After deleting the last color:</b> " + colors.join(", ") + "<br><br>");

// let addIndex = parseInt(prompt("At which index do you want to add a color? (0 to " + colors.length + ")"));
// let colorToAddAtIndex = prompt("Which color do you want to add?");

// // Using splice to add at a specific index: splice(index, 0, item)
// colors.splice(addIndex, 0, colorToAddAtIndex);

// document.write("<b>After adding color at index " + addIndex + ":</b> " + colors.join(", ") + "<br><br>");


// let deleteIndex = parseInt(prompt("At which index do you want to delete color(s)? (0 to " + (colors.length - 1) + ")"));
// let deleteCount = parseInt(prompt("How many colors do you want to delete?"));

// colors.splice(deleteIndex, deleteCount);

// document.write("<b>After deleting " + deleteCount + " color(s) from index " + deleteIndex + ":</b> " + colors.join(", ") + "<br><br>");


// question 10

// const studentScores = [320, 450, 210, 390, 280];

// // Sort in ascending order using compare function
// studentScores.sort(function(a, b) {
//   return a - b;
// });
// document.write("Sorted Scores (Ascending): " + studentScores.join(", "));

// question 11

// const cityNames = ["karachi","lahore","islamabad","queeta","peshawer"]
// const selectedCity =cityNames.slice(2,4)
// document.write(`city names :<br/> ${cityNames} <br/>`)
// document.write(`selected city  :<br/> ${selectedCity}`)

// question 12

// var arr = ["This ", " is ", " my ", " cat"];
// var result = arr.join("");
// document.write(`arry : <br/>${arr} <br/>`)
// document.write(`string : <br/>${result} <br/>`)

// question 13

// const device = []
//     var devices = [];

//     devices.push("keyboard");
//     devices.push("mouse");
//     devices.push("printer");
//     devices.push("monitor");

//     document.write("<h3>Original Array:</h3>");
//     document.write(devices + "<br><br>");

   
//     document.write("<h3>Values in FIFO Order:</h3>");
//     while (devices.length > 0) {
//         document.write(devices.shift() + "<br>");
    // }



// question 14
// const devices =[]
    
//     devices.push("keyboard");
//     devices.push("mouse");
//     devices.push("printer");
//     devices.push("monitor");

//     document.write("<h3>Original Array:</h3>");
//     document.write(devices + "<br><br>");

//     document.write("<h3>Values in Reverse (LIFO Order):</h3>");
//     while (devices.length > 0) {
//         document.write(devices.pop() + "<br>");
//     }

// queston 15

//    const phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//     document.write("<select>");

//     for (var i = 0; i < phoneManufacturers.length; i++) {
//         document.write( "<option>" + phoneManufacturers[i] + "</option>");
//     }

//     document.write("</select>");


