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


