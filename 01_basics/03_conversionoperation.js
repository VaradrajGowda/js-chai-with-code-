//case1 
let score  = "33"
console.log(typeof score)
console.log(typeof (score))

let valueinNumber  = Number(score)
console.log(typeof valueinNumber)


// case 2 
let score1  = "33abc"
console.log(typeof score1)
console.log(typeof (score1))

let valueinNumber1  =  Number(score1)
console.log(typeof valueinNumber1)
console.log(valueinNumber1)

/* in this case when "33abc" is converted to number
 when you print typeof it will show "number" but when 
 you will print only the variable like console.log(valueinNumber) it will show NaN i.e not a number

*/

//case 3 

let score3  = null
console.log(typeof score3)  
console.log(typeof (score3))

let valueinNumber3  =  Number(score3)
console.log(typeof valueinNumber3)
console.log(valueinNumber3)

/* in case 3 as  the variable is assigned as null 
so when you print typeof after converting it to number it will show number 
and before converting it will show object by default value in js 
but when you print variable it will show 0 
*/


//case 4 

let score4  = undefined 
console.log(typeof score4)  
console.log(typeof (score4))

let valueinNumber4 =  Number(score4)
console.log(typeof valueinNumber4)
console.log(valueinNumber4)

/* in case 4 when the variable is assigned as undefined 
befpre conveerting to Number it will show undefined
after converting to number it will show number 
but when you print variable it will show NaN 
*/


//case   5 
let score5  = "Vardraj" 
console.log(typeof score5)  
console.log(typeof (score5))


let valueinNumber5 =  Number(score5)
console.log(typeof valueinNumber5)
console.log(valueinNumber5)

/* in case 5 when the variable is assigned as a string value  
befpre conveerting to Number it will show String
after converting to number it will show number 
but when you print variable it will show NaN 
*/


//case6
let score6  = true 
console.log(typeof score6)  
console.log(typeof (score6))

let valueinNumber6 =  Number(score6)
console.log(typeof valueinNumber6)
console.log(valueinNumber6)

/* in case 6 when the variable is assigned as a boolean value  
befpre conveerting to Number it will show boolean
after converting to number it will show number 
but when you print variable it will show 1 and if the value is false then  it will print zero  
*/

//small recap 

/*
"33" -> Number
"33abc"  -> NaN
true  -> 1
false -> 0
"hitesh" -> NaN
null -> 0
undefined ->NaN


*/ 

// to convert a number into boolean 

let Num  =  "varadj Gowdfa"
console.log(typeof Num)

let Conversionintoboolean = Boolean(Num)
console.log(typeof Conversionintoboolean)
console.log(Conversionintoboolean)


/*
In the above case when the variable is assigned the number 
before  conversionn it will show number 
after converion to boolean when we will print typeof it will show boolean 
and the variable is printed it will show true as the input was 1 
if the input is 0 then the variable output will be false 

1 -> true 
0 -> false
"" -> 

*/

// to convert a number into string 

console.log("------------")


let someNumber  = 12
console.log(typeof someNumber)

let converttostring =  String(someNumber)
console.log(typeof converttostring)
console.log(converttostring)



/*
in the above a number is converted to string 
before conversion the typeof will show number
after cobersion to string the type will strin g
and the if the varaible is printed it will show the 33 but this 33 is in string and not in number 

*/