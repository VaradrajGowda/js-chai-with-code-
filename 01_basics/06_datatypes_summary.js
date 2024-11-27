// primitive data types 
/*
(nnbbss)
1. number 
2.  null
3. BigInt
4 . boolean 
5. symbol
6. string 

*/

// Symbol
let id  = Symbol("123")
console.log(id)

let anotherid =  Symbol("123")
console.log(anotherid)

console.log(id  == anotherid)
console.log(id  === anotherid)




//undefined
let email;
console.log(email) // undefined 


// bigint

let bignumber  =  356474647n
console.log(typeof bignumber) //bigint

let bignumber1  = 46474948
console.log(typeof bignumber1) // number


let b = BigInt(23)
console.log(b) //23n




// Reference (Non - Primitive Datatypes)

// Array , Object  ,  functions 


/*

JavaScript is a dynamically typed language.


Dynamically Typed Languages (like JavaScript):

You don't need to tell the computer what type of data (like a number or a word) a variable will hold.
The computer figures it out while the program is running.
Example:

javascript
Copy code
let x = 5;       // `x` is a number now.
x = "Hello";     // Now `x` is a string. No problem!

Statically Typed Languages (like Java or C++):

You must tell the computer what type of data a variable will hold when you write the code.
The computer checks for type mistakes before running the program.
Example:

java
Copy code
int x = 5;       // `x` can only hold numbers.
x = "Hello";     // Error! You can't assign a word to `x`.

Summary:
Dynamic typing: Types are checked while the program runs. Flexible, but errors might show up late.
Static typing: Types are checked before the program runs. Less flexible, but catches mistakes early.


 */