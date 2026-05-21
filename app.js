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

const myImage = document.createElement("img");
myImage.src =
  "https://images.unsplash.com/photo-1548135160-2ddd99526762?ixlib=rb-1.2.1&1xid=eyJhcHBfawQiOjEyMd9&auto=format&fit=crop&w=1601&q=80";
document.body.append(myImage);
myImage.style.width = "200px";
setInterval(() => {
  const x = Math.floor(document.body.clientWidth * Math.random());
  const y = Math.floor(document.body.clientHeight * Math.random());
  myImage.style.transform = `translate(${x}px, ${y}px)`;
}, 2000);

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
console.log("\nSECTION 7 - getElementsByTagName");

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

//To select the special class elements
const specialC = document.getElementsByClassName("special");
console.dir(specialC);
// Shows as a collection of 4 objects
// Shows as type HTMLCollection
for (let special of specialC) {
  console.log(special);
}

//To select the special class elements within the ul element
const ul = document.getElementsByTagName("ul")[0];
const specialCU = ul.getElementsByClassName("special");
console.dir(specialCU);
// Shows as a collection of 2 objects
// Shows as type HTMLCollection
for (let special of specialCU) {
  console.dir(special);
}

// Example 9 -  querySelector & bquerySelectorAll
console.log("\nSECTION 9 - querySelector & bquerySelectorAll");

// Select the first h1 element (Similar to getElementsByTagName)
const headerS = document.querySelector("h1");
console.dir(headerS);
// Shows as object type HTMLHeadingElement

// Select the bear-photo id
const bearQS = document.querySelector("#bear-photo");
console.dir(bearQS);
// Shows as object type HTMLImageElement

// Select the li with class special within the ul and section tags
const liS = document.querySelector("section ul li.special");
console.dir(liS);
// Shows as object type HTMLLIElement

// Select the password input field
const pwI = document.querySelector('input[type="password"]');
console.dir(pwI);
// Shows as object type HTMLInputElement

//To select the class special elements
const specialQSA = document.querySelectorAll(".special");
console.dir(specialQSA);
// Shows as a NodeList - collection of 4 objects
// Each of the 4 shows as different object types
