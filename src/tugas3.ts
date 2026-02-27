// Tugas 3: Class Sederhana

class Lingkaran {
    jariJari: number;

    constructor(jariJari: number) {
        this.jariJari = jariJari;
    }

    hitungLuas(): number {
        return Math.PI * this.jariJari ** 2;
    }
}


const lingkaran1 = new Lingkaran(7);


console.log("Luas lingkaran:", lingkaran1.hitungLuas());