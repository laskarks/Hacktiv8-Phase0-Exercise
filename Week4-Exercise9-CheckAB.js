function checkAB(num) {

let str = ['a','b'];
let no = [];
for (let i = 0;i<str.length;i++){
    let rek = [];
    let count = 0;
    for (let j = 0;j<num.length;j++) {
        count++
        if (str[i] === num[j]) {
            rek.push(count)
        }
    }
    no.push(rek)
}//end loop i

//MENGETES MASING -------------------------------------------------------------->

let tesA = 0;

for (let i = 0;i<no.length;i++) {
    
    for (letj = 0;j<no[i].length)
}


return no
}//end of function

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false