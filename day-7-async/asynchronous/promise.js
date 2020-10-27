let janji = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve("hallo")
    }, 5000)
  } else {
    reject()
  }
})

// perintah pertama
console.log(1);

// perintah ke-2
janji
.then(result => {
  // console.log(result);
  return result + " crimson"
})
.then(result => {
  console.log(result); // hallo crimson
})
.catch(err => {
  console.log(err);
})

// perintah ke-3
console.log(3);