// function addtownumber(number1,number2){
//     console.log(number1+number2);

// }
//addtownumber(2,4)

/***********************way2*********************/

// function addtownumber(number1,number2){
//     let addition=number1+number2;
//     return addition
// }
// let result =addtownumber(3,4)
// console.log("Result :",result)


/*******************way1******************/

// function login_message (user="Sam"){
//     if (!user){
//         console.log("Please enter a username!") 
//         return 
//     }
//     console.log(`${user} has just logged in!`)

// }
// login_message()

/********************* way 2*********** */

// function login_message (user){
//     if (!user.person1){
//         console.log("Please enter a username!")
//      return
//     }
//     console.log(`${user.person1} has just logged in!`)

// }
// login_message({
//     person1:"Laxman"
// })

/******************** 3 way*********** */

// let userInfo= {
//     username:"",
//     isloggedin: true
// }

// function secondway(user){
//     if (!user.username){
//         console.log("Please enter your username!");
//         return
        
//     }
//     console.log(`${user.username} has just logged in`)

// }
// secondway(userInfo)

// function addCartPrice (...price){
    
//     return price

// }
// Newmessage = addCartPrice(200,500,300)

// console.log("Your total bill is Rs",Newmessage[0]+Newmessage[1]+Newmessage[2])


/****************.     OBJECT FUNCTION ********** */
// const username= {
//     Item:"Curved Monitor",
//     price: 45
//}

/***************2 way****************'*/

// function objectexample(user){
//     console.log(`The price of ${user.Item} is ${user.price}`);
//     return user
    
// }
// objectexample({
//     Item:"Curved Monitor",
//     price:555
// })

/********** function of arrays *****''' */
myNewArray= [400,200]
function secondValue(number){
    return number[1]
}
console.log(secondValue(myNewArray));










