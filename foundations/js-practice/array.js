let array = ["Object 1", "Object 2", "Object 3"];

// ---------ARRAY METHOD TO ADD OR THROW ITEMS (ngubah array asli)
// array.push("Add new Object"); //add object to last index
// array.pop(); //put out last index object
// array.shift(); //put out first index object
// array.unshift("First item added"); // add object to first index[0]
// console.log(array);

const length = array.length; //len array
console.log(length);

for (const i of array) {
  //loop
  console.log(i);
}

let restArray = (...storedRest) => storedRest;

restResult = restArray("a", "b", "c", "d");
console.log(restResult);

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
//---------ARRAY METHOD TO FIND (array baru)
let findUserId = users.find((user) => user.id == 2); // find an element by using object id
let findUserByName = users.find((user) => user.name == "John"); // find an element by object name
console.log(findUserId);
console.log(findUserByName);

// const indexObject = array.indexOf("Object 1"); //find index of object
// console.log(indexObject);

//-----------array method to change
let mapMethod = users.map((u) => u.name); // change items
let userFiltered = users.filter((u) => u.id >= 2);
console.log(mapMethod);
console.log(userFiltered);

let numbers = [1, 2, 3, 4, 5, 6];

const filteredNumbers = numbers.filter((num) => num % 2 == 0); //filter items, call the items depends on the function
console.log(filteredNumbers);

//------------for each (loop for array)
const forEachMethod = numbers.forEach((num) => console.log(num + " Loop"));
console.log(forEachMethod);

//reduce gabungin isi array jadi satu nilai
//sort ngesortir

/*
    push(...items) – adds items to the end,
    pop() – extracts an item from the end,
    shift() – extracts an item from the beginning,
    unshift(...items) – adds items to the beginning.
    splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
    slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
    concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

To search among elements:

    indexOf/lastIndexOf(item, pos) – look for item starting from position pos, and return the index or -1 if not found.
    includes(value) – returns true if the array has value, otherwise false.
    find/filter(func) – filter elements through the function, return first/all values that make it return true.
    findIndex is like find, but returns the index instead of a value.

To iterate over elements:

    forEach(func) – calls func for every element, does not return anything.

To transform the array:

    map(func) – creates a new array from results of calling func for every element.
    sort(func) – sorts the array in-place, then returns it.
    reverse() – reverses the array in-place, then returns it.
    split/join – convert a string to array and back.
    reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

 */
