function cariMedian(arr) {
    let center = (arr.length - 1) / 2;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.length % 2 != 0) {
            if (i === center) {
                count += arr[i]
            }
        } else if (arr.length % 2 === 0) {
            if (i === center - 0.5 || i === center + 0.5) {
                count += arr[i]
            }
        }
    }

    if (arr.length % 2 != 0) {
        return count;
    } else {
        return count / 2
    }

} //end of fucntion

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5