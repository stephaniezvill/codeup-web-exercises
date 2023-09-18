"use strict"

function isEven(num) {
    return num % 2 === 0;
}
let userNum;
do {
    userNum = parseInt(prompt(`Please enter an odd number between 1 and 49`));
    if (isEven(userNum)) {
        alert(`${userNum} is even. Please enter an odd number`)
        continue;
    }
    if (userNum < 1 || userNum > 49){
        alert(`${userNum} is out of bounds. Please enter a number between 1 and 49`)
        continue;
    }
    if (!isFinite(userNum)) {
        alert(`${userNum} is not a number. Please enter a valid number`)
        continue;
    }
    break;
}while (true);

console.log(`Number to skip is ${userNum}`);

for (let i = 1; i < 50; i++) {
    if (isEven(i)){
        continue;
    }
}
if (i === userNum) {
    console.log(`A wild ${userNum} has appeared! RUN!`)
}
console.log(`Here is an odd number: ${i}`)
