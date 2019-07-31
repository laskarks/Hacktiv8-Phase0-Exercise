/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
//ab ef ij  op uv

function changeVocals(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                newStr += 'b';
                break;
            case 'A':
                newStr += 'B';
                break;
            case 'i':
                newStr += 'j';
                break;
            case 'I':
                newStr += 'J';
                break;
            case 'e':
                newStr += 'f';
                break;
            case 'E':
                newStr += 'F';
                break;
            case 'o':
                newStr += 'p';
                break;
            case 'O':
                newStr += 'P';
                break;
            case 'u':
                newStr += 'v';
                break;
            case 'U':
                newStr += 'V';
                break;
            default:
                newStr += str[i];
                break;

        }
    }
    return newStr;
} //end function

function reverseWord(str) {
    let arr = str.split('').reverse();
    return arr.join('')
}

function setLowerUpperCase(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            newStr += str[i].toUpperCase()
        } else if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase()
        }
    }
    return newStr;
}

function removeSpaces(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            newStr += str[i]
        }
    }
    return newStr;
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        let change = changeVocals(name);
        let rever = reverseWord(change);
        let lowerUpper = setLowerUpperCase(rever);
        let removeSpace = removeSpaces(lowerUpper)
        return removeSpace
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'