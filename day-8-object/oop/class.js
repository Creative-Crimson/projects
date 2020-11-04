class Orang {
  constructor(nama, umur) {
    this.nama = nama
    this.umur = umur
  }

  belajar () {
    return `${this.nama} sedang belajar`
  }
}

class Mahasiswa extends Orang {
  constructor(nama, umur, NIM){
    super(nama, umur)
    this.NIM = NIM
  }
}

class Dosen extends Orang {
  constructor(nama, umur, NID, matkul){
    super(nama, umur)
    this.NID = NID
    this.matkul = matkul
  }
}

let student = new Mahasiswa("Alpha", 20, 01123456)
let dosen = new Dosen("Echo", 30, 01123456)

console.log(student.belajar());
console.log(dosen.belajar());
