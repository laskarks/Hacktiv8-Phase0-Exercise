function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    let hasil = [];
    for (let i = 0; i < arrPenumpang.length; i++) {

        let naik = 0;
        let turun = 0;
        let tes = 0;
        for (let k = 0; k < rute.length; k++) {
            tes++;
            if (rute[k] === arrPenumpang[i][1]) {
                naik += tes;
            } else if (rute[k] === arrPenumpang[i][2]) {
                turun += tes;
            }
        }

        let rek = {};
        rek.penumpang = arrPenumpang[i][0];
        rek.naikDari = arrPenumpang[i][1];
        rek.tujuan = arrPenumpang[i][2];
        rek.bayar = 2000 * (turun - naik);

        hasil.push(rek)


    } //end loop i


    return hasil
} //end of function

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]