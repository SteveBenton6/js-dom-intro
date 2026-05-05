// Example 1 -  Introduction to the DOM
console.log("\nSECTION 1 - Introduction to the DOM");
// No Code

// Example 2 -  IMPORTANT NOTE: HTML & CSS
console.log("\nSECTION 2 - IMPORTANT NOTE: HTML & CSS");
// No Code

// Example 3 -  Taste of the DOM
console.log("\nSECTION 3 - Taste of the DOM");
// No Code

// Example 4 -  Another Fun DOM Example
console.log("\nSECTION 4 - Another Fun DOM Example");
// No Code

// Example 5 -  The Document Object
console.log("\nSECTION 5 - The Document Object");
// No Code

// Example 6 -  getElementById
console.log("\nSECTION 6 - getElementById");

// To select the element with id of bear-photo:
const img = document.getElementById("bear-photo");
console.dir(img);
// Shows as object type HTMLImageElement

//To select the element with id of main:
const p = document.getElementById("main");
console.dir(p);
// Shows as object type HTMLParagraphElement

// Example 7 -  getElementsByTagName
console.log("\nSECTION 7 - getElementByTagName");

//To select the input elements
const inputE = document.getElementsByTagName("input");
console.dir(inputE);
// Shows as a collection of 3 objects
// Shows as type HTMLCollection
for (let input of inputE) {
  console.log(input);
}
const arr = [...inputE];
console.log(arr);

//To select the li elements
const listE = document.getElementsByTagName("li");
console.dir(listE);
// Shows as a collection of 6 objects
// Shows as type HTMLCollection

// Example 8 -  getElementByClassName
console.log("\nSECTION 8 - getElementByClassName");

// Example 9 -  querySelector & bquerySelectorAll
console.log("\nSECTION 9 - querySelector & bquerySelectorAll");
