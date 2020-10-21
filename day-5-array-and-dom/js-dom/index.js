const sayHello = () => {
  console.log("halooooo")
}

let subHeading1 = document.querySelector("#section-a h3")
subHeading1.onclick = sayHello

let title = document.getElementsByTagName("h1")[0]
title.addEventListener("click", () => {
  title.style.backgroundColor = "aquamarine"
})

// document.getElementsByTagName("h1")[0]
// .addEventListener('click', () => {
//   document.getElementsByTagName("h1")[0].style.backgroundColor = "aquamarine"
// })

let hallo = "Hallo selamat datang"
let halloSplit = hallo.split(" ")

console.log(hallo)
console.log(halloSplit)
