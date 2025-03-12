/*
const numbers = [ 4, 5, null, 6, 4, 7, null, 4, 8, 5, 6, null, 3, 9, 10, 3, 4, null, 2, 5, 6, 7, null, 8, 1, 2, null, 9, 4, 5, 6, 3, null, 7, 10, 8, 4, 2, null, 5, 6, 9, null, 7, 4, 8, null, 3, 5, 2 ]


numbers.sort(function(a, b){return b - a})
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

let sum = 0;
for(let i =0; i <numbers.length; i++) {
    sum += numbers[i];
}
 
console.log(sum);
console.log("Mean is " + sum / numbers.length);
*/

let number = 423;

if (number >= 1 && number <= 100) {
    console.log("It is between 1 and 100")
} else {
    console.log("Invalid")
}