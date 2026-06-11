// using fetch(),  .then,  .catch  to handle api requests

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
