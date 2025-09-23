
// questio 1


let a = 10;
    document.write("<h3>Result:</h3>");
    document.write("The value of a is: " + a + "<br>");
    document.write(".............................................<br><br>");

    // Pre-increment (++a)
    document.write("The value of ++a is: " + (++a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    // Post-increment (a++)
    document.write("The value of a++ is: " + (a++) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    // Pre-decrement (--a)
    document.write("The value of --a is: " + (--a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    // Post-decrement (a--)
    document.write("The value of a-- is: " + (a--) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

        // Pre-decrement (--a)
    document.write("The value of --a is: " + (--a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    // Post-decrement (a--)
    document.write("The value of a-- is: " + (a--) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

// question 2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Step 1: --a
// Initial values: a = 2, b = 1

// --a → pre-decrement: pehle a kam hoga, phir use hoga.
// a = 1
// Result: 1

// Step 2: --a - --b
// Ab a = 1, b = 1

// --b → pre-decrement: b = 0

// Expression: 1 - 0 = 1

// Ab values: a = 1, b = 0

// Step 3: --a - --b + ++b
// Ab a = 1, b = 0

// ++b → pre-increment: b = 1

// Expression: 1 - 0 + 1 = 2

// Ab values: a = 1, b = 1

// Step 4: --a - --b + ++b + b--
// Ab a = 1, b = 1

// b-- → post-decrement: pehle value use hoti hai (1), phir b = 0

// Expression: 2 + 1 = 3

// Ab final values: a = 1, b = 0
// --a = 1

// --a - --b = 1

// --a - --b + ++b = 92

// --a - --b + ++b + b-- = 3

// a = 1, b = 0, result = 3



// question 3

let userName = prompt("pleas enter your name") 
document.write(`Hello ${userName}! Welcome to our website`)

alert(`Hello ${userName}! Welcome to our website`)

// question 4

var number = prompt("Enter a number for table:");
if (number === "" || number === null) {
    number = 5;
}
number = Number(number);
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}


// question 5


    // a) Subjects name from user
    var subject1 = prompt("Enter first subject name:");
    var subject2 = prompt("Enter second subject name:");
    var subject3 = prompt("Enter third subject name:");

    // b) Total marks per subject
    var totalMarks = 100;

    // c & d) Obtained marks for all subjects
    var obtained1 = Number(prompt("Enter obtained marks for " + subject1));
    var obtained2 = Number(prompt("Enter obtained marks for " + subject2));
    var obtained3 = Number(prompt("Enter obtained marks for " + subject3));

    // e) Calculate totals and percentages
    var totalAll = totalMarks * 3;
    var obtainedTotal = obtained1 + obtained2 + obtained3;
    var percentageAll = (obtainedTotal / totalAll) * 100;

    var percentage1 = (obtained1 / totalMarks) * 100;
    var percentage2 = (obtained2 / totalMarks) * 100;
    var percentage3 = (obtained3 / totalMarks) * 100;

    Display in table
    document.write("<h2>Marks Sheet</h2>");
    document.write("<table border='1' cellspacing='0' cellpadding='8'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtained1 + "</td><td>" + percentage1.toFixed(0) + "%</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtained2 + "</td><td>" + percentage2.toFixed(0) + "%</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtained3 + "</td><td>" + percentage3.toFixed(0) + "%</td></tr>");

    document.write("<tr><th>Total</th><th>" + totalAll + "</th><th>" + obtainedTotal + "</th><th>" + percentageAll.toFixed(0) + "%</th></tr>");
    document.write("</table>");

