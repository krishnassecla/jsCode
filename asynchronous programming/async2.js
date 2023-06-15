// const getTodos = (path, callback) => {
//   const request = new XMLHttpRequest();
//   console.log("hey jude");
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("could not fetch data", undefined);
//     }
//   });
//   console.log("i mma go");
//   request.open("GET", path);
//   console.log("after you");
//   request.send();
//   console.log("what is this");
// };
// console.log("1");
// getTodos("todos.json", (err, data) => {
//   console.log(data);
// });
// getTodos("second.json", (err, data) => {
//   console.log(data);
// });
// getTodos("third.json", (err, data) => {
//   console.log(data);
// });

// console.log("2");

// using promise
// const getTodo = (path) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("COULD NOT FETCH THE DATA");
//       }
//     });
//     request.open("GET", path);
//     request.send();
//   });
// };

// getTodo("third.jso n")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// promise chaining

// getTodo("todos.json")
//   .then((data) => {
//     console.log("first", data);
//     return getTodo("second.json");
//   })
//   .then((data) => {
//     console.log("second", data);
//     return getTodo("third.json");
//   })
//   .then((data) => console.log("thrid.json", data))
//   .catch((error) => {
//     console.log(error);
//   });

//   fetch()

const getTodos = async () => {
  // the code is blocking inside
  const response = await fetch("todos.json");
  const data = await response.json();
  console.log(data);
  const response2 = await fetch("second.json");
  const data2 = await response2.json();
  console.log(data2);
  return data;
};

getTodos().then((data) => {
  console.log("here is the data", data);
});
console.log("gu kha");
// but outside of the function it is non blocking
