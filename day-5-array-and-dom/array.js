let hewan = ["kucing", "tikus", "kuda", "sapi", "kambing"] // length 5
// index         0   ,     1  ,    2  ,   3   ,     4

// console.log(hewan[0]);
// console.log(hewan[1]);
// console.log(hewan[2]);

// for (let i = 0; i <= hewan.length-1; i++){
//   console.log(hewan[i]);
//   if (i == 3) break
// }

// hewan.forEach((value, index) => {
//   console.log(`${value} ada di index ke-${index}`)
// })

// cuma melakukan perulangan
// hewan.forEach((data, index) => {
//   console.log(index, data)
// })

// melakukan perulangan dan bisa mengembalikan data array
let hewan2 = hewan.map((data) => {
  return data
})
console.log(hewan2)

let angka = [1,2,3,4,5] // 1

let resFind = angka.find(data => data == 3)
console.log(resFind)

let resFilter = angka.filter(data => data > 3)
console.log(resFilter)

angka = angka.map((data, index) => {
  if (data == 2 || data == 4) {
    return data * 2
  } else {
    return data
  }
})
// console.log(angka)

// console.log(multipleByTwo)