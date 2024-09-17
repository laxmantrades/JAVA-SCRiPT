//this is the example of using own constructor function in two function,they are joined by extendes 
//if i have to give the value and function of one function to another function i used class 
class User{
    constructor(username,email){
        this.username=username
        this.email=email
    }
    logme(){
        console.log(`The username is ${this.username}`);
        return`${this.username}`
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)// to acess the username from user
        this.email=email
        this.password=password
    }
    courseupdate(){
        console.log(`The course was updated by ${this.username}`);
        
}
}

const laxman=new Teacher("laxman","laxman@ms.com","hehe")
console.log(laxman.courseupdate());
console.log(laxman.logme());


const ram=new User("ram","ram@google.com")
console.log(ram.logme());

