let janji = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("hallo")
    }, 5000)
  } else {
    reject()
  }
})

// await utk nungguin promise
// await berjalan di dlm async function
const sayHello = async () => {
  let result = await janji
  console.log(result);
}

console.log(1); // proses 1
sayHello()      // proses 2
console.log(3); // proses 3


// async function yg me-return data, akan menjadi sebuah promise
const getNumber = async () => {
  return 2
}
console.log(getNumber());

// pemanggilan promise
getNumber()
.then(result => {
  console.log(result + " crimson");
})

const getResult = async () => {
  let result = await getNumber()
  console.log(result);
}
getResult()