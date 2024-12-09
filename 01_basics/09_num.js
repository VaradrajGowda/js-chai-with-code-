let score =  100
console.log(score)
console.log(typeof score)//number(Primitive datatypes)



// to get more benefit from this method please paste this code in browser 

let balance = new Number(122)
console.log(balance)
console.log(typeof balance)//object (Non-Primitive datatypes)
//reason(The reason typeof balance shows object is that you used the Number constructor
// (new Number(122)) instead of directly assigning the value (let balance = 122).)

console.log("----------")
console.log(balance.toString())
console.log(typeof balance)// again it is object bcoz only the number 122 is a string but the original data is still number object
// if you want to assign the whole variable as a sstring you should reassign  the variable 

// for eg 

balance = balance.toString()
console.log(typeof balance ) // string 

// new eg of chai aur code

let eg = new Number(342)
console.log(eg.toString().length)//3 (convert into string and the length is given as the output but the original value will be object)
console.log(eg.toFixed(3))//342.000
/*
toFixed()->The toFixed() function in JavaScript is used to round a number to a specific number
 of decimal places and turn it into a string.

 key points 
It returns a string, not a number.
If the digits value is greater than the number's actual decimal places, it pads the number with zeros.
If the digits value is less than the number's actual decimal places, it rounds the number.

for eg 

let num = 123.456;

// Rounded to 2 decimal places
console.log(num.toFixed(2)); // Output: "123.46"

// Rounded to 0 decimal places
console.log(num.toFixed(0)); // Output: "123"

// Padded with zeros
console.log(num.toFixed(5)); // Output: "123.45600"

*/


/*
toprecision()-> this method is used to format a number to a specified length (number of significant digits).
 It returns the number as a string.



*/
let another = 134.556
console.log(another.toPrecision(3))// 135
console.log(another.toPrecision(2)) // 1.3e+2
console.log(another.toPrecision(4)) //134.6

/*
toLocaleString()--> this method is used to   format a number according 
to the local language and region-specific conventions, such as
 adding commas, currency symbols, or other formatting.

*/

let hundred = 1000000
console.log(hundred.toLocaleString()) //1 ,000,000 (By default)
console.log(hundred.toLocaleString("en-IN")) //10,00,000
console.log(hundred.toLocaleString("en-in",{style:"currency" ,currency:"INR"}))// ₹10,00,000.00
