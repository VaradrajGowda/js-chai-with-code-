let name =  "varad"
let age  = 34
console.log(name + age + "  Age") // this is not a good practice

// Use Backticks(``)
//backticks are used to define template literals 
//inside the template literals we can use doouble and single quotes

let example = `what is 'folish' in the moring "evaing "`
console.log(example)

//Template literals are used to String interpolations 

//String interpolations are used to insert varibale or expression inside the string with the help of backticks

let friend  =  "rishi"
let mother  = "sujata"
console.log(`my frnd name is ${friend} and  my mother name is ${mother}`)


// Another way to declare string 
// in order to know this advantage paste this below code in browser

let game = new String("Good boy")
console.log(game)


console.log(game.length)// while counting the length of the string the complier will always start from  1 and not from 0 

console.log(game[0]) // output 0 
console.log(game.toUpperCase()) 
console.log(game.toLowerCase())
console.log(game) 

//  remember in the above case we are using primitive datatypes which is a string 
// so as we are using primitve datatypes we are using stack memory 
// in stack memory the original data is not changed 
// due to this  the console.log output is not changed 

//  string methods

let a  = "Bhaiya"

// TO know the length of the sstring 
console.log(a.length) // 6 (Starts from 1 and not 0 )

// to make the string in captial letters 

console.log(a.toUpperCase())

//toLowerCase() to make the string in small letters 

console.log(a.toLowerCase())


//charAt() (when you want to find which character is at a specific position.)

console.log(a.charAt(2))

// indexOf()  (when you what to know the index of the particular character in a string )
console.log(a.indexOf("y"))

//subsstring() (Extracts part of a string between two indexes.)(Does not support negative indexes.)
console.log(a.substring(0,2)) // Bh

//Slice() (Extracts part of a string between two indexes or negative positions.)(Supports negative indexes.)

console.log(a.slice(2,-1)) //aiy (here -1 refers to the last elemeny of the string)
console.log(a.slice(-2 ,-1)) //y
console.log(a.slice(-4,-2)) //ai

//remember slice and the substring are somewhat similar 
// only advantage of using the slice over substring 
//substring does not allow negative values 
// slice allows positive values 

