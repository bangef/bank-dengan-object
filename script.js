function Bank(nama, kas, pin) {
    this.nama = nama;
    this.kas = kas;
    this.pin = pin;

    this.login = (pin) => {
        if (pin === this.pin) {
            return console.log(`Selamat, datang ${this.nama}.`);        
        } else {
            return console.log(`Anda salah memasukan pin, kesempatan.`);
        }
    }

    this.nabung = (nabung) => {
        this.kas += nabung;
        return console.log(`Anda menabung sejumlah Rp. ${nabung}\nSisa saldo anda : Rp. ${this.kas}.`);
    }

    this.narik = (narik) => {
        if (this.kas <= 0) {
            return console.log(`Maaf, saldo anda Rp. ${this.kas}`);
        } else {
            this.kas -= narik
            return console.log(`Anda melakukan penarikan sejumlah Rp. ${narik}\nSisa saldo anda : Rp. ${this.kas}.`);   
        }
    }

    this.transfer = (transfer, tujuan) => {
        if (this.kas <= 0){
            return console.log(`Maaf, saldo anda Rp. ${this.kas}.`);
        } 
        else {
            this.kas -= transfer;
            tujuan.kas += transfer;
            return console.log(`Transfer ke ${tujuan.nama} berhasil Sebesar : Rp. ${transfer}\nSisa saldo anda : Rp. ${this.kas}.`)
        }
    }

    this.cekSaldo = () => {
        return console.log(`Pemilik tabungan : ${this.nama}\nSaldo tabungan : Rp. ${this.kas}`)
    }
}

var client1 = new Bank('Ficri', 0, 123456);
var client2 = new Bank('Anto', 0, 123456);