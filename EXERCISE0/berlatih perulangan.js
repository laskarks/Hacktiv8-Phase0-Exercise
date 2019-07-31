var deret1 = 1;
var deret2 = 20;

console.log('LOOPING PERTAMA')

while (deret1 <= 20) {

    console.log(deret1 + ' - I love coding')

    deret1 += 2
}

console.log('LOOPING KEDUA')


while (deret2 > 0) {

    console.log(deret2 + ' - I will become fullstack developer')

    deret2 -= 2
}





2.
console.log('LOOPING PERTAMA')
for (var a = 1; a < 21; a++) {
    console.log(a + ' - I love coding')
}
console.log('LOOPING KEDUA')
for (var b = 20; b > 0; b--) {
    console.log(b + ' - I will become fullstack developer')
}



//genap ganjil
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log('GENAP')
    } else {
        console.log('GANJIL')
    }
}

// penambahan 2 kelipatan 3  
for (var i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log(i + ' KELIPATAN ' + '3')
    } else {
        console.log('""')
    }
}

// penambahan 5 kelipatan 6
for (var i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log(i + ' KELIPATAN ' + '6')
    } else {
        console.log('""')
    }
}

//penambahan 9 kelipatan 10
for (var i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log(i + ' KELIPATAN ' + '10')
    } else {
        console.log('""')
    }
}