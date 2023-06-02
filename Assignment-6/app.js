// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// Result :The value of a is :10
//  ------------------------
// the value of ++a is :11
//  Now the value of a is :11
// The value of a++ is :11
// Now the value of  a is :12
// The value of --a is :11
// Now the value of a is :11
// The value of a-- is :11
// Now the value of a is :10

let a = 10;
console.log("The value of a is: " + a);

// Increment prefix
++a;
console.log("The value of ++a is: " + a);
console.log("Now the value of a is: " + a);

// Increment postfix
a++;
console.log("The value of a++ is: " + a);
console.log("Now the value of a is: " + a);

// Decrement prefix
--a;
console.log("The value of --a is: " + a);
console.log("Now the value of a is: " + a);

// Decrement postfix
a--;
console.log("The value of a-- is: " + a);
console.log("Now the value of a is: " + a);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var ac = 2,
  b = 1;
var result = --ac - --b + ++b + b--;

// stage 1
--a; // a is now 1
// Explanation: The prefix decrement operator decreases the value of a by 1, resulting in a being equal to 1.

// stage 2
--a - --b; // a is now 0, b is now 0
// Explanation: The prefix decrement operator decreases the value of a by 1 (resulting in a being equal to 0) and the prefix decrement operator decreases the value of b by 1 (resulting in b being equal to 0). The subtraction operator then subtracts the value of b (0) from the value of a (0), resulting in 0.

// stage 3
--a - --b + ++b; // a is now -1, b is now 1
// Explanation: The prefix decrement operator decreases the value of a by 1 (resulting in a being equal to -1), the prefix decrement operator decreases the value of b by 1 (resulting in b being equal to -1), and the prefix increment operator increases the value of b by 1 (resulting in b being equal to 0). The addition operator then adds the value of b (0) to the result of the previous stage (0), resulting in 0.

// stage 4
--a - --b + ++b + b--; // a is now -2, b is now -1
// Explanation: The prefix decrement operator decreases the value of a by 1 (resulting in a being equal to -2), the prefix decrement operator decreases the value of b by 1 (resulting in b being equal to -2), the prefix increment operator increases the value of b by 1 (resulting in b being equal to -1), and the postfix decrement operator decreases the value of b by 1 (resulting in b being equal to -2). The addition operator then adds the value of b (-2) to the result of the previous stage (0), resulting in -2.

// final output
console.log(result); // output: -2

// 3. Write a program that takes input a name from user &
// greet the user.

// Prompt user for their name
let userName = prompt("What's your name?");

// Greet the user
if (userName) {
  alert("Hello, " + userName + "!");
} else {
  alert("Hello there!");
}

// 5. Write a program to take input a number from user &
// display it’s multiplication newnewTable on your browser. If user
// does not enter a new number, multiplication newTable of 5
// should be displayed by default.

// Prompt user for a number
let number = prompt("Enter a number to display its multiplication newTable:");

// Use 5 as default if no number is entered
if (number === null || isNaN(number)) {
  number = 5;
}

// Create a newTable to display the multiplication newTable
let newTable = "<newTable>";
for (let i = 1; i <= 10; i++) {
  newTable +=
    "<tr><td>" +
    number +
    " x " +
    i +
    " = </td><td>" +
    number * i +
    "</td></tr>";
}
newTable += "</newTable>";

// Display the multiplication newTable on the webpage
document.write("<h2>Multiplication newTable of " + number + "</h2>");
document.write(newTable);

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user newTable)

// Prompt user for subject names
let subject1 = prompt("Enter name of first subject:");
let subject2 = prompt("Enter name of second subject:");
let subject3 = prompt("Enter name of third subject:");

// Store total marks for each subject
const totalMarks = 100;

// Prompt user for obtained marks in each subject
let marks1 = prompt("Enter obtained marks for " + subject1 + ":");
let marks2 = prompt("Enter obtained marks for " + subject2 + ":");
let marks3 = prompt("Enter obtained marks for " + subject3 + ":");

// Calculate total marks and percentage
let totalObtainedMarks =
  parseFloat(marks1) + parseFloat(marks2) + parseFloat(marks3);
let percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Create a table to display the result
let table = "<table>";
table += "<tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td></tr>";
table +=
  "<tr><td>" +
  subject1 +
  "</td><td>" +
  totalMarks +
  "</td><td>" +
  marks1 +
  "</td></tr>";
table +=
  "<tr><td>" +
  subject2 +
  "</td><td>" +
  totalMarks +
  "</td><td>" +
  marks2 +
  "</td></tr>";
table +=
  "<tr><td>" +
  subject3 +
  "</td><td>" +
  totalMarks +
  "</td><td>" +
  marks3 +
  "</td></tr>";
table +=
  "<tr><td></td><td><b>Total Marks:</b></td><td><b>" +
  totalMarks * 3 +
  "</b></td></tr>";
table +=
  "<tr><td></td><td><b>Obtained Marks:</b></td><td><b>" +
  totalObtainedMarks +
  "</b></td></tr>";
table +=
  "<tr><td></td><td><b>Percentage:</b></td><td><b>" +
  percentage +
  "%</b></td></tr>";
table += "</table>";

// Display the result on the webpage
document.write("<h2>Result:</h2>");
document.write(table);
