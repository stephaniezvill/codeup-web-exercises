import {getRandomNumber} from './number-utils.js';

"use strict";

const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];

/*The getRandomGreeting function uses the getRandomNumber function to generate a random index for the greetings array. It then returns the greeting at that index  */

export function getRandomGreeting() {
        const randomIndex = getRandomNumber(greetings.length);
        return greetings[randomIndex];
}