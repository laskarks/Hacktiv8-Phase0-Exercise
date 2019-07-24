function cariModus(arr) {
let arr1 = [];
let arr2 = [];
for (let i = 0;i<arr.length;i++) {
    let s = 0;
    for (let j = 0;j<arr1.length;j++) {
        if (arr[i] === arr1[j]) {
            s++
        }
    }
    if (s === 0) {
        arr1.push(arr[i])
    }
}
for (let i = 0;i<arr1.length;i++) {
    let count = 0
    for (let j = 0;j<arr.length;j++) {  
        if (arr1[i] === arr[j]) {
            count++
        }
    }
    arr2.push(count)
}
return arr2
} //end of function

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1