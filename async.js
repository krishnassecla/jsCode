// const { concatSeries } = require("async");

// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log(fetchPromise); // the state is pending

// // fetchPromise.then((response) => {
// //   const jsonPromise = response.json();
// //   // A promise can have .then method and a promise can return promise
// //   jsonPromise.then((data) => {
// //     console.log(data[0].name);
// //   });
// //   console.log(`Received response: ${response.status}`);
// // });

// console.log("Started request ...");

// // we can only read the body of the response once
// // this is called promise chaining
// // fetchPromise
// //   .then((response) => {
// //     return response.json();
// //   })
// //   .then((data) => {
// //     console.log(data[0].name);
// //     console.log(data[0]);
// //   });

// // .then takes a handler function which is called after the async operation succeeds
// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .then(() => {
//     console.log(fetchPromise, "check this");
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });

// console.log(fetchPromise);

// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/pr  oducts.json"
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
// );
// const fetchPromise3 = fetch(
//   "https://mdn.github. io/learning-area/javascript/oojs/json/superheroes.json"
// );

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       // console.log(response, typeof response);
//       console.log(typeof response);
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   });

// When you need any of the promises to be fulfilled

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((response) => {
//     console.log(`${response.url}: ${response.status}`);
//   })
//   .catch((error) => {
//     console.log(`Failed to fetch: ${error}`);
//   });

//using async await
