// Tugas 4: Function Overloading

function sapaan(param: string): string;
function sapaan(param: number): string;

function sapaan(param: string | number): string {
    if (typeof param === "string") {
        return `Halo, ${param}`;
    } else {
        return `Umur: ${param} tahun`;
    }
}

console.log(sapaan("Arjun"));
console.log(sapaan(20));