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
console.log(a.slice(1))//haiya

//remember slice and the substring are somewhat similar 
// only advantage of using the slice over substring 
//substring does not allow negative values 
// slice allows positive and negative  values 0

// trim() to remove the whitspace 

let b  = "    babu   "
console.log(b)
console.log(b.trim())
console.log(b.trimStart()) //(Removes whitespace only from the beginning of a string.)
console.log(b.trimEnd()) //(Removes whitespace only from the beginning of a string.)

//replace()  use to replace a part of a string  with another string 

let rep =  "Harry Bhai"
let rep1 =  rep.replace("Harry", "hitesh")
console.log(rep1) // Hitesh Bhai 

console.log(rep)// Harry bHai 

//concat()  to combine the two string 

let  aa =  "riddhi"
let bb = "siddhi"

console.log(aa.concat(" sister of ",bb))


//include() The includes function in JavaScript checks if a string contains a specific substring.
// It returns true if found, otherwise false.

console.log(aa.includes("q"))// false
console.log(aa.includes("r"))// Ture

// startswith() The index to start checking from (default is 0).

let start =  "harry bhai"
console.log(start.startsWith("a")) // false
console.log(start.startsWith("h"))// true 
console.log(start.startsWith("h" ,0)) // true
console.log(start.startsWith("h",1))// false
console.log(start.startsWith("a" , 1)) // true 

console.log(start.endsWith("bhai",10)) // true
console.log(start.endsWith("bhai",9)) // false
console.log(start.startsWith("bhai",6))//true

// point to be remember 
// the second parameter in startswith indicates index number starts  from 0
// the second parameter in endswith indicates the length of the string and starts from 1 


// split() The split method in JavaScript divides a string into an array of substrings based on a specified delimiter.

// 1.Separator (optional): The character(s) to split the string by (e.g., ",", " ").
// 2.Limit (optional): The maximum number of splits to perform.

let string  = "miral , disha , purva , sneha , shruti"

console.log(string.split(",",3 ))
console.log(string.split(",",4 ))

// for more please visit mdn refernces 

// note  

// string are immutable
// means cannot change the original string 

// for eg 

let examp =  "deepak"
examp[2] = "z"
console.log(examp)// deepak










