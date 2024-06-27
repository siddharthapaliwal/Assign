//  Q.1Using console.log() print out the following statement: The quote 'There is
// no exercise better for the heart than reaching down and lifting people up.' by
// John Holmes teaches us to help one another. Using console.log() print out the
// following quote by Mother Teresa:
// Answer programming
// console.log("The quote by Mother Teresa:");
//-----------------------------------2---------------------------------------
//Q.2Check if typeof '10' is exactly equal to 10. If not make it exactly equal?
// Answer programming
// Check if typeof '10' is exactly equal to 10
// Check if typeof '10' is exactly equal to 10
// if (typeof '10' !== 'number') {
//     // Convert '10' to a number
//     let numberTen = parseInt('10');
//     console.log(numberTen); // Output: 10
// } else {
//     console.log('typeof \'10\' is exactly equal to 10');
// }
//--------------------------------3-----------------------------
//Q.3Write a JavaScript Program to find the area of a triangle?
// Answer programming
// function calculateTriangleArea(base, height) {
//     // Calculate area using the formula: A = 1/2 * base * height
//     let area = 0.5 * base * height;
//     return area;
// }

// // Example usage:
// let base = 5;
// let height = 8;
// let area = calculateTriangleArea(base, height);

// console.log(`The area of the triangle with base ${base} and height ${height} is ${area}`);
//----------------------------------------4---------------------------------
//Write a JavaScript program to calculate days left until next Christmas.
// function daysUntilNextChristmas() {
//     const today = new Date();
//     let nextChristmas = new Date(today.getFullYear(), 11, 25); // December 25 of this year

//     if (today > nextChristmas) {
//         nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
//     }

//     const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
//     const daysLeft = Math.round((nextChristmas - today) / oneDay);

//     return daysLeft;
// }

// console.log(daysUntilNextChristmas());
//-----------------------------------------5------------------------------
//What is Condition Statement?
//Answer--------
// A conditional statement is a feature in programming languages that allows a program to take different actions based on whether
//  a given condition (or set of conditions) is true or false. The most common conditional statements are if, else if, and else.
//programming
// let age = 18;

// if (age < 18) {
//     console.log("You are a minor.");
// } else if (age >= 18 && age <= 65) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a senior.");
// }
//-----------------------------------6---------------------------------------
//Answer---circumference of Rectangle formula : C = 4 * a
// The formula C = 4 * a is not for the circumference of a rectangle.It's actually for the perimeter of a square where a is the side length of the square.

// For a rectangle with length l and width w, the correct formula for the perimeter(which is the circumference in this context) is:
//     𝐶 = 2×(𝑙 + 𝑤)C = 2×(l + w)
//--------------------------------------7-------------------------------------------
//a program to convert years into days and days into years.
// function yearsToDays(years) {
//     return years * 365;
// }

// function daysToYears(days) {
//     return days / 365;
// }

// console.log(yearsToDays(2)); // Convert 2 years to days
// console.log(daysToYears(730)); // Convert 730 days to years
//------------------------------------8----------------------------------
//Convert temperature Fahrenheit to Celsius? (Conditional logic Question)
// function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// let fahrenheit = 98; // example temperature
// let celsius = fahrenheitToCelsius(fahrenheit);

// console.log(`Temperature in Celsius: ${celsius}`);

// if (celsius > 30) {
//     console.log("It's hot.");
// } else if (celsius > 20) {
//     console.log("It's warm.");
// } else if (celsius > 10) {
//     console.log("It's cool.");
// } else {
//     console.log("It's cold.");
// }
//------------------------------------9--------------------------------
//JavaScript exercise to get the extension of a filename.
// function getFileExtension(filename) {
//     return filename.split('.').pop();
// }

// console.log(getFileExtension("document.txt")); // Output: txt
// console.log(getFileExtension("archive.tar.gz")); // Output: gz
// console.log(getFileExtension("node Assiment1-27.js")); // Output: js
// NOte:- i am work Node js run command File.js
//-----------------------------------10-----------------------------------
//the result of the expression (5 > 3 && 2 < 4)
// The result of the expression (5 > 3 && 2 < 4) is true.

// Explanation:

// 5 > 3 evaluates to true.
// 2 < 4 evaluates to true.
// Since both conditions are true, the logical AND (&&) operator returns true.
//----------------------------------------11----------------------------------
//result of the expression (true && 1 && "hello")
//Anser--The result of the expression (true && 1 && "hello") is "hello".
//----------------------------------------12----------------------------------
//the result of the expression true && false || false && true
//Ans---The result of the expression true && false || false && true is false.
//----------------------------------------13----------------------------------
//Check Number Is Positive or Negative in JavaScrip
// function checkNumber(num) {
//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// console.log(checkNumber(10)); // Output: Positive
// console.log(checkNumber(-5)); // Output: Negative
//----------------------------------------14----------------------------------
//Find the Character Is Vowel or Not
// function isVowel(char) {
//     char = char.toLowerCase();
//     return ['a', 'e', 'i', 'o', 'u'].includes(char);
// }

// console.log(isVowel('A')); // Output: true
// console.log(isVowel('b')); // Output: false

//----------------------------------------15----------------------------------
//check whether a number is negative, positive or zero
// function checkNumber(num) {
//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// console.log(checkNumber(10)); // Output: Positive
// console.log(checkNumber(-5)); // Output: Negative
// console.log(checkNumber(0));  // Output: Zero
//----------------------------------------16----------------------------------
//find number is even or odd using ternary operator in JS
// function isEvenOrOdd(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// console.log(isEvenOrOdd(4)); // Output: Even
// console.log(isEvenOrOdd(7)); // Output: Odd

//----------------------------------------17----------------------------------
//find maximum number among 3 numbers using ternary operator in JS
// function findMax(a, b, c) {
//     return (a > b ? (a > c ? a : c) : (b > c ? b : c));
// }

// console.log(findMax(5, 10, 8)); // Output: 10

//----------------------------------------18----------------------------------
//  find minimum number among 3 numbers using ternary operator in JS
// function findMin(a, b, c) {
//     return (a < b ? (a < c ? a : c) : (b < c ? b : c));
// }

// console.log(findMin(5, 10, 8)); // Output: 5

//----------------------------------------19----------------------------------
//find the largest of three numbers in JS
// function findLargest(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else {
//         return c;
//     }
// }

// console.log(findLargest(5, 10, 8)); // Output: 10
// console.log(findLargest(20, 10, 15)); // Output: 20
// console.log(findLargest(10, 30, 30)); // Output: 30
//----------------------------------------20----------------------------------
// Write to show
// i. Monday to Sunday using switch case in JS
// function getDayOfWeek(dayNumber) {
//     let day;
//     switch (dayNumber) {
//         case 1:
//             day = "Monday";
//             break;
//         case 2:
//             day = "Tuesday";
//             break;
//         case 3:
//             day = "Wednesday";
//             break;
//         case 4:
//             day = "Thursday";
//             break;
//         case 5:
//             day = "Friday";
//             break;
//         case 6:
//             day = "Saturday";
//             break;
//         case 7:
//             day = "Sunday";
//             break;
//         default:
//             day = "Invalid day number";
//     }
//     return day;
// }

// console.log(getDayOfWeek(1)); // Output: Monday
// console.log(getDayOfWeek(5)); // Output: Friday
// console.log(getDayOfWeek(7)); // Output: Sunday
// console.log(getDayOfWeek(0)); // Output: Invalid day number
// ii. Vowel or Consonant using switch case in JS
// function checkVowelOrConsonant(char) {
//     char = char.toLowerCase();
//     let result;
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             result = "Vowel";
//             break;
//         default:
//             result = "Consonant";
//     }
//     return result;
// }

// console.log(checkVowelOrConsonant('A')); // Output: Vowel
// console.log(checkVowelOrConsonant('b')); // Output: Consonant
// console.log(checkVowelOrConsonant('E')); // Output: Vowel
// console.log(checkVowelOrConsonant('z')); // Output: Consonant
//---------------------------------21----------------------------
//the looping structures in JavaScript? Any one Example?
// JavaScript supports several looping structures, including:

// for loop
// while loop
// do...while loop
// for...in loop (used for iterating over properties of an object)
// for...of loop (used for iterating over iterable objects like arrays)
// Example of a for loop:
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// Output: 0 1 2 3 4

// Output: 0 1 2 3 4
//---------------------------------22----------------------------
//print 972 to 897 using for loop in JS
// for (let i = 972; i >= 897; i--) {
//     console.log(i);
// }
//---------------------------------23----------------------------
// print factorial of given number
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = num; i > 1; i--) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1
//---------------------------------24----------------------------
// print Fibonacci series up to given numbers
// function fibonacciSeries(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib.slice(0, n);
// }

// console.log(fibonacciSeries(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
//---------------------------------25----------------------------
//o print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS
// function reverseNumber(num) {
//     return parseInt(num.toString().split('').reverse().join(''));
// }

// console.log(reverseNumber(64728)); // Output: 82746

//---------------------------------26----------------------------
//a program make a summation of given number (E.g., 1523 Ans: - 11) in-JS
// function sumOfDigits(num) {
//     return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
// }

// console.log(sumOfDigits(1523));
// Output: 11
//---------------------------------27----------------------------
// Write a program you have to make a summation of first and last Digit.
// (E.g., 1234 Ans: - 5) in JS
// function sumFirstAndLastDigit(num) {
//     let numStr = num.toString();
//     let firstDigit = parseInt(numStr[0]);
//     let lastDigit = parseInt(numStr[numStr.length - 1]);
//     return firstDigit + lastDigit;
// }

// console.log(sumFirstAndLastDigit(1234)); // Output: 5
// console.log(sumFirstAndLastDigit(56789)); // Output: 14
//---------------------------------28----------------------------
// Use console.log() and escape characters to print the following pattern in JS?
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
//---------------------program-------------------------
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 0; j <= 4; j++) {
//         if (j === 0) {
//             row += i;
//         } else {
//             row += ' ' + Math.pow(i, j);
//         }
//     }
//     console.log(row);
// }
//  output-[1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125
//     ]
//-----------------------------29-----------------------------
//-----------Use pattern in console.log in JS
// Q-1
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
//-----------------1-program-------------------------------
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += (j % 2) + ' ';
//     }
//     console.log(row.trim());
// }
// output-[1
//     1 0
//     1 0 1
//     1 0 1 0
//     1 0 1 0 1
//     ]
//-----------------2-program-------------------------------
// Q - 2
// A
// B C D
// E F
// G H I J
// K L M N O
// let charCode = 65; // ASCII code for 'A'
// let rowLengths = [1, 3, 2, 4, 5];
// for (let i = 0; i < rowLengths.length; i++) {
//     let row = '';
//     for (let j = 0; j < rowLengths[i]; j++) {
//         row += String.fromCharCode(charCode) + ' ';
//         charCode++;
//     }
//     console.log(row.trim());
// }
//-----------------3-program-------------------------------
// Q-3
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// let num = 1;
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += num + ' ';
//         num++;
//     }
//     console.log(row.trim());
// }
//-----------------4-program-------------------------------
// *
// * *
// * * *
// * * * *
// * * * * *
// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '* ';
//     }
//     console.log(row.trim());
// }
//------------------------30----------------------------
//Accept 3 numbers from user using while loop and check each numbers palindrome
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function isPalindrome(number) {
//     const str = number.toString();
//     return str === str.split('').reverse().join('');
// }

// let count = 0;
// const numbers = [];

// function askForNumber() {
//     if (count < 3) {
//         rl.question(`Enter number ${count + 1}: `, (input) => {
//             const number = parseInt(input, 10);

//             if (!isNaN(number)) {
//                 numbers.push(number);
//                 count++;
//                 askForNumber();
//             } else {
//                 console.log("Please enter a valid integer.");
//                 askForNumber();
//             }
//         });
//     } else {
//         rl.close();
//         numbers.forEach(num => {
//             if (isPalindrome(num)) {
//                 console.log(`${num} is a palindrome.`);
//             } else {
//                 console.log(`${num} is not a palindrome.`);
//             }
//         });
//     }
// }

// askForNumber();
//-------------------output-----------------
// Enter number 1: 1
// Enter number 2: 3
// Enter number 3: 4
// 1 is a palindrome.
// 3 is a palindrome.
// 4 is a palindrome.

//--------------------------------31-------------------------------------
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function formatTime(date) {
//     let hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     const ampm = hours >= 12 ? 'PM' : 'AM';

//     hours = hours % 12;
//     hours = hours ? hours : 12; // The hour '0' should be '12'

//     const formattedTime = `${hours} ${ampm} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
//     return formattedTime;
// }

// function displayCurrentDayAndTime() {
//     const now = new Date();
//     const day = daysOfWeek[now.getDay()];
//     const time = formatTime(now);

//     console.log(`Today is ${day}.`);
//     console.log(`Current Time is ${time}.`);
// }

// displayCurrentDayAndTime();

//--------------------------32------------------------------------------------
//a JavaScript program to get the current date
// function getCurrentDate() {
//     const now = new Date();

//     // Get year, month, and day
//     const year = now.getFullYear();
//     // Months are zero-indexed, so we add 1 to get the correct month
//     const month = now.getMonth() + 1;
//     const day = now.getDate();

//     // Format the date as YYYY-MM-DD
//     const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

//     return formattedDate;
// }

// // Display current date
// console.log("Current Date:", getCurrentDate());
//------------------------------------33--------------------------------------
//a JavaScript program to compare two objects
// function compareObjects(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     // Check if number of keys are same
//     if (keys1.length !== keys2.length) {
//         return false;
//     }

//     // Check if all keys and their values are identical
//     for (let key of keys1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }

//     return true;
// }

// // Example usage:
// const obj1 = { name: "John", age: 30 };
// const obj2 = { name: "John", age: 30 };
// const obj3 = { name: "Jane", age: 25 };

// console.log(compareObjects(obj1, obj2)); // true
// console.log(compareObjects(obj1, obj3)); // false

//------------------------------------34--------------------------------------
//a JavaScript program to convert an array of objects into CSV string
// function convertArrayToCSV(data) {
//     const keys = Object.keys(data[0]); // Get headers from the first object
//     const csv = data.map(row => {
//         return keys.map(key => {
//             let cell = row[key] === null || row[key] === undefined ? '' : row[key]; // Handle null/undefined values
//             cell = cell.toString().replace(/"/g, '""'); // Escape double quotes
//             if (cell.search(/("|,|\n)/g) >= 0) {
//                 cell = `"${cell}"`; // Enclose in double quotes if cell contains special characters
//             }
//             return cell;
//         }).join(',');
//     }).join('\n');

//     return `${keys.join(',')}
// ${csv}`;
// }

// // Example usage:
// const data = [
//     { name: 'John', age: 28, city: 'New York' },
//     { name: 'Jane', age: 32, city: 'San Francisco' },
//     { name: 'Doe', age: 45, city: 'Los Angeles' }
// ];

// const csvString = convertArrayToCSV(data);
// console.log(csvString);
//------------------------------------35--------------------------------------
//a JavaScript program to capitalize first letter of a string
// function capitalizeFirstLetter(str) {
//     // Check if the input string is empty or null
//     if (!str) return str;

//     // Capitalize the first letter and concatenate it with the rest of the string
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// // Example usage:
// const inputString = "hello world";
// const capitalizedString = capitalizeFirstLetter(inputString);

// console.log(capitalizedString); // Output: "Hello world"

//------------------------------------45--------------------------------------
//a JavaScript program to determine if a variable is array
//if a variable is an array using the Array.isArray method
// function isArray(variable) {
//     return Array.isArray(variable);
// }

// // Example usage:
// const testArray = [1, 2, 3];
// const testString = "hello";
// const testObject = { key: "value" };

// console.log(isArray(testArray));  // true
// console.log(isArray(testString)); // false
// console.log(isArray(testObject)); // false
// Alternative Method:
// Although Array.isArray is the preferred and most straightforward way to check if a variable is an array,
//  you can also use the instanceof operator:
// function isArray(variable) {
//     return variable instanceof Array;
// }

// Example usage:
// const testArray = [1, 2, 3];
// const testString = "hello";
// const testObject = { key: "value" };

// console.log(isArray(testArray));  // true
// console.log(isArray(testString)); // false
// console.log(isArray(testObject)); // false
//------------------------------------46--------------------------------------
// a JavaScript program to clone an array
//Using the slice Method
// function cloneArrayUsingSlice(arr) {
//     return arr.slice();
// }

// // Example usage:
// const originalArray = [1, 2, 3, 4];
// const clonedArray = cloneArrayUsingSlice(originalArray);

// console.log(clonedArray); // Output: [1, 2, 3, 4]
// console.log(clonedArray === originalArray);
// Output: false (they are different arrays)
//------------------------------------47--------------------------------------
//the drawback of declaring methods directly in JavaScript objects
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHello = function () {
//     console.log(`Hello, my name is ${this.name}`);
// };

// const person1 = new Person('John', 30);
// const person2 = new Person('Jane', 25);

// console.log(person1.sayHello === person2.sayHello);
// Output: true
//------------------------------------49--------------------------------------
//the length of the string on the browser console using console.log()
// const myString = "Hello, world!";
// console.log("The length of the string is:", myString.length);
//------------------------------------50--------------------------------------
//all the string characters to capital letters using toUpperCase() method
// function convertToUpperCase(str) {
//     return str.toUpperCase();
// }

// // Example usage
// const originalString = "Hello, world!";
// const upperCaseString = convertToUpperCase(originalString);

// console.log("Original String:", originalString);
// console.log("Uppercase String:", upperCaseString);
//------------------------------------51--------------------------------------
// the drawback of declaring methods directly in JavaScript objects
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function () {
//     console.log(`Hello, my name is ${this.name}`);
// };

// function Employee(name, jobTitle) {
//     Person.call(this, name);
//     this.jobTitle = jobTitle;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.sayJobTitle = function () {
//     console.log(`My job title is ${this.jobTitle}`);
// };

// const employee = new Employee('John', 'Developer');
// employee.sayHello(); // Output: Hello, my name is John
// employee.sayJobTitle(); // Output: My job title is Developer
//------------------------------------52--------------------------------------
// JavaScript program to get the current date. Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// Function to get the current date in various formats
// function getCurrentDate() {
//     const today = new Date();

//     const dd = String(today.getDate()).padStart(2, '0');
//     const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//     const yyyy = today.getFullYear();

//     const format1 = `${mm}-${dd}-${yyyy}`;
//     const format2 = `${mm}/${dd}/${yyyy}`;
//     const format3 = `${dd}-${mm}-${yyyy}`;
//     const format4 = `${dd}/${mm}/${yyyy}`;

//     return {
//         'mm-dd-yyyy': format1,
//         'mm/dd/yyyy': format2,
//         'dd-mm-yyyy': format3,
//         'dd/mm/yyyy': format4
//     };
// }

// // Example usage
// const currentDateFormats = getCurrentDate();
// console.log("Current date in mm-dd-yyyy format:", currentDateFormats['mm-dd-yyyy']);
// console.log("Current date in mm/dd/yyyy format:", currentDateFormats['mm/dd/yyyy']);
// console.log("Current date in dd-mm-yyyy format:", currentDateFormats['dd-mm-yyyy']);
// console.log("Current date in dd/mm/yyyy format:", currentDateFormats['dd/mm/yyyy']);
//--------------------------------------53------------------------------------------
// Use indexOf to determine the position of the first occurrence of a in
//30 Days Of JavaScript
// Define the string
// const str = "30 Days Of JavaScript";

// // Use indexOf to find the position of the first occurrence of 'a'
// const firstOccurrence = str.indexOf('a');

// // Output the result
// console.log(`The position of the first occurrence of 'a' is: ${firstOccurrence}`);
//----------------------------------------54-------------------------------------------
// Use lastIndexOf to determine the position of the last occurrence of a in 30
// Days Of JavaScript
// Define the string
// const str = "30 Days Of JavaScript";

// // Use lastIndexOf to find the position of the last occurrence of 'a'
// const lastOccurrence = str.lastIndexOf('a');

// // Output the result
// console.log(`The position of the last occurrence of 'a' is: ${lastOccurrence}`);
//-------------------------------------------55-----------------------------------------
// Example function to validate form fields

// function validateForm(username, email) {
//     let errors = [];

//     // Check if username is empty
//     if (username.trim() === '') {
//         errors.push("Username is required");
//     }

//     // Check if email is empty
//     if (email.trim() === '') {
//         errors.push("Email is required");
//     } else {
//         // Check email format using regular expression
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             errors.push("Invalid email format");
//         }
//     }

//     return errors;
// }

// // Example usage
// const username = "john_doe";
// const email = "john.doe@example.com";

// const validationErrors = validateForm(username, email);

// if (validationErrors.length === 0) {
//     console.log("Form is valid. Submitting...");
// } else {
//     console.log("Form validation errors:");
//     validationErrors.forEach(error => {
//         console.log("- " + error);
//     });
// }
//output--Form is valid. Submitting...
//------------------------------------56------------------------------------------
// Example function to validate email format
// function validateEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Example function to validate number format (simple check for numeric value)
// function validateNumber(number) {
//     const numberRegex = /^[0-9]+$/;
//     return numberRegex.test(number);
// }

// // Example function to validate password length (minimum 8 characters)
// function validatePassword(password) {
//     return password.length >= 8;
// }

// // Example usage
// const email = "john.doe@example.com";
// const number = "12345";
// const password = "password123";

// // Validate email
// if (validateEmail(email)) {
//     console.log(`Email "${email}" is valid.`);
// } else {
//     console.log(`Email "${email}" is invalid.`);
// }

// // Validate number
// if (validateNumber(number)) {
//     console.log(`Number "${number}" is valid.`);
// } else {
//     console.log(`Number "${number}" is invalid.`);
// }

// // Validate password
// if (validatePassword(password)) {
//     console.log(`Password "${password}" meets minimum length requirement.`);
// } else {
//     console.log(`Password "${password}" does not meet minimum length requirement.`);
// }
// output-Email "john.doe@example.com" is valid.
// Number "12345" is valid.
// Password "password123" meets minimum length requirement
//------------------------------------------57------------------------------------------
// Dynamic Form Validation in JS
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Dynamic Form Validation</title>
//     <style>
//         .error {
//             color: red;
//         }
//     </style>
// </head>
// <body>
//     <h2>Dynamic Form Validation</h2>
//     <form id="myForm">
//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email">
//         <span id="emailError" class="error"></span><br><br>

//         <label for="number">Number:</label>
//         <input type="text" id="number" name="number">
//         <span id="numberError" class="error"></span><br><br>

//         <label for="password">Password:</label>
//         <input type="password" id="password" name="password">
//         <span id="passwordError" class="error"></span><br><br>

//         <input type="submit" value="Submit">
//     </form>

//     <script>
//         document.getElementById('myForm').addEventListener('submit', function(event) {
//             event.preventDefault(); // Prevent form submission

//             // Validate email
//             const email = document.getElementById('email').value;
//             const emailError = document.getElementById('emailError');
//             if (!validateEmail(email)) {
//                 emailError.textContent = 'Invalid email format';
//             } else {
//                 emailError.textContent = '';
//             }

//             // Validate number
//             const number = document.getElementById('number').value;
//             const numberError = document.getElementById('numberError');
//             if (!validateNumber(number)) {
//                 numberError.textContent = 'Invalid number format';
//             } else {
//                 numberError.textContent = '';
//             }

//             // Validate password
//             const password = document.getElementById('password').value;
//             const passwordError = document.getElementById('passwordError');
//             if (!validatePassword(password)) {
//                 passwordError.textContent = 'Password must be at least 8 characters long';
//             } else {
//                 passwordError.textContent = '';
//             }

//             // If all fields are valid, submit the form
//             if (validateEmail(email) && validateNumber(number) && validatePassword(password)) {
//                 this.submit();
//             }
//         });

//         // Function to validate email format
//         function validateEmail(email) {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             return emailRegex.test(email);
//         }

//         // Function to validate number format (simple check for numeric value)
//         function validateNumber(number) {
//             const numberRegex = /^[0-9]+$/;
//             return numberRegex.test(number);
//         }

//         // Function to validate password length (minimum 8 characters)
//         function validatePassword(password) {
//             return password.length >= 8;
//         }
//     </script>
// </body>
// </html>
//-------------------------------------58-------------------------------------
//how many type of JS Event? How to use it ?
//into the following types:
// UIeventsoccur as a result of user interaction with the browser or
//  the DOM (Document Object Model).
//  1-Click
// 2 - Double Click
// 3 - Mouse Over
// 4 - Mouse Out
// 5 - Key Down
// 6 - Key Up
//---------------------1---------------
// element.addEventListener('click', function (event) {
//     // Handle click event
// });
//-------------------2---------------------
// element.addEventListener('dblclick', function (event) {
//     // Handle double click event
// });
//--------------------3---------------------
// element.addEventListener('mouseover', function (event) {
//     // Handle mouse over event
// });
//--------------------4---------------------
// element.addEventListener('mouseout', function (event) {
//     // Handle mouse out event
// });
//--------------------5---------------------
// element.addEventListener('keydown', function (event) {
//     // Handle key down event
// });
//--------------------6---------------------
// element.addEventListener('keyup', function (event) {
//     // Handle key up event
// });
//-------------------2. Form Events----------------------
// 1 - Submit
// 2 - Change
//---------------1 - Submit-------------
// formElement.addEventListener('submit', function (event) {
//     // Handle form submission
// });
//---------------2- Change-------------
// inputElement.addEventListener('change', function (event) {
//     // Handle change event
// });
//-------------------2.Focus Events----------------------
// 1 -Focus
//     2 -Blur
// inputElement.addEventListener('focus', function (event) {
//     // Handle focus event
// });

// inputElement.addEventListener('blur', function (event) {
//     // Handle blur event
// });
//-------------------1.Focus----------------------
// inputElement.addEventListener('focus', function(event) {
//     // Handle focus event
// });
//-------------------2.Blur----------------------
// inputElement.addEventListener('blur', function(event) {
//     // Handle blur event
// });
//----------------------------58---------------------
// What is Bom vs Dom in JS
// In JavaScript (JS), BOM and DOM are important concepts that refer to different aspects of the web browser environment:

// 1. DOM (Document Object Model):
// Definition: The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a hierarchical tree of nodes.

// Purpose: The DOM allows programs and scripts to dynamically access and manipulate the content, structure, and style of web documents. It provides a way for scripts to interact with HTML elements and modify their attributes, content, and behavior.

// Usage: JavaScript code commonly interacts with the DOM to:

// Access and modify HTML elements (e.g., change text, update styles).
// Add or remove HTML elements dynamically.
// Handle user events (e.g., clicks, key presses) on HTML elements.
// Traverse the document structure (e.g., find parent/child nodes).
// Example: Accessing an element and changing its content:

// javascript
// // Accessing an element by its ID
// const element = document.getElementById('myElement');

// // Modifying its text content
// element.textContent = 'Hello, World!';

// 2. BOM (Browser Object Model):
// Definition: The Browser Object Model (BOM) represents the browser as a whole, providing objects and methods to interact with the browser window, frames, history, location, and more.

// Purpose: Unlike the DOM, which focuses on the document structure, the BOM provides interfaces for controlling browser behavior and features that are not directly related to the document content. This includes controlling the browser window, handling cookies, managing history, and interacting with the user's system.

// Components: Common components of the BOM include:

// Window Object: Represents the browser window and provides methods for manipulating it (e.g., resizing, opening new windows).
// Location Object: Represents the URL of the current page and allows navigation within the browser window.
// Navigator Object: Provides information about the browser and its capabilities.
// Screen Object: Represents the user's screen resolution and color depth.
// History Object: Allows manipulation of the browser's session history.
// Usage: JavaScript can interact with the BOM to:

// Control browser behavior (e.g., opening/closing windows, navigating to URLs).
// Access browser-related information (e.g., user agent details, screen dimensions).
// Manage cookies and local storage.
// Example: Opening a new browser window:

// javascript
// // Open a new window with specified URL and dimensions
// const newWindow = window.open('https://example.com', '_blank', 'width=600,height=400');
// Key Differences:
// Focus: DOM focuses on the structure and content of web documents, allowing manipulation and interaction with HTML/XML elements. BOM focuses on the browser environment itself, providing interfaces to control browser behavior and access browser-related information.

// Objects: DOM revolves around the document object and its related nodes (elements, text nodes). BOM includes objects like window, location, navigator, screen, and history.

// Manipulation: DOM is used for manipulating document content, structure, and style. BOM is used for controlling browser behavior, handling browser windows, and accessing browser-related information.

//-------------------------------61---------------------------------------
//
//Array vs object defences in JS
// JavaScript, arrays and objects are fundamental data structures that serve different purposes and have distinct characteristics.Understanding their differences is crucial for effectively utilizing them in programming.

//     Arrays:
//     Definition: Arrays in JavaScript are ordered collections of data stored at contiguous memory locations.They are typically used to store multiple values of the same type or different types.

//         Characteristics:

// Elements are accessed by numeric indices starting from 0.
// Arrays are dynamic and mutable, meaning elements can be added, removed, or modified after creation.
// They can hold values of different data types in a single array(e.g., numbers, strings, objects).
// Common operations include adding / removing elements(push, pop, shift, unshift), accessing elements by index, iterating over elements(using loops), and sorting.
//     Example:

// javascript
// // Creating an array
// const myArray = [1, 'two', { key: 'value' }, true];

// // Accessing elements
// console.log(myArray[0]); // Output: 1

// // Modifying elements
// myArray.push('new element'); // Adding a new element to the end
// Objects:
// Definition: Objects in JavaScript are unordered collections of key - value pairs, where each key is a unique string(or symbol) and each value can be of any data type, including other objects.

//     Characteristics:

// Elements(properties) are accessed using keys (also known as property names).
// Objects are versatile and can represent complex data structures and relationships.
// They support dynamic property addition, deletion, and modification.
// Objects are commonly used for representing entities, modeling real - world concepts, and organizing data logically.
//     Example:

// javascript
// // Creating an object
// const myObject = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//         street: '123 Main St',
//         city: 'Anytown'
//     }
// };

// // Accessing properties
// console.log(myObject.name); // Output: 'John Doe'

// // Modifying properties
// myObject.age = 31; // Changing the value of age
// Differences and Usage:
// Purpose: Arrays are used when dealing with ordered collections of data where the position of each element matters(e.g., lists, stacks, queues).Objects are used for representing entities, associations, and structured data(e.g., user profiles, configurations).

//     Access: Arrays use numeric indices for access, while objects use keys(strings or symbols).

//         Mutability: Both arrays and objects are mutable(can be changed after creation), allowing for dynamic updates.

//             Performance: Arrays are optimized for sequential access and manipulation(e.g., iterating through elements),
// while objects are optimized for accessing properties by their keys.
//--------------------------------------62-------------------------------
//the string into an array using split() Method
// const sentence = "Hello world, this is a sentence.";
// const words = sentence.split(' ');

// console.log(words);
// Output: ["Hello", "world,", "this", "is", "a", "sentence."]
//---------------------------------------63-------------------------------
//the string contains a word Script using includes() method
// const sentence = "JavaScript is a scripting language.";
// const wordToFind = "Script";

// if (sentence.includes(wordToFind)) {
//     console.log(`The string '${sentence}' contains the word '${wordToFind}'.`);
// } else {
//     console.log(`The string '${sentence}' does not contain the word '${wordToFind}'.`);
// }
//----------------------------------64---------------------------------------
//the string characters to lowercase letters using toLowerCase() Method
// const originalString = "HELLO World";
// const lowercaseString = originalString.toLowerCase();

// console.log(lowercaseString);
// Output: "hello world"
//-----------------------------------65----------------------------------------
//Character at index 15 in ’30 Days of JavaScript’ string? Use charAt() method
// const str = '30 Days of JavaScript';
// const charAtIndex15 = str.charAt(15);

// console.log(charAtIndex15);
// Output: 'v'
//------------------------------------66---------------------------------------
//copy to one string to another string in JS
// Original string
// const originalString = 'Hello, world!';

// // Copying to another string variable
// const copiedString = originalString;

// console.log(copiedString);
// // Output: "Hello, world!"







