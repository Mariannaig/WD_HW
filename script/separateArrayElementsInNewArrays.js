// TASK: Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
// evenNums - which elements will be the positive even numbers from numbersArr.
// oddNums - which elements will be the negative odd numbers from numbersArr.

// Note that the Zero is neither positive nor negative number!

// HINT: you can push a value in a array by using array.push(value) method. 

const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
let evenNums = [];
let oddNums = [];

// >>>>> your code goes bellow:
for(i=0; i<numbersArr.length; i++){
    if(numbersArr[i]>0 && numbersArr[i]%2===0){
        // console.log(numbersArr[i]);
        evenNums.push(numbersArr[i])
        
    }
}
console.log(evenNums);

for (let j = 0; j < numbersArr.length; j++) {
    if(numbersArr[j]<0 && numbersArr[j]%2!==0 ){
        // console.log(numbersArr[j]);
        oddNums.push(numbersArr[j]);
    }
    
    
}
console.log(oddNums);