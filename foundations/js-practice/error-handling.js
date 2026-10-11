// try catch // try the code and catch the error
try {
  console.log("test");
  console.log(test); //error
} catch (error) {
  console.log(error.name); //catch the error and show type error
  console.log(error.message); //catch the error and show message
}

try {
  const age = 17;
  if (age < 18) throw new Error("age below 18"); //throw manual error
} catch (error) {
  console.log(error.name);
  console.log(error.message); //show message that in throw error
} finally {
  console.log("End Proses"); //still run whenever error or no
}

console.log("");

// soal latihan
function validationRegister(data) {
  if (typeof data !== "object" || data === null)
    throw new Error("Data isn't valid");
  if (typeof data.name !== "string" || data.name.trim().length < 3)
    throw new Error("Minimum 3 character");
  if (typeof data.email !== "string" || !data.email.includes("@"))
    throw new Error("Format email isn't valid");
  if (typeof data.age !== "number" || data.age < 17)
    throw new Error("Minimum age is 17");

  return "Registration success!";
}

function register(data) {
  try {
    const result = validationRegister(data);
    console.log(result);
  } catch (error) {
    console.log("Failed", error.message);
  } finally {
    console.log("Validation process done!");
  }
}

register({ name: "Budi", email: "budi@mail.com", age: 20 });
register({ name: "Bu", email: "budi@mail.com", age: 20 });
register({ name: "Budi", email: "budimail.com", age: 20 });
register({ name: "Budi", email: "budi@mail.com", age: 15 });
register(null);
