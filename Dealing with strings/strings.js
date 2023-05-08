const head = document.querySelector('header');
const textSpace =  document.querySelector(".text-space")
head.style.backgroundColor = 'red'
head.style.fontSize = '50px'


/*This signals to JavaScript that the following quote is not the end of the string, 
but should instead appear inside the string. 
So if you were to print this to the console, you would get: I am a "double quoted" string inside "double quotes".*/ 
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."
textSpace.textContent = myStr; // inserted myStr into the textSpace

const trial = `i am "a double quote" and I am a "single quote"`;
console.log(trial);

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
// const badStr = 'Finn responds, "Let's go!"';
console.log(goodStr);

/**
 * In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.
Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.
 */


/**
// ! * Escape Sequences in Strings
Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you to use characters you may not otherwise be able to use in a string.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	word boundary
\f	form feed
 */

const escapeSequence = "FirstLine\n\t\SecondLine\n\tThirdLine"; console.log(escapeSequence);


/**
 *! Concatenating Strings with Plus Operator in Javascript
In JavaScript, when the + operator is used with a String value,it is called the concatenation operator. 
You can build a new string out of other strings by concatenating them together.
 */

/**
 *! Example: */
const ourStr = "I come first. " + "I come second."; console.log(ourStr);
/*The string 
~~~~~~~ "I come first. I come second." ~~~~
would be displayed in the console.
 */

/**
 * !Concatenating Strings with the Plus Equals Operator
We can also use the += operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

*!Example: */

 let conStr = "This is the first line. ";
 conStr += "This is the second line.";  console.log(conStr);
/* conStr now has a value of the string "I come first. I come second..""
 */

/**
 *! Appending Variables to Strings
 * Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (+=) operator.

Example:   */

const anAdjective = "awesome!";
let appendStr = "freeCodeCamp is ";
appendStr += anAdjective;
console.log(appendStr);


/**
 *! Find the Length of a String
You can find the length of a String value by writing .length after the string variable or string literal.
*/
console.log("Alan Peter".length); // this is equals to 10 becaus the strings there are 10 characters
 
/**
 * !Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.

For example, the character at index 0 in the word Charles is C. So if const firstName = "Charles", you can get the value of the first letter of the string by using firstName[0].
  
*! Example:  */

const firstName = "Charles";
const firstLetter = firstName[0];
const fifthLetter = firstName[4]; // finding the 5th letter
console.log(firstLetter, fifthLetter); // firstLetter would have a value of the string C. 
 

/**
 *! Understand String Immutability
In JavaScript, String values are immutable, which means that they cannot be altered once created.

For example, the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:
 */
let thisStr = "Bob";
myStr[0] = "J";
// Note that this does not mean that myStr could not be re-assigned. The only way to change myStr would be to assign it with a new value, like this:

let thisStr2 = "Bob";
thisStr2 = "Job";


/**
 *! Use Bracket Notation to Find the Nth Character in a String
You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at 0, so the first character is actually the zeroth character.

Example: */

const theName = "Ada";
const secondLetterOftheName = theName[1];
console.log(secondLetterOftheName);// secondLetterOfFirstName would have a value of the string {d}.
const lastCharOftheName = theName[theName.length - 1];
console.log(lastCharOftheName);

/**
 * Use Bracket Notation to Find the Last Character in a String
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:  */

const firstName1 = "Ada";
const lastLetter = firstName[firstName.length - 1];
// lastLetter would have a value of the string a.


  // ! javascript Objects...


/** 
 * Objects
As we know from the chapter Data types, there are eight data types in JavaScript. 
Seven of them are called “primitive”, because their values contain only a single thing 
(be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data and more complex entities.
In JavaScript, objects penetrate almost every aspect of the language. 
So we must understand them first before going in-depth anywhere else.

An object can be created with figure brackets {…} with an optional list of properties. 
A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

We can imagine an object as a cabinet with signed files. 
Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.
 * In JavaScript, almost "everything" is an object.

>>> Booleans can be objects (if defined with the new keyword)
>>> Numbers can be objects (if defined with the new keyword)
>>> Strings can be objects (if defined with the new keyword)
>>> Dates are always objects
>>> Maths are always objects
>>> Regular expressions are always objects
>>> Arrays are always objects
>>> Functions are always objects
>>> Objects are always objects
All JavaScript values, except primitives, are objects.
 */
const person = {
  name: "Max",
  age: "20yrs",
  class: "mid",
  Nationality: "Nigerian",
};

// const x = person;
// x.name = "ben"  
console.log(person["name"]);



 