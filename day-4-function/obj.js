
const person = {
  name: "Alpha",
  age: 20,
  address: "Jl 123",
  phoneNumber: 0812345,
  sleep: () => {
    console.log(`org ini sedang tertidur`);
  }
}

console.log(person.name);
console.log(person['name']);

person.name = "Beta"

console.log(person.name)

person.status = "work"

for (const key in object) {
  console.log(key);
}

person['name']
person['age']
person['address']
person['phoneNumber']
person['sleep']


let kucing = {
  jenis: "omnivora",
  kaki: 4,
  gender: "L",
  warna: "oren",
  umur: {
    hari: 19,
    bulan: 4,
    tahun: 2
  },
  ibu: {
    jenis: "karnivora",
    kaki: 4,
    gender: "P",
    warna: "putih"
  },
  suara: function() {
    return "meong meong"
  },
  makan: () => "ikan"
}


let sayHello = () => {
  console.log("hallo ini saya");
}

let sayHello = person => {
  return `hallo ini ${person.nama}`
}

let sayHello = () => "hallo ini saya"

sayHello({name: "alpha", age: 20})


let angka = [1, 2, "hallo", true, {name: "alpha"}]
// index     0  1     2       3          4

angka[2]