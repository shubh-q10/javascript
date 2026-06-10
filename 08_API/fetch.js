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



// getting data from Hitesh Choudhary github API


fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("This data is from hitesh choudhary github API:", data);
  })
  .catch((error) => {
    console.log(error);
  });
