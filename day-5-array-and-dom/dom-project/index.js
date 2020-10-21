let btnPlus = document.getElementById("btn-plus")
let btnMin = document.getElementById("btn-min")
let countNum = document.getElementById("count-num")

let num = 0

btnPlus.addEventListener('click', () => {
  num++
  countNum.innerHTML = num
})

btnMin.addEventListener('click', () => {
  // if (num != 0) {
  //   num--
  //   countNum.innerHTML = num
  // } else if (num == 0) {
  //   return
  // }

  if (num == 0) return
  num--
  countNum.innerHTML = num
})

let inputAge = document.getElementById("year")
let btnConvert = document.getElementById("convert")
let txtAge = document.getElementById("year")
let txtResult = document.getElementById("print-age")

btnConvert.addEventListener("click", () => {
  let year = inputAge.value
  let text = `${year} tahun = ${getCatAge(year)} tahun umur kucing`
  txtResult.innerHTML = text
})

const getCatAge = (n) => {
  if (n == 1) return 15
  return 4 * n + 4**2
}
