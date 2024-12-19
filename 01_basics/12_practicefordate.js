// practice session 

//1. Create a Date object for your birthday and log it in a readable format using toDateString().

let practice =  new Date(2004, 7,14)
console.log(practice.toDateString()) 

//2 .How can you get the current time in ISO format? Write the code for it.

let iso  =  new Date()
console.log(iso.toISOString())

//3 .Write code to create a Date object for January 1, 2000, 12:00 PM and log it using toLocaleString()

let pm =  new Date(2000,0,1,12,0,0)
console.log(pm.toLocaleString())


    