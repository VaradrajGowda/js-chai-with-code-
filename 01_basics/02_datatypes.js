"use strict" ; // treat all js code as newer version 

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("varad")

let a = null
let b =  34
let c = true 
let d = BigInt(23) + BigInt(34)
let e  = Symbol("i ma symbol ")
let f =  "varad"

console.log(a,b,c,d,e,f)
console.table([a,b,c,d,e,f])

/*
Primitive Data Types:

Number
String
Boolean
Undefined
Null
Symbol
BigInt



// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


*/


/*
Non-Primitive Datatypes

Objects (e.g., { key: value })
Arrays (e.g., [1, 2, 3])
Functions (e.g., function() {})
Date, RegExp, Map, Set, etc.
*/

// to know the datatypes of any variables

console.log(typeof e)
console.log(typeof b)
console.log(typeof true)


console.log(typeof undefined); // undefined
console.log(typeof null); // object
