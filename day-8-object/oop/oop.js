// Buat objek biasa (literal)
let personA = {
  name: "Alpha",
  age: 20
}

let personB = {
  name: "Beta",
  age: 20
}

let personC = {
  name: "Chalie",
  age: 20
}

// Cetakan Function
function Person(nameArgs, age){
  const name = nameArgs
  this.age = age
  // console.log(this);
}

let person1 = new Person("Alpha", 20)
let person2 = new Person("Beta", 20)
let person3 = new Person("Chalie", 20)

console.log(person1);

// Cetakan class ES6
class Hewan {
  constructor(name, feet){
    this.name = name
    this.feet = feet
  }

  eat() {
    return `${this.name} sedang makan`
  }
}

let hewan1 = new Hewan("Kucing", 4)
let hewan2 = new Hewan("Ayam", 2)

console.log(hewan1.eat());