// 1. Melakukan Looping Menggunakan While
console.log("===================1. Melakukan Looping Menggunakan While====================");
console.log("LOOPING PERTAMA");
var nomor = 2;
while (nomor <= 20) {
    console.log(nomor + ' - I love coding');
    nomor += 2;
}
console.log("LOOPING KEDUA");
var nomor = 20;
while (nomor >= 2) {
    console.log(nomor + ' - I will become fullstack developer');
    nomor -= 2;
}

// 2. Melakukan Looping Menggunakan For
console.log("===================2. Melakukan Looping Menggunakan For====================");
console.log("LOOPING PERTAMA");
var panjang = 20;
for (angka = 1; angka <= panjang; angka++) {
    console.log(angka + " - I love coding")
}
console.log("LOOPING KEDUA");
var ulang = 1;
for (nomor = 20; nomor >= ulang; nomor--) {
    console.log(nomor + " - I will become fullstack developer")
}


// 3. Angka Ganjil dan Genap
console.log("===================3. Angka Ganjil dan Genap====================");
console.log("=============ini pertambahan counter 1=============");

for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(" Angka " + i + " adalah GENAP");

    } else {
        console.log(" Angka " + i + " adalah GANJIL");

    }
}

console.log("=============ini pertambahan counter 2=============");
var nomor = 1;
while (nomor <= 100) {
    nomor += 2;
    if (nomor % 3 === 0) {
        console.log(nomor + " KELIPATAN 3");
    }

}
console.log("=============ini pertambahan counter 5=============");
var nomor = 1;
while (nomor <= 100) {
    nomor += 5;
    if (nomor % 6 === 0) {
        console.log(nomor + " KELIPATAN 6");
    }

}
console.log("=============ini pertambahan counter 9=============");
var nomor = 1;
while (nomor <= 100) {
    nomor += 9;
    if (nomor % 10 === 0) {
        console.log(nomor + " KELIPATAN 10");
    }
}