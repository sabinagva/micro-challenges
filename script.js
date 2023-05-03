
function yourFunction(number1,number2) {
    if(number1 > number2) {
        console.log('first number is bigger');
    }
    else if(number1 < number2) {
        console.log('second number is bigger');
    }
    else if(number1 === number2) {
        console.log('The numbers are same');
    }
    return number1 + number2;
}
console.log(yourFunction(2,3));
console.log(yourFunction(2,7));
console.log(yourFunction(9,7));

// If the first number is bigger than the second number, return `"The first number was bigger!"`.
// If the second number is bigger than the first number, return `"The second number was bigger!"`.
// If the numbers are the same, return `"The numbers are the same!"`.

