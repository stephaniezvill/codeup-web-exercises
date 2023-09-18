    "use strict";
    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray ;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split (" | ");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     *
     * results. Why might this be useful?
     */
     function makeHTMlStringFromArray (anArray) {
         return anArray.join("<br>");
    }
    console.log(makeHTMlStringFromArray(planetsArray));


    /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

function makeUnorderListFromArray (anArray) {
    let htmlString = "<ul>";
    anArray.forEach (function(element) {
        htmlString += `<li>${ element } </li>`
        });
    htmlString += "</ul>";
    return htmlString;
    };
console.log(makeHTMlStringFromArray(planetsArray))



