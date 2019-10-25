function konversiMenit(menit) {
    var jam = String(Math.floor(menit / 60));
    var mnt = String(menit % 60);



    var hasil = '';
    if (mnt.length > 1) {
        hasil = `${jam}:${mnt}`;
    } else {
        hasil = `${jam}:0${mnt}`;
    }
    return hasil;
}



console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));