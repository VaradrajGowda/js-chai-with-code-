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

//Non Primitive Datatypes (Array Examples)
let heroes = ["darshan" ,"Sudeep","Yash"]
console.log(heroes)
console.log(heroes[0]) // output darshan
console.log(heroes[-1]) //  remember the output will be "undefined" in js 
// because nagative number is always supported in python and not in js 
// if you want to access the last element from the array in js here is an alternative code 
console.log(heroes[heroes.length-1]) // output Yash


//Non primitive Datatypes (object key value pair )

let profile  = {
    "name" : "varadraj",
    "age" : 14
}
console.log(profile)

// to acces any particular key value pair 

console.log(profile.name)
// or 
console.log(profile["age"])

// to add a new key value pair 

profile.course="bscit"
console.log(profile)

profile.div = "A"
console.log(profile)

// Non Primitive (Function)
 let f1  = function(){
    a =  b  + c 
    return a 
 }

b = 12
c =  34
console.log(f1()) 

// to know the datatypes of all the Non Primtive datatypes

console.log(typeof f1) // function
console.log(typeof heroes) // object
console.log(typeof profile)// object

// for more details refer this link 

// https://262.ecma-international.org/5.1/#sec-11.4.3
