// Memory is Divided into two parts 
// 1. Stack Memory(only for primitive data types)
//2. Heap Memory(only for non primitive data types)

// Whenever we use stack a new copy is formed  no changes in the original data
// Whenever we  use heap a new copy is not formed but the reference of the original data is used and changes are made in the original data

// stack memory examples 

let oneid  = "varad"
let otherid  =  oneid

otherid = "run"
console.log(oneid)
console.log(otherid)

// heap memory examples 

let user1 = {
    email:"varad123",
    age :20

}

let user2 =  user1
user2.email="30983809"
console.log(user1.email)
console.log(user2.email)