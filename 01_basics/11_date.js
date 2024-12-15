//date 

let date = new Date()
console.log(date)// coorect output but not in readable form 

console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleString())
console.log(typeof date)//object

let createdDate = new Date(2024,11,15)
//parameter order for the above date
// year,month(index) , date , hour,minutes,seconds,ms
console.log(createdDate)
console.log(createdDate.toDateString())

let revisedDate = new Date(2024,11,15,8,55,12,45)
console.log(revisedDate.toLocaleString())

let neww =  new Date("12-15-2024")
console.log(neww.toLocaleString())

//another way to declare the date 

let another = Date.now()
console.log(another)//date the will come in miiliseconds 
// to convert the above date which is in milliseconnds to seconds
console.log(Date.now()/1000)//comes in decimal 
console.log(Math.floor(Date.now()/1000)) // to avoid the decimal 


console.log(typeof another)//number and not object 
let date1  =  new Date(another)
console.log(date1)
console.log(date1.toLocaleString())

// to know the particluar date month year 