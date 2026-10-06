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

//----------Soal
const users = [
  {
    name: "Aya",
    address: { city: "Semarang", geo: { lat: -7.0, lng: 110.4 } },
  },
  { name: "Budi", address: { city: "Solo" } },
  { name: "Cici" },
];

//Tulis kode yang mencetak city dan lat dari tiap user.
// Kalau datanya tidak ada, cetak "unknown". Tidak boleh crash dan tidak boleh pakai if. Pakai ?. dan ??.
//output = Aya Semarang -7
// Budi Solo unknown
// Cici unknown unknown
users.forEach((u) => {
  console.log(
    u.name,
    u.address?.city ?? "unknown",
    u.address?.geo?.lat ?? "unknown",
  );
});

//Buat array baru berisi hanya nama produk yang stoknya masih ada, dalam bentuk string
// "Laptop - Rp9000000". Pakai filter + map, dan destructuring langsung di parameter callback-nya.
const products = [
  { nameP: "Laptop", price: 9000000, stock: 5 },
  { nameP: "Mouse", price: 150000, stock: 0 },
  { nameP: "Keyboard", price: 500000, stock: 12 },
  { nameP: "Monitor", price: 2000000, stock: 0 },
];

const inStock = products
  .filter((p) => p.stock > 0)
  .map(({ nameP, price }) => `${nameP} - Rp${price}`);

console.log(inStock);

// Buat `updatedProfile` dari `profile` dengan perubahan:
//   - age jadi 20
//   - skills ditambah "css" di akhir
//   - settings.theme jadi "light", tapi settings.lang tetap "id"
// Aturan:
//   - `profile` asli TIDAK boleh berubah
//   - buktikan dengan console.log(profile) setelahnya
const profile = {
  name: "Suki",
  age: 19,
  skills: ["js", "html"],
  settings: { theme: "dark", lang: "id" },
};

//spread first timpa kemudian
const updatedProfile = {
  ...profile,
  age: 20,
  skills: [...profile.skills, "css"],
  settings: { ...profile.settings, theme: "light" },
};

console.log(profile);
console.log(updatedProfile);

// Buat fungsi summarize(label, ...numbers) yang mengembalikan string.
//
// Contoh: summarize("Total", 10, 20, 30)
// Hasil : "Total: 60 (3 angka, rata-rata 20)"
//
// Bonus: kalau numbers kosong, jangan sampai muncul NaN.
// Contoh: summarize("Total") -> "Total: 0 (0 angka, rata-rata 0)"
function summarize(label, ...numbers) {
  const total = numbers.reduce((acc, n) => acc + n, 0);
  const average = numbers.length === 0 ? 0 : total / numbers.length;
  return `${label}: ${total} (${numbers.length} angka, rata-rata ${average})`;
}

console.log(summarize("Total", 10, 20, 30));
console.log(summarize("Total"));

// Bagian A: dengan SATU baris destructuring (nested), ambil:
//   - name
//   - mainTag   -> tag pertama
//   - otherTags -> sisa tag
//   - page      -> default 1 kalau tidak ada
//
// Bagian B: buat `copy` dari response.data.user dengan tambahan
//   active: true, TANPA mengubah objek aslinya.
//
// Petunjuk: untuk array di dalam destructuring, bentuknya
//   { tags: [mainTag, ...otherTags] }
const response = {
  status: "ok",
  data: {
    user: { id: 7, nameData: "Reza", tags: ["admin", "dev", "ops"] },
    meta: { page: 1 },
  },
};

const {
  data: {
    user: {
      nameData,
      tags: [mainTag, ...otherTags],
    },
    meta: { page = 1 },
  },
} = response;

const copyDataUser = { ...response.data.user, active: true };
console.log(copyDataUser);
console.log(response.data.user);
