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
