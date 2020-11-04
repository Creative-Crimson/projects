function sayHello (name) {
  console.log("hallo selamat siang " + name);
}

let name = "Auzan"

export {
  sayHello as hello,
  name,
}