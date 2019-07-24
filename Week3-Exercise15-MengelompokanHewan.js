function groupAnimals(animals) {
    let rek = [];
    for (let i = 0; i < animals.length; i++) {
        let s = 0;
        for (let j = 0; j < rek.length; j++) {
            if (animals[i][0] === rek[j]) {
                s++
            }
        }
        if (s === 0) {
            rek.push(animals[i][0])
        }
    }
    //MENCARI HASIL;
    let result = [];
    for (let i = 0; i < rek.length; i++) {
        let temp = [];
        for (let j = 0; j < animals.length; j++) {
            if (rek[i] === animals[j][0]) {
                temp.push(animals[j])
            }
        }
        result.push(temp)
    }

    return result
} //end of fucntion

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]