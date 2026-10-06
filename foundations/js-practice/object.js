//object

const objectPerson = {
  name: "Name Person",
  age: 22,
  job: "Athlete",
  hobby: "Sports",
  size: {
    //nested object
    height: 170,
    weight: 55,
  },
  //method() from object
  greeting: () => console.log("Hello"),
  introduce: function () {
    // Use regular function if you want `this` to refer to the object.
    console.log(
      `My name is ${this.name}, age ${this.age}, my hobby is ${this.hobby}`, // `this` refers to the object, allowing us to access its properties.
    );
  },
};

objectPerson.newAtribut = "Sigmaboy"; //create new atribut into object called newAtribut and value is "Sigmaboy"
console.log("My Name is", objectPerson["name"]);
console.log(objectPerson.size.height);
console.log(objectPerson.newAtribut);
delete objectPerson.newAtribut; //delete atribut
//to access object using objectname + .
objectPerson.greeting();
objectPerson.introduce();

//array of object

let cars = [
  {
    name: "Mazda",
    year: "2022",
    price: 20000,
    color: "red",
  },
  { name: "Toyota", year: "2022", price: 40000, color: "white" },
  { name: "BMW", year: "2021", price: 70000, color: "white" },
  { name: "Nissan", year: "2021", price: 70000, color: "white" },
];

console.log(cars[1]["name"]); //access specific atribut object based on index
console.log(cars[0]); //access full object based on index

let car = {
  name: "Mercedes",
  year: "2022",
  price: 20000,
  color: "red",
};

cars.push(car); //add new object into array object (last index)
const testObjectMap = cars.map((c) => c.name); //map array
console.log(testObjectMap);
console.log("");

//destructuring
const [firstCar, secondCar, thirdCar, ...extraCars] = cars; //destructuring array

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);
console.log(extraCars);

const { name, age, size } = objectPerson; //destructuring object
function displayPerson({
  name,
  age,
  size: { height, weight },
  job = "Jobless",
}) {
  console.log(
    `this person data is : ${name}, ${age}, ${height}, ${weight}, ${job}`,
  );
}
displayPerson(objectPerson);

//spread / disebar
const array1 = [1, 2, 3];
const array2 = ["obj", "obj2", "obj3"];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

const obj1 = { name: "Suki", age: 19 };
const obj2 = { id: 1 };
const combinedObject = { ...obj1, ...obj2, money: 10000 };
console.log(combinedObject);

//rest / sisanya
//function parameter and can only used once and on last parameter
function displayBiodata(firstName, lastName, ...otherInformation) {
  return `${firstName} ${lastName}, ${otherInformation}`;
}

console.log(displayBiodata("Heyavo", "Valac", "Naea", "Lalla", "Other args"));
