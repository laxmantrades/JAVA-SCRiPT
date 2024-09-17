// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     EncryptPas(){
//         return `${this.password}abc`
//     }
//     toUpperCase(){
//         return`${this.username.toUpperCase()}`
//     }
//     message(){
//         return`The users name is ${this.username} and email name is ${this.email}`
//     }
// }
// const lax= new User("laxman","laxman@google.com","laxman")
// console.log(lax);
// console.log(lax.EncryptPas());//i can access the inside functions also
// console.log(lax.toUpperCase());
// console.log(lax.message());
//behind the scenes
function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
user.prototype.EncryptPas=function(){
    return `${this.password}abc`
    
}
const ram= new user("ram","ram@google.com","hahahehe")
console.log(ram.EncryptPas());








