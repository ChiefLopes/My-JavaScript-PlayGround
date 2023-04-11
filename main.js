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

const escapeSequence = "FirstLine\n\t\SecondLine\n\tThirdLine";
console.log(escapeSequence);