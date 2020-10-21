// let angka = [1,2,3,4,5]

let angka = [
// 0  1  2
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [7, 8, 9]  // 2
]

console.log(angka[0][0])
console.log(angka[1][1])

for (let i = 0; i < angka.length; i++){
  for (let j = 0; j < angka[i].length; j++){
    console.log(angka[i][j])
  }
}

let persons = [
  {
    name: "alpha",
    age: 20
  },
  {
    name: "Beta",
    age: 21,
    hobbies: ["sleep", "reading", 'watching']
  },
  {
    name: "Charly",
    age: 22
  },
]

persons[2].name
persons[1].hobbies[1]


