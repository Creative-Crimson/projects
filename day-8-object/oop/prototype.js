// Prototype
String.prototype.hurufBesar = function() {
  return this.toUpperCase()
}

String.prototype.panjangString = function() {
  return this.length
}

String.prototype.getFirst = function() {
  return this[0]
}

console.log("hallo".getFirst())

// =============================================

// Function biasa
function hurufBesar(string) {
  return string.toUpperCase()
}

console.log(hurufBesar("hallo"))

