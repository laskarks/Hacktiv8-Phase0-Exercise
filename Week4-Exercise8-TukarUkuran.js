function tukarBesarKecil(kalimat) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let alpha2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let str = '';
    for (let i = 0; i < kalimat.length; i++) {
        let s = 0;
        for (let j = 0; j < alpha.length; j++) {
            if (kalimat[i] === alpha[j]) {
                str += alpha2[j]
                s++
            } else if (kalimat[i] === alpha2[j]) {
                str += alpha[j]
                s++
            }
        }
        if (s === 0) {
            str += kalimat[i]
        }
    }
    return str
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"