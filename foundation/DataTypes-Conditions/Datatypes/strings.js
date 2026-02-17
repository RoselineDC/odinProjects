// declaring strings
const fullName = "Roseline Dangazela";

// Extracting characters from a string
let charIndex = fullName[0];

// character code
let charCode = fullName.charCodeAt(0);

// using at()
let lastChar = fullName.at(-11);

// property access 
let charAccess = fullName[5];

// STRING SLICE
let slicedString = fullName.slice(4, 15);

console.log(fullName);
console.log(`My name is ${fullName}`);
console.log(charIndex)
console.log(charCode)
console.log( `Here is the last character ${lastChar}`)
console.log(`Here is the character accessed using property access ${charAccess}`)
console.log(`Here is the sliced string ${slicedString}`)
// concatenation
// const button = document.querySelector("button");
// function signUp() {
//   button.textContent = "You have signed up";
// }
// button.addEventListener("click", signUp);
