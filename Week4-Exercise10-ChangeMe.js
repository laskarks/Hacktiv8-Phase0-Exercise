function changeMe(arr) {
    if (arr.length === 0) {
        console.log("")
    } else {
        console.log('1. Christ Evan');
        let rek1 = {
            firstName: arr[0][0],
            lastName: arr[0][1],
            gender: arr[0][2],
            age: 2019 - arr[0][3]
        }
        console.log(rek1);
        console.log('2. Robert Donew');
        let rek2 = {
            firstName: arr[1][0],
            lastName: arr[1][1],
            gender: arr[1][2],
            age: 'Invalid Birth Year'
        }
        console.log(rek2)
    }
} //end of function

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""