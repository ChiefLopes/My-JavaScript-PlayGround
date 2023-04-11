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

