import { getRandomGreeting } from './greeting-logic.js';

"use strict";
function main() {
    /*This line of code is calling the addEventListener method on the HTML element with the ID 'greetingForm'. The addEventListener method is used to register an event listener on the specified target, in this case, the form with the ID 'greetingForm'. The first argument to addEventListener is the type of event to listen for, in this case, 'submit'. The second argument is the function to be executed when the event occurs*/
    document.getElementById('greetingForm').addEventListener('submit', function (event) {
        /*This line of code is calling the preventDefault method on the event object. The preventDefault method is used to prevent the default action associated with the event from being performed. In the case of a form submission event, the default action is to submit the form data to a URL specified by the form's action attribute. By calling preventDefault, the form data is not submitted, allowing the JavaScript code to handle the form submission instead*/
        event.preventDefault();
        /*This line of code is retrieving the value of the HTML element with the ID 'name'. The getElementById method is used to access the HTML element with the specified ID. The value property is then accessed on this element to get the current value of the input field*/
        const name = document.getElementById('name').value;
        /*This line of code is calling a function named getRandomGreeting and storing the result in a constant named greeting. This function is not defined in the provided code, but it presumably returns a random greeting.*/
        const greeting = getRandomGreeting();
        /*This line of code is setting the text content of the HTML element with the ID 'greeting' to a string that includes the greeting and the name. The getElementById method is used again to access the HTML element. The textContent property is then used to set the text content of this element*/
        document.getElementById('greeting').textContent = `${greeting}, ${name}!`;
    });
}
main();