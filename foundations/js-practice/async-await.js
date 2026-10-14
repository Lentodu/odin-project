//konsep sama dengan promise

async function getWithAsync() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    // const getName = await data.results.map((m) => m.name);
    // console.log(data);
    // return getName;
    return data.results[0].name;
  } catch (error) {
    console.log("Failed to fetch data!", error.message);
  }
}

function sayHi() {
  console.log("Hi");
}

// getWithAsync();
const namePokemon = await getWithAsync();
console.log(namePokemon);
sayHi(); //proses dijalanin dulu sambil menunggu fetch selesai
