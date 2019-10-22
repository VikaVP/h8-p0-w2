var nama = prompt("Masukkan namamu : ");
console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);

var peran = prompt("Masukan peran yang kamu inginkan (pilih antara: Ksatria, Tabib, Penyihir : ");

if (peran === 0) {
    console.log(`Peran harus diisi`);

} else if (peran === 'Ksatria') {
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran === 'Tabib') {
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
} else if (peran === 'Penyihir') {
    console.log(`Selamat datang di dunia Proxytia, ${nama}`);
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log(`Peran yang dimasukkan tidak ada dalam pilihan`);

}