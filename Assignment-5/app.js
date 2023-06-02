// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// Take input from user
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

// Add the two numbers
var sum = num1 + num2;

// Display the result in the browser
document.write("The sum of " + num1 + " and " + num2 + " is " + sum + ".");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.

// a. Declare a variable.
var num;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
alert("Value after variable declaration is: " + num);

// c. Initialize the variable with some number.
num = 5;

// d. Show the value of variable in your browser like “Initial value: 5”.
alert("Initial value: " + num);

// e. Increment the variable.
num++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.
alert("Value after increment is: " + num);

// g. Add 7 to the variable.
num += 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.
alert("Value after addition is: " + num);

// i. Decrement the variable.
num--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.
alert("Value after decrement is: " + num);

// k. Show the remainder after dividing the variable’s value by 3.
var remainder = num % 3;

// l. Output : “The remainder is : 0”.
alert("The remainder is: " + remainder);

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write(
  "Total cost to buy " +
    numberOfTickets +
    " tickets to a movie is " +
    totalCost +
    "PKR"
);

// 5. Write a script to display multiplication table of any
// number in your browser. E.g
var num = parseInt(
  prompt("Enter a number to display its multiplication table:")
);

document.write("<h2>Multiplication Table of " + num + "</h2>");

for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// °C = ( °F -32) x 5/9
// °F = ( °C X 5/9 ) + 32

// a. Store a Celsius temperature into a variable.
var celsiusTemp = 25;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheitTemp = celsiusTemp * (9 / 5) + 32;
console.log(celsiusTemp + "°C is " + fahrenheitTemp + "°F");

// c. Now store a Fahrenheit temperature into a variable.
var fahrenheitTemp2 = 80;

// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsiusTemp2 = (fahrenheitTemp2 - 32) * (5 / 9);
console.log(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Declare variables for item prices, quantities and shipping charges
var item1Price = 500;
var item2Price = 700;
var item1Quantity = 2;
var item2Quantity = 1;
var shippingCharges = 100;

// Calculate total cost
var totalCost =
  item1Price * item1Quantity + item2Price * item2Quantity + shippingCharges;

// Display the receipt
document.write("<h1>Shopping Cart Receipt</h1>");
document.write("<p>Price of Item 1: " + item1Price + "</p>");
document.write("<p>Quantity of Item 1: " + item1Quantity + "</p>");
document.write("<p>Price of Item 2: " + item2Price + "</p>");
document.write("<p>Quantity of Item 2: " + item2Quantity + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
document.write("<br>");
document.write("<p><b>Total Cost: " + totalCost + "</b></p>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 500;
var marksObtained = 380;
var percentage = (marksObtained / totalMarks) * 100;

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var totalUS = 10;
var totalSR = 25;
var totalPKR = totalUS * 104.8 + totalSR * 28;

document.write("Total currency in PKR: " + totalPKR);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let numN = 3;
let result = ((numN + 5) * 10) / 2;
console.log(result);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// a. Store the current year in a variable.
var currentYear = new Date().getFullYear();

// b. Store their birth year in a variable.
var birthYear = 2002;

// c. Calculate their 2 possible ages based on the stored values.
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output them to the screen like so: “They are either NN or NN years old”.
document.write("They are either " + age1 + " or " + age2 + " years old.");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// Step 1: Store the radius of the circle in a variable
var radius = 5;

// Step 2: Calculate the circumference using the formula C = 2 * pi * r
var circumference = 2 * 3.142 * radius;

// Step 3: Calculate the area using the formula A = pi * r^2
var area = 3.142 * radius ** 2;

// Step 4: Output the results to the console
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// Store your favorite snack into a variable
var favoriteSnack = "chocolate chip cookies";

// Store your current age into a variable
var currentAge = 30;

// Store a maximum age into a variable
var maxAge = 80;

// Store an estimated amount per day (as a number)
var amountPerDay = 2;

// Calculate how many would you eat total for the rest of your life
var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;

// Output the result to the screen
document.write(
  "You will need " +
    totalNeeded +
    " " +
    favoriteSnack +
    " to last you until the ripe old age of " +
    maxAge +
    "."
);
