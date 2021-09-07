// document.querySelector('button').addEventListener('click', function () {
//     let bodyWeight = document.querySelector('input[class="weight"]').value;
//     let bodyHeight = document.querySelector('input[class="height"]').value/100;

// console.log(`Your Body Mass Index is ${bodyWeight / (bodyHeight**2)}` )
// })


document.querySelector('button').addEventListener('click', function () {
    let bodyWeight = document.querySelector('input[class="weight"]').value;
    let bodyHeight = document.querySelector('input[class="height"]').value/100;

    let BMI = bodyWeight / (bodyHeight**2)
    if(BMI <= 18.5){
        console.log(`Your Body Mass Index is ${BMI}, which is underweight`)
    }
    else if(BMI >18.5 && BMI <=24.9 ){
        console.log(`Your Body Mass Index is ${BMI}, which is normal weight`)
    }
    else if(BMI >25 && BMI <=29.9){
        console.log(`Your Body Mass Index is ${BMI}, which is overweight`)
    }

    else if(BMI>= 30){
        console.log(`Your Body Mass Index is ${BMI}, which is obesity`)
    }
})
