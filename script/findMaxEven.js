// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---



function findMaxEven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (numbers[i]%2===0 && numbers[i]>element ) {
            evenNumbers =   element;

        }
        
    }
    
}



// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let evenNumbers = numbers[0];
let max = evenNumbers;
console.log(`The max even number of ${numbers} is ${max}`);