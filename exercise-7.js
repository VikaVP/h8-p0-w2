// 1. Menyusun Barisan Bintang
console.log("=================1. Menyusun Barisan Bintang======================");
var rows1 = ''
for (var i = 0; i < 5; i++) {
    rows1 += '*'
    rows1 += '\n'
}
console.log(rows1)

console.log("===================2. Menyusun Barisan Bintang Dengan Nested Looping====================");

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = ''
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        rows2 += '*'
    }

    rows2 += '\n'
}
console.log(rows2)


console.log("===================3. Menyusun Barisan Tangga Bintang Dengan Nested Looping====================");
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = ''
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        rows3 += '*'
    }

    rows3 += '\n'
}
console.log(rows3)