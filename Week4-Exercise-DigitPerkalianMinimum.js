function digitPerkalianMinimum(angka) {
    let perkalian = [];
    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            perkalian.push(i)
        }
    }

    let rekap = [];
    for (let i = 0; i < perkalian.length; i++) {
        for (let j = 0; j < perkalian.length; j++) {
            if (perkalian[i] * perkalian[j] === angka) {
                rekap.push((String(perkalian[i]) + String(perkalian[j])).length)
            }
        }
        rekap.sort();
    }
    return rekap[0]

} //end of function;

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2