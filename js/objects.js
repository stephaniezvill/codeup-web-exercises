"use strict";
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

 //    let person = {
 //        firstName: "Stephanie" ,
 //        lastName: "Villarreal"
 //    };
 // console.log (person)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //
    // person.sayHello = function () {
    //     return "Hello from " +  this.firstName + " " + this.lastName + "!" ;
    // }
    // console.log (person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // let shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    // function discountAmount(shoppers) {
    //     shoppers.forEach(function(shoppers) {
    //         if (shoppers.amount >= 200) {
    //             let discount = (shoppers.amount * 0.12).toFixed(2);
    //             console.log(shoppers.name + " has already spent  $" + shoppers.amount.toFixed(2) + " today. They qualify for a 12% discount " + discount + ", and therfore they will only pay $(shoppers.amount - discount) + ".")
    //         } else {
    //             console.log(shoppers.name + ", thank you for your total today is: $" + shoppers.amount.toFixed(2));
    //         }
    //     });
    // }
    // discountAmount(shoppers);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {
            title: "Harry Potter and the Sorcerer's Stone",
            author: {
                firstName:"Joanne",
                    lastName:"Rowling"
}
        },
{
    title:"Harry Potter and the Chamber of Secrets",
        author: {
            firstName:"Joanne",
                lastName:"Rowling"
        }
},
{
    title:"Harry Potter and the Prisoner of Azkaban",
        author: {
            firstName:"Joanne",
                lastName:"Rowling"
        }
},
{
    title:"Harry Potter and the Goblet of Fire",
        author: {
            firstName:"Joanne",
                lastName:"Rowling"
        }
},
{
    title:"Harry Potter and the Order of the Phoenix",
        author: {
            firstName:"Joanne",
                lastName:"Rowling"
        }
},
{
    title:"Harry Potter and the Half-Blood Prince",
        author: {
            firstName:"Joanne",
                lastName:"Rowling"
        }
},
{
    title:"Harry Potter and the Deathly Hallows",
        author: {
            firstName:"Joanne",
                lastName:"Rowling"
        }
},
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function bookInfo (booksArray) {
        for (let i = 0; i < booksArray.length; i++) {
            let books = booksArray[i];
            console.log("Books # " + (i + 1));
            console.log("Title: " + books.title);
            console.log("Author: " + books.author.firstName + " " + books.author.lastName);
            console.log("--------------------------------------------------")
        }
    }
    bookInfo(books);

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, authorFirstName, authorLastName, booksArray) {
        let newBook = {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        }
        booksArray.push(newBook);
        return booksArray;
    }
    createBook("Harry Potter Series", "Joanne", "Rowling", books);
    bookInfo(books);