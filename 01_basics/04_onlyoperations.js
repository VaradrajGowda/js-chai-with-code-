let value = 3

let negvalue = -value 

console.log(negvalue)

console.log(2+2)
console.log(2-3)
console.log(3*3)
console.log(3**3)
console.log(3/5)
console.log(3%5)
 
let str1 =  "Varad"

let str2 = " Gowda"
let str3  = str1 + str2 
console.log(str3)


console.log( 1 + "2") //  output = 12
console.log(1  + 2 + "3") // output = 33

console.log(1  + "2" + "2") // output  = 122

console.log("2" + 3 ) // output =  23
console.log("1" + 2 + 2) // output =  122



/* order of precedence of calculation in js 

1. Parenthesis ()
2. Multiplication 
3. Division 
4.  Modulus 
5. addition 
6. Sybtraction 

*/

console.log(3 + 4 *  27  / 3  )  // output =  39
console.log(3 + 7 * 8 % 43 ) // output =  16
console.log(3 + 7  * (4 - 2 ))

console.log(true) // output =  true 
console.log(-true) //output =  -1  (In JavaScript, the unary negation operator (-) attempts to convert the operand to a number)
console.log(+true)  //output  =  1 (same as the above the unary operator (+) converts the boolean value to number )
// console.log(true+) //output  = error

console.log(false)  //output = false 
console.log(-false) // output =  -0
console.log(+false)// output =  0
// console.log(false+) // error 

console.log("") // output  =  blank
console.log(+"") // output = 0
console.log(-"") // output  =  -0


//PREFIX AND POSTFIX 

let gamecounter  = 120
gamecounter++
console.log(gamecounter) // output will be 121


let gamecounter1  = 150
++gamecounter1
console.log(gamecounter1)//output will be 151


let a = 23
console.log(a++) // 23
console.log(a) // 24

let b  = 45
console.log(++b) // 46
console.log(b) // 46





