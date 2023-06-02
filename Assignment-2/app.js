//1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "John Doe";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
var message;
message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes

var studentName = "Jane Doe";
var age = 20;
var gender = "Female";
var major = "Computer Science";
var university = "Karachi University";
alert("Name: " + studentName);
alert("Age: " + age);
alert("Gender: " + gender);
alert("Major: " + major);
alert("University: " + university);

// 5. Write a script to display the following alert using one JS variable:
// PIZZA
// PIZZ
// PIZ
// PI
// P

var word = "PIZZA";
var message = "";
for (var i = word.length; i >= 1; i--) {
  var slicedWord = word.slice(0, i);
  message += slicedWord + "\n";
}
alert(message);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "irshadyousuf0075@gmail.com";
alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";
alert("I am reading the book " + book);

// 8. Write a script to display this in browser through JS
// Yah I can write HTML content through JavaScript

document.write("<h1>Yah I can write HTML content through JavaScript</h1>");

// 9.Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

var myString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(myString);
document.write(myString);
