function cariModus(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        let s = 0;
        for (let j = 0; j < arr1.length; j++) {
            if (arr[i] === arr1[j]) {
                s++
            }
        }
        if (s === 0) {
            arr1.push(arr[i])
        }
    } //end loop i

    let sum = [];
    for (let i = 0; i < arr1.length; i++) {
        let s = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr1[i] === arr[j]) {
                s++
            }
        }
        sum.push(s);
    }

    let testing = 0;
    for (let i = 0; i < sum.length; i++) {
        testing += sum[i]
    };

    if (testing === sum.length || sum.length === 1) {
        return -1
    } else {
        for (let i = 0; i < sum.length; i++) {
            for (let j = 0; j < sum.length; j++) {
                if (sum[j] < sum[j + 1]) {
                    let temp = sum[j];
                    sum[j] = sum[j + 1];
                    sum[j + 1] = temp;
                    let temp2 = arr1[j];
                    arr1[j] = arr1[j + 1];
                    arr1[j + 1] = temp2;
                }
            }
        }

        return arr1[0]
    }






} //end function

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1