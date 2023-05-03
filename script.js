
function myFunction(number1,number2) {
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
console.log(myFunction(2,3));
console.log(myFunction(2,7));
console.log(myFunction(9,7));

function arrayFunction(array) {
    //for actual value to show up make sure to put array name in front of the []
    return array[0] + (array[array.length - 1]);
}

console.log('first number plus last number is,',arrayFunction([5,4,3,2,1]));
console.log('first number plus last number is,',arrayFunction([10,4,3,2,1]));

