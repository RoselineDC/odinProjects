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
let slicedString = fullName.slice(-1, 15);

// using substrin()
let substringString = fullName.substring(-1, 15);

// converting upprcase and lowercase
let upperCaseString = fullName.toUpperCase();
let lowerCaseString = fullName.toLowerCase();

// check if string wellformed or not
let isWellFormed = fullName.isWellFormed();

console.log(fullName);
console.log(`My name is ${fullName}`);
console.log(charIndex)
console.log(charCode)
console.log( `Here is the last character ${lastChar}`)
console.log(`Here is the character accessed using property access ${charAccess}`)
console.log(`Here is the sliced string ${slicedString}`)
console.log(`Here is the substring string ${substringString}`)
console.log(`Here is the uppercase string ${upperCaseString}`)
console.log(`Here is the lowercase string ${lowerCaseString}`)
console.log(`Here is the wellformed string ${isWellFormed}`)
// concatenation
// const button = document.querySelector("button");
// function signUp() {
//   button.textContent = "You have signed up";
// }
// button.addEventListener("click", signUp);
