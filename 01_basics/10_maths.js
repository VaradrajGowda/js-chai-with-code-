console.log(Math) // (in this case to get more benefit paste this code in browser)

//Math functions 

//1.abs()method in JavaScript returns the absolute value of a number, which is 
//the number without its sign (always positive or zero).


console.log(Math.abs(-123)) //123
console.log(Math.abs(55)) //55

//2. round() ->  method in JavaScript rounds a number to the nearest integer.

console.log(Math.round(23.34)) //23
console.log(Math.round(23.53)) //24
console.log(Math.round(-56.78)) // -57
console.log(Math.round(-56.23)) //-56


//3 . ceil() ->  method in JavaScript rounds a number up to the nearest integer, regardless of the decimal part.

console.log(Math.ceil(23.4)) // 24
console.log(Math.ceil(23.5))  // 24
console.log(Math.ceil(-34.56))//-34

//4.floor() ->  method in JavaScript rounds a number down to the nearest integer, regardless of the decimal part.

console.log(Math.floor(23.98)) // 23
console.log(Math.floor(23.45)) // 23
console.log(Math.floor(-34.67)) // -35

//5.min()
console.log(Math.min(2,3,4,5))//2


//6.max()
console.log(Math.max(2,3,4,5)) // 5gg

//math.random()-->  that generates a random decimal number between 0 (inclusive) and 1 (exclusive). 


console.log(Math.random()) // from 0 to 1 including the decimals 

console.log(Math.random() *10 )  //  from 0 to 10 incuding the decimals 

console.log(Math.random( )* 10 + 1) // from 1 to 10 including the decimals 
//sometimes in the above case  due to bodmas rule the output may differ so please you use required brackets 

// better form then the above case 
console.log((Math.random()*10) +1 ) // from 1 to 10 including the decimals 

console.log(Math.floor(Math.random()*10) +1)  // from 1 to 10 without decimales 


// too get a number between 10 and 20 using min and max 

let min  = 10 
let max = 20
console.log(Math.floor(Math.random() *  (max-min+1) + min))

