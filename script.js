
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

let result = 0;
function combinedFunction(array,num1) {
 result = ((array[array.length - 1]) + (array[array.length - 2]));
 return result.toString
}
console.log('CombinedFunction in string form is', combinedFunction([1,2,3,4]));


let totalYears = [];
sum = 0;
totalYears.push(({ name: "Tony", yearsOfExperience: 10 }));
totalYears.push(({ name: "Carla", yearsOfExperience: 4 }));
totalYears.push(({ name: "Kris", yearsOfExperience: 14 }));

function totalYearsOfExperience(totalYear) {
    for(let year of totalYear) {
        sum += year.yearsOfExperience;
    }
    return sum;
}
console.log('total experience of employees are', totalYearsOfExperience(totalYears));


function sumOfArrays(arr1,arr2) {
    
    for(number of arr1){
        console.log('number is', number)
        
        for(numbers of arr2) {
            console.log('numbers is', numbers)
        }  
        sum += (arr1[arr1.length]) + (arr2[arr2.length])
    }
   
    return sum;  
    }
console.log('function sumOfArray is', sumOfArrays([1,2,3,4],[4,5,6,7]));
