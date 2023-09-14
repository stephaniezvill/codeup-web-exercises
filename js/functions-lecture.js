//function declaration

//start with the `function` keyword
//follow with the name of the function
// think of what information you need in order to make the program work: these are the parameters
//you name the parameters and put them in a comma seperated list inside the parenthesis
//open up a pair of curly braces
//inside the curly braces you put the code that actually run
//this is called the code block
//finally you create a return statement

// function addTwoNumbers(num1,num2){
//     return num1 + num2;
// }
// function timeIwouldSave(currentSpeed, plannedSpeed, distanceTravel){
//     const timeAtCurrentSpeed = (distanceTravel / currentSpeed) * 60;
//     const timeAtPlannedSpeed = (distanceTravel / plannedSpeed) * 60;
//     return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
//     console.log(timeAtCurrentSpeed);
// }
//
//  let result = addTwoNumbers(2, 2);
//
// console.log(result);

//Arrow function

//Doesn't use the `function` keyword
//Define a variable with a variable name
//that variable name is how you call the function
//you put the parameters inside parentheses
//then you have an `arrow` (angle bracket and equals sign)
//then you have the return value

//const addTwoNumbers (num1, num2) {
//  return num1 + num2;
//}

//if i am just returning

//if I have multiple lines of logic inside my arrow function, i need curly braces
//if i have curly braces, i have to have a `return` keyword to define the return value

//function timeIwouldSave(currentSpeed, plannedSpeed, distanceTravel){
//     const timeAtCurrentSpeed = (distanceTravel / currentSpeed) * 60;
//     const timeAtPlannedSpeed = (distanceTravel / plannedSpeed) * 60;
//     return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
//     console.log(timeAtCurrentSpeed);

// const timeIWouldSave = (currentSpeed, plannedSpeed, distanceToTravel) => {
//     const timeAtCurrentSpeed = (distanceToTravel / currentSpeed) *60;
//     const timeAtPlannedSpeed = (distanceTravel / plannedSpeed) * 60;
//     return Math.floor(timeAtCurrentSpeed - timeAtPlannedSpeed);
// }

//function expression

// These have basically been replaced by arrow functions
//the value of this is that you have a variable name that is a reference to a function
//that is useful if you ever need to pass a function to another function, or return a function from a function
// const add = function(num1,num2){
//     return num1 + num2;
// }
// // let result = add(5,5);
// // console.log(result);
//
// // console.log(add(5,5));
//
// //don't forget to create some output
// //for your function calls
//
// console.log(add(5, 5));;