const { concatSeries } = require("async");

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise); // the state is pending

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   // A promise can have .then method and a promise can return promise
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//   });
//   console.log(`Received response: ${response.status}`);
// });

console.log("Started request ...");

// we can only read the body of the response once
// this is called promise chaining
// fetchPromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//     console.log(data[0]);
//   });

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
