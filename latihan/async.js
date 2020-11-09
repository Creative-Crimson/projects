// function delayConsoleLog() {
//   setTimeout(() => {
//     console.log("test 2");
//   }, 3000);
// }

// console.log("test 1");
// console.log(delayConsoleLog());
// console.log("test 3");

// Callback Function
// Promise
// async await

const promise1 = new Promise((resolve, reject) => {
  //logic

  setTimeout(() => {
    resolve("promise 1");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2");
  }, 3000);
});

// promise1
//   .then((data) => {
//     console.log(data);
//     return promise2;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async await

async function testAsyncAwait() {
    console.log(promise1)
    const resolve = await testAsyncAwait()
}

typeof