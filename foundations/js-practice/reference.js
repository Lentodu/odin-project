//this is just my note while learn

//primitive vs reference
//primitive such as number, string, boolean, undefined, null, bigint, symbol
//reference such as object, array, and function

//primitive cant be edited, but change
let a = 10;
let b = a;
b = 5;

console.log(a); //still 10 even b = a but b change into new value
console.log(b); //5

let word = "Yahalo";
let letter = word;
let firstLetter = letter[0];

console.log(word); //still same value as word = "Yahalo"
console.log(firstLetter); // change into Y

//reference is mutable (can be edited even we create new variable with value refers into real objects/array)
let object = {
  name: "Yui",
};

let objectReference = object;
objectReference.age = 19; //add new atribut

console.log(object);
console.log(objectReference); //output is same because it refers into same object

//this diferent to reference because this made new copy
let objectCopy = {
  ...object,
};
objectCopy.name = "Yukinon";
console.log(object.name); //object name still Yui
console.log(objectCopy.name); //it changes into Yukinon refers to line 37
console.log(objectCopy);

//equal
console.log(10 === 10); //primitive //output is true
// console.log([1, 2] === [1, 2]); //reference and have error lens, ouput is false
let array1 = [1, 2];
let array2 = array1;

console.log(array1 === array2); //change into true
