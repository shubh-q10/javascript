const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // DB calls, cryptography,

  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// this time we will not keep promise in variable and apply .then directly

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// how to pass parameter from promise to .then through resolve

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
  console.log(user["username"]);
  console.log(user["email"]);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // switch the value between true and false and then check the console
    if (!error) {
      resolve({ username: "Shubham", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// chaining using .then

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1we45" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumepromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumepromiseFive();

// using async/await and try/catch to handle api requests

// API link: https://jsonplaceholder.typicode.com/users

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(typeof response);
    console.log("response datatype is printed");
    const data = await response.json();
    console.log("this is the first user:", data[0]);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}
getAllUsers();

// using .then .catch to handle api requests

// API link: https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("this is the second data:", data[1]);
  })
  .catch((error) => {
    console.log(error);
  });
