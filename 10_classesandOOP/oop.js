const user={
    username:"laxman",
    isLogggedin:false,
    displayMessage: function(){
        if (this.isLogggedin) {
            console.log(`The user named ${this.username} is logged in!`); 
            //this means inside this
            
        } else{
            console.log("The user failed to log in");
            
        }
       
        
    }
}
console.log(user.displayMessage());

function userdetails(username,age,isLoggged) {
    this.username=username
    this.age=age
    this.isLoggged=true
    this.greetings=function () {
        console.log(`Welcome to the webstie ${this.username}`);
        
        
    }
    
}
const userone= new userdetails("laxman",12,true)
const usertwo=new userdetails("ram",22,true,greetings())
//new can be used if we want to use one function many times

//new means complete new instance
console.log(userone)
console.log(usertwo);
;

