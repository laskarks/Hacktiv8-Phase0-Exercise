function graduates(students) {
    let kelas = [];
    for (let i = 0; i < students.length; i++) {
        let s = 0;
        for (let j = 0; j < kelas.length; j++) {
            if (students[i].class === kelas[j]) {
                s++
            }
        }
        if (s === 0) {
            kelas.push(students[i].class)
        }
    } //end loop i

    let result = {};
    for (let i = 0; i < kelas.length; i++) {
        let rekap = [];
        for (let j = 0; j < students.length; j++) {

            if (kelas[i] === students[j].class && students[j].score > 75) {
                let rek = {};
                rek.name = students[j].name;
                rek.score = students[j].score;
                rekap.push(rek)
            }

        } //end loop j
        result[kelas[i]] = rekap;
    } //end loop i

    return result;
} //end function

console.log(graduates([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}