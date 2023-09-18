"use strict"
// WHILE LOOPS

// let i = 1;// initialization
// while(i < 10) { // test
//     console.log(i);
//     ++i;// update
// }
//console.log("Done");
//
//
// let i = 10;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }

// DO WHILE LOOPS

// let i = 10;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);
//
// let answer = 7;
// let guess = 0;
// while (guess !== answer) {
//     guess = parseInt(prompt("Enter a number from 1 to 10"));
//     if (guess !== answer){
//         console.log("Wrong Loser!");
//     }
// }
// console.log("You guessed it!");

// FOR LOOPS

// for(let i = 0; i < 10; i++) {
//     console.log("for loop:" + i);
// }
// console.log("Done")
//Don't do this for a "for loop"
// let i = 0;
// for( i < 10) {
//     console.log("for loop:" + i);
//     i++;
// }
// console.log("Done")
//
// for (let i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }
// console.log("Done")

//BREAK AND CONTINUE
// for(let i = 0; i < 10; i++) {
//     if (i >5) {
//         // break;
//         console.log("skipping rest of the iteration");
//         continue;
//     }
//     console.log("for loop:" + i);
// }
// console.log("Done")
//
// for (let i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) { // if i is odd
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);

// let answer = 7;
// //loop until the user guesses the number
// while (true) {
//     //get a guess from the user
//      let guess = getGuessFromUser();
//      guess = parseInt(guess);
//      //stop the loop if the user guesses the anser
//     if (guess === answer){
//         console.log("You guessed it!");
//         break;
//     }
//     //you guessed wrong
//     console.log("Wrong!");
// }
// function getGuessFromUser() {
//     let guess = prompt("Enter a number from 1 to 10");
//     guess = parseInt(guess);
//     if (guess < 1 || guess > 10) {
//         console.log("Please enter a number from 1 to 10!!!");
//         gues = 0;
//     }
//     return guess;
// }
// console.log("Done")
//
// myLoopingFunction(3)
// myLoopingFunction(10);
//
// function myLoopingFunction(maxIterations) {
//     for(let i = 0; i < maxIterations; i++) {
//         console.log("loop iteration i = " + i);
//     }
// }
//console.log("Done");
// function getRandomInt(min,max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }