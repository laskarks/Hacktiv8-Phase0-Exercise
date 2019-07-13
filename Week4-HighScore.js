function highestScore(students) {
    //Mencari kelas;
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
    }

    //--------------------------------------------------------------------------->

    //Mencari nama dan sorting highscore;
    let nama = [];
    let skor = [];
    for (let i = 0; i < kelas.length; i++) {
        let rekSkor = [];
        let rekNama = [];
        for (let j = 0; j < students.length; j++) {
            if (kelas[i] === students[j].class) {
                rekNama.push(students[j].name);
                rekSkor.push(students[j].score);
            }
        } //end loop j

        for (let k = rekSkor.length - 1; k >= 0; k--) {
            for (let l = 0; l < rekSkor.length; l++) {
                if (rekSkor[l] < rekSkor[l + 1]) {
                    let temp = rekSkor[l];
                    rekSkor[l] = rekSkor[l + 1];
                    rekSkor[l + 1] = temp;
                    let temp2 = rekNama[l];
                    rekNama[l] = rekNama[l + 1];
                    rekNama[l + 1] = temp2;
                }
            } //end loop l
        } //end loop k

        nama.push(rekNama);
        skor.push(rekSkor);

    } //end loop i


    //Mengetes bila ada lebih dari satu highscore;
    let hasil = {};

    for (let i = 0; i < kelas.length; i++) {
        let rek = {};
        rek.name = nama[i][0];
        rek.score = skor[i][0];
        hasil[kelas[i]] = rek;
    }



    //--------------------------------------------->


    return hasil;
} //end of function

// TEST CASE
console.log(highestScore([{
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
        score: 86,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}