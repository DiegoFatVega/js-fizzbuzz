let five_multiple = `Buzz`
let three_multiple = `Fizz`

for (let i = 0; i < 100; i++) {
    //console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} ${three_multiple} ${five_multiple}`)
    } else if (i % 3 == 0 && !(i % 5 == 0)) {
        console.log(` ${i} ${three_multiple}`)
    } else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log(` ${i} ${five_multiple}`)
    } else console.log(i);
}