const tryPromise = new Promise((resolve, reject) => {
  console.log("tryPromise processing....");

  setTimeout(() => {
    resolve("Promise!");
  }, 3000);
});

const getWithPromise = new Promise((resolve, reject) => {
  console.log("Fetch data....");

  setTimeout(() => {
    const success = false;

    const data = {
      name: "user",
      email: "email",
    };

    const errorStatus = {
      status: 404,
      message: "Failed to fetch data!",
    };

    if (success) {
      resolve(data);
    } else {
      //   reject(errorStatus, "Failed to fetch data!"); //only borrow an argumen cant borrow 2, instead
      reject(errorStatus);
    }
  }, 2000);
});

tryPromise.then((resolve) => console.log(resolve)); //output came late

getWithPromise
  .then((result) => console.log(result)) //if promise success/resolved do then
  .catch((error) => console.log(error)) //if promise rejectdo catch
  .finally(() => console.log("Process finished")); // finally
