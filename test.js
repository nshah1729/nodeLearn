const num = 389;

function reverseGivenInteger(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev;
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)