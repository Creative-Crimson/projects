//  function biasa
function luas (p, l) {
  return p * l
}

// function variabel
const luas = function(p, l){
  return p * l
}

// function arrow
const luas = (p, l) => {
  return p * l
}

// fucntion arrow short syntax
const luas = (p, l) => p * l

luas(2, 4)

const sayaHitungLuas = (name) => {
  console.log(name + " mendapatkan luas " + luas(4, 2));
}

sayaHitungLuas("naufal")

const celsiusToFahrenheit = (celsius) => {
  return celsius * (9/5) + 32
}

const fahrenheitToCelsius = (fahrenheit) => {
  return (fahrenheit - 32) * (5/9)
}

celsiusToFahrenheit(15)
fahrenheitToCelsius(59)

const luasAlas = (r) => {
  return 3.14 * r**2
}

const luasSelimut = (p, l) => {
  return p * l
}

const volumeTabung = (r, p, l) => {
  return (2 * luasAlas(r)) + luasSelimut(p, l) 

  // return (2 * (3.14 * r**2)) + (p * l)
}

volumeKerucut(7, 10, 5)

const volumeKerucut = (r, p, l) => {
  return luasAlas(r) + (1/3 * luasSelimut(p, l))
}



name = "Alpha"

console.log("hallo " + name + " selamat pagi");
console.log(`hallo ${name} selamat pagi`);


function getUmurKucing (tahun) {
  if (tahun == 1) {
    return 15
  } else {
    return (4 * tahun) + (4**2)
  }
}

let tahun = prompt("konvert tahun manusia ke tahun kucing")
alert(`umur kucing anda ${getUmurKucing(tahun)} tahun`)