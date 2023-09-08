// console.log('Hello from external JavaScript!');
//
// alert("Welcome to my Website!");
//
// let userChoice = prompt ("What is your favorite color?");
//
// alert(`Great, ${userChoice} is my favorite color too!`)

// let littleMermaid = prompt ("little mermaid was rented for 3 days");
//
// let brotherBear = prompt ("brother bear was rented for 5 days");
//
// let hercules = prompt ("hercules was rented for 1 day");
//
// console.log(littleMermaid + brotherBear + hercules)
//
// let userChoice = prompt ("If price for a movie per day is $3, how much will you have to pay?")
//
// alert(`the answer is ${27}!`)

// let classIsFull = confirm("Is the class full?");
//
// let scheduleConflicts = confirm("Does the class conflict with your schedule?");
//
// let studentCanEnroll = !classIsFull && !scheduleConflicts;
//
// alert(`It is ${studentCanEnroll} that you can enroll in this class.`)

let personBoughtMoreThanTwoItems = confirm("Did the person buy more than two items?");
let offerHasExpired = confirm("Has the offer expired?");
let premiumMember = confirm("Is the person a premium member?")

let productOfferCanBeApplied =(personBoughtMoreThanTwoItems || premiumMember) && !offerHasExpired;

alert(`It is ${productOfferCanBeApplied} that we can apply the offer.`);



