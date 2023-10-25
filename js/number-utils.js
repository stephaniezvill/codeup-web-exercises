"use strict";

/* This function uses Math.random() to generate a random decimal number between 0 (inclusive) and 1 (exclusive). It then multiplies this number by the max parameter to get a random number within the desired range. Math.floor() is used to round down to the nearest whole number */

export function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}