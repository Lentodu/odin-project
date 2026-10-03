//Write a function called add7 that takes one number and returns that number + 7. add7(10) should return 17
function add7(number) {
  return number + 7;
}

const addResult = add7(10);
console.log(addResult);

//Write a function called multiply that takes 2 numbers and returns their product. multiply(3, 2) should return 6
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

const multiplyResult = multiply(3, 2);
console.log(multiplyResult);

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized.
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

const capitalizeString = capitalize("stRinG");
console.log(capitalizeString);

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter(str) {
  return str.at(-1);
}

const lastLetterResult = lastLetter("Sigma");
console.log(lastLetterResult);
