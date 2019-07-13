var row = 5;

for (let i = 0; i < row; i++) {
    console.log('*')
}

var rows2 = 5;

for (let i = 0; i < rows2; i++) {
    let asterix = '';
    for (let j = 0; j < rows2; j++) {
        asterix += '*'
    }
    console.log(asterix)
}

var rows3 = 5;
for (let i = 0; i < rows3; i++) {
    let asterix = '';
    for (let j = 0; j <= i; j++) {
        asterix += '*'
    }
    console.log(asterix)
}