const myobj=Object.getOwnPropertyDescriptor(Math,"PI")  // 
console.log(myobj)

const myownobj={
    name:"laxma",
    email:"laxmamvatij@google.com",
    country:"nepal"
}



Object.defineProperty(myownobj,"name",{
    writable: true
})
console.log(Object.getOwnPropertyDescriptor(myownobj,"name"))

for (let [key,value] of Object.entries(myownobj)){
    console.log(`${key}:${value}`);

    
}