/*
Merubah dari constructor function biasa ke prototype constructor
guna menghemat pemakaian memori, atau new akan membuat sebuah object baru, dan semua this yang ada di constructor akan di-bind ke object yang baru.
Property prototype pada constructor akan di-set ke property __proto__ pada object yang baru dibuat tadi.
console.log akan menghasilkan return value undifined, maka dari itu untuk menampilkan hasil ke dalam consol tidak usah menggunakan console.log
*/


/*
constructor function utama.
*/
function Bank(nama, kas, pin) {
    this.nama = nama;
    this.kas = kas;
    this.pin = pin;
}

/*
method dengan prototype.
*/
Bank.prototype.login = (pin) => {
    if (pin === this.pin) {
        return `Selamat, datang ${this.nama}.`;
    } else {
        return `Anda salah memasukan pin, kesempatan.`;
    }
}

Bank.prototype.nabung = (nabung) => {
    this.kas += nabung;
    return `Anda menabung sejumlah Rp. ${nabung}\nSisa saldo anda : Rp. ${this.kas}.`;
}

Bank.prototype.narik = (narik) => {
    if (this.kas <= 0) {
        return `Maaf, saldo anda Rp. ${this.kas}`;
    } else {
        this.kas -= narik
        return `Anda melakukan penarikan sejumlah Rp. ${narik}\nSisa saldo anda : Rp. ${this.kas}.`;
    }
}

Bank.prototype.transfer = (transfer, tujuan) => {
    if (this.kas <= 0) {
        return `Maaf, saldo anda Rp. ${this.kas}.`;
    }
    else {
        this.kas -= transfer;
        tujuan.kas += transfer;
        return `Transfer ke ${tujuan.nama} berhasil Sebesar : Rp. ${transfer}\nSisa saldo anda : Rp. ${this.kas}.`;
    }
}

Bank.prototype.cekSaldo = () => {
    return `Pemilik tabungan : ${this.nama}\nSaldo tabungan : Rp. ${this.kas}`;
}

var client1 = new Bank('Ficri', 0, 123456);
var client2 = new Bank('Anto', 0, 123456);