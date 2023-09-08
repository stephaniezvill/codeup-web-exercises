"use strict";

let myNumber = 7;

/*==== ALERT =======*/

//alert("Hello, I am an ALERT!");

/*==== CONFIRM =======*/

// let userChoice = confirm("Wait! Don't leave yet! Can I chat with you!");
//
// if (userChoice === true){
//     console.log("yay!");
// } else {
//     console.log("boo");
// }

/*==== PROMPT =======*/

let currentSpeed = prompt("How fast are you driving?");
let plannedSpeed = prompt("How fast do you want to drive?");
let distanceLeft = prompt("How many miles do you have left?");

let timeAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;

let timeAtPlannedSpeed = (distanceLeft/plannedSpeed) * 60;

let timeSaved = timeAtCurrentSpeed - timeAtPlannedSpeed;

console.log(`At your current speed you will take ${timeAtCurrentSpeed.toFixed(0)} minutes. At your planned speed you will take ${timeAtPlannedSpeed.toFixed(0)} minutes. You will save ${timeSaved} minutes. `);