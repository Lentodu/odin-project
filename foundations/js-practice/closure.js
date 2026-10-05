// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) { //to call this function should call after the first function
//     console.log("Outer variable = ", outerVariable);
//     console.log("Outer variable = ", innerVariable);
//   };
// }

// const callFunction = outerFunction("hey");
// callFunction("Yo");

//-----PRACTICE
//bikin function makeAdder(n). Function itu mengembalikan function lain.
// Function yang dikembalikan menerima satu angka, lalu mengembalikan angka itu ditambah n.
function makeAdder(n) {
  return function (num) {
    return num + n;
  };
}

const add5 = makeAdder(5);
console.log(add5(3)); // harus 8
console.log(add5(10)); // harus 15

const add10 = makeAdder(10);
console.log(add10(3)); // harus 13
console.log(add5(3)); // harus tetap 8

//soal 2
function makeGreeter(greet) {
  return function namePerson(name) {
    return console.log(`${greet}, ${name}!`);
  };
}

//output expect
const sapaPagi = makeGreeter("Selamat pagi");
sapaPagi("Rina"); // "Selamat pagi, Rina!"
sapaPagi("Budi"); // "Selamat pagi, Budi!"

const sapaMalam = makeGreeter("Selamat malam");
sapaMalam("Rina"); // "Selamat malam, Rina!"

// soal 3
function createCounter() {
  let count = 0;

  return {
    //this is object to call 3 function
    increment: () => count++,
    decrement: () => count--,
    getValue: () => count,
  };
}

//expect output
const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue()); // 1
console.log(counter.count); // undefined (nggak bisa diakses dari luar)

//soal 4
//bikin makeLogger() buat nyatet kejadian ke dalam riwayat. Harus ada dua kemampuan:
// Nyatet satu kejadian (berupa string)
// Ngambil semua kejadian yang udah dicatat, urut sesuai masuknya
function makeLogger() {
  let log = [];
  return {
    add: function (string) {
      log.push(string);
    },
    getHistory: function () {
      return [...log];
    },
  };
}

//expect output
const log = makeLogger();
log.add("login");
log.add("klik tombol");
log.add("logout");
console.log(log.getHistory()); // ["login", "klik tombol", "logout"]
console.log(log.history); // undefined (nggak bisa diakses dari luar)

//soal 5
//Bikin once(fn) yang menerima sebuah function dan mengembalikan function baru. Function baru itu:
// pemanggilan pertama: menjalankan fn
// pemanggilan kedua dan seterusnya: nggak ngapa-ngapain
function once(fn) {
  let status = false;
  return function () {
    if (status == false) {
      fn();
      status = true;
    }
  };
}

function sayHello() {
  console.log("Hello!");
}

const helloOnce = once(sayHello);

helloOnce();
helloOnce();
helloOnce();

// expect output:
// Hello!
