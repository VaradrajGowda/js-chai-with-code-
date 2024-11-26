console.log(2>1)
console.log(2>=1)
console.log(2==1)
console.log(2!=1)
console.log(2<1)
console.log(2<=1)



/*
1. in this case first the string is converted to number and then it is compared 
2. point to be noted while comparing both  the datatypes should be same if not then it is not the good practice 

*/
console.log("2" > 1) // true 
console.log("02" > 1 )// true 
console.log("2" > "3")// false

console.log("-----------------")
console.log(null > 0 )  // false  (comparison  after converting null to a number  0>0)
console.log(null == 0 ) // false  (equaltiy check will not convert null to number null == 0)
console.log(null >= 0 ) // true   (comparison  after converting null to a number  0>0)
/*
the reason is the equality check "=="  and comparsions like  " > , < ,>=,<= " works differntly 
comparison always treat(convert) null to a number thererfore null becomes  0  
so (3) null >= 0 -->true means (0>=0)
(1) null >0  --> false means (0 > 0)
*/


console.log("===========================")
console.log(undefined > 0 )   // false (comparison  after converting undefined to a number  Nan>0)
console.log(undefined == 0 )  // false (equality checkk will not convert undefined to a number Nan == 0)
console.log(undefined  >= 0 ) //  false (comparison  after converting undefined to a number  Nan>=0)

/*
the reason is the equality check "=="  and comparsions like  " > , < ,>=,<= " works differntly 
comparison always treat(convert) undefined to a number thererfore null becomes  NaN(not a number)  
so (3) null >= 0 -->true means (0>=0)
(1) null >0  --> false means (0 > 0)
*/


// ===  strict equality operator ( It compares both the value and the data type of two operands )

console.log("************")
console.log(1  === 1) //true
console.log(1 === "1") // false 
console.log(1  == "1") // true 

console.log(true == 1) // true
console.log(true  ===  1) // false 