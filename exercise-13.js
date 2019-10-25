function xo(str) {
    var jumlahX = 0;
    var jumlahO = 0;

    for (i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            jumlahX += 1;
        } else {
            jumlahO += 1;
        }
    }
    if (jumlahX === jumlahO) {
        return true;
    } else {
        return false;
    }
}


console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));