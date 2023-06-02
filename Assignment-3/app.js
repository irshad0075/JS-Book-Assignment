//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 21;
alert("I am " + age + " years old.");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var numVisits = 0;

// check if localStorage has a value for numVisits
if (localStorage.getItem("numVisits")) {
  numVisits = localStorage.getItem("numVisits");
}

numVisits++; // increment the number of visits

// update the localStorage value for numVisits
localStorage.setItem("numVisits", numVisits);

// display the number of visits on the page
alert("You have visited this site " + numVisits + " times.");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2002;
document.write("My birth year is " + birthYear + ".<br>");
document.write(
  "Data type of my declared variable is " + typeof birthYear + "."
);
var birthYear = 2002;
alert(
  "My birth year is " +
    birthYear +
    ".\nData type of my declared variable is " +
    typeof birthYear +
    "."
);

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

var message =
  visitorName +
  " ordered " +
  quantity +
  " " +
  productTitle +
  "(s) on XYZ Clothing store.";
alert(message);
