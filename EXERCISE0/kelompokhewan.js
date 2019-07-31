function groupAnimals(animals) {
    let arr = [];
    animals.sort();
    for (let i = 0; i < animals.length; i++) {
        let s = 0;
        for (let j = 0; j < arr.length; j++) {
            if (animals[i][0] === arr[j]) {
                s++
            }
        }
        if (s === 0) {
            arr.push(animals[i][0])
        }
    }
    let hasil = [];
    for (let i = 0; i < arr.length; i++) {
        let rek = [];
        for (let j = 0; j < animals.length; j++) {
            if (arr[i] === animals[j][0]) {
                rek.push(animals[j])
            }
        } //end loop j
        hasil.push(rek)
    } //end loop i
    return hasil
} //end function

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]