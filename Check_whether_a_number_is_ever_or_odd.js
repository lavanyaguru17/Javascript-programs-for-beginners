//compile time
const num = 11;
if (num % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
console.log(`The number ${num} is ${result}`);

//run time
const num = parseInt(prompt("Enter a number:"));
let result = (num % 2 == 0) ? "even" : "odd";
console.log(`The ${num} is ${result}`);