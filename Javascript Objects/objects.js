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


Creating a JavaScript Object
With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().
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
