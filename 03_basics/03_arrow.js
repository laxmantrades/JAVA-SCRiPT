const user = {
    username: "laxman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

 //user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "laxman"
//     console.log(this.username); this is a wronng placement here because it's the same scope
// }

// chai() 

// const chai = function() {
//     let username = "laxman";
//     console.log(`${this.username}`) //this is wrong here because it's under same function 
    
// } 



const chai =  () => {
    let username = "hitesh"
   console.log(this); //this is a empty object {}
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

 const addTwo = (num1, num2) => ( num1 + num2 )

//const addTwo = (num1, num2) => ({username: "laxman"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()