//STEP 1
let num1 = prompt('enter a number')
console.log(Math.abs(num1))
//STEP 2
let num2 = prompt('enter a floating point value (decimal)')
console.log(Math.ceil(num2))
//STEP 3
let num3 = prompt('enter a floating point value (decimal)')
console.log(Math.floor(num3))
//STEP 4
let arr = prompt('enter a five number delimited by a comma')
arr = arr.split(',').map(Number)
console.log(`max value in array is ${Math.max(arr)} and min value in array is ${Math.min(arr)}`)
//STEP 5
let num = prompt('enter a number to return the square root')
console.log(Math.sqrt(num))