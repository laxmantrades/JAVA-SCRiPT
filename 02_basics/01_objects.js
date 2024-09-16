
const mysym= Symbol("laxman")
let myobj = {
    "Name": "laxman",
    email:"laxman@google.com",
    phone : 9809572241,
    [mysym]: "Hi i am laxman",
    address:"denmark",
    lastlogindays : ["Monday", "Tuesday"]


}
console.log(myobj["lastlogindays"][0]); //same output
console.log(myobj.lastlogindays[0]); //sameoutput


// console.log(myobj.email,myobj.phone) // wrong method
// console.log(myobj["email"])
// console.log(myobj["Name"])

// myobj.email="laxman@microsoft.com" //to overwrite email
// console.log(myobj) 


// myobj.greeting = function(){ //to insert a function in the object
//     console.log("Hi, how are you")
// }
// console.log(myobj.greeting())
// console.log(myobj)

// myobj.Class= function(){ //to insert a class function in the object
//     console.log(`I read in class 12 and i am ${this.Name}`)
// }
// console.log(myobj.Class)



