function urutkanAbjad(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < alpha.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (alpha[i] === str[j]) {
                result += alpha[i]
            }
        }
    }
    return result;
} //end of fucntion

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'