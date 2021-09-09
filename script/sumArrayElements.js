// Example - sum all numbers in the interval [1..10]:
var sum = 0;
for ( var x = 1; x <= 10 ; x++ ){
  sum += x ;
};
console.log("sum = " + sum);

// TASK: given the array numbers, write the code which will print in console the sum of all positive  even numbers in the array:
let numbers = [-2, 3, 7, 8, -1, 4, 2];
// >>>>>>>>> write your code bellow:
let sumPositiveEvenNumbers = 0
for(let i=0; i<numbers.length; i++ ){
    if(numbers[i]>0 && numbers[i]%2===0){
        // console.log(numbers[i])
        sumPositiveEvenNumbers=sumPositiveEvenNumbers+numbers[i]  
    }

}
console.log(sumPositiveEvenNumbers);


// expected output: 14