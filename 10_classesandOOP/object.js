function newuser(user,score){
    this.user=user
    this.score=score
}

newuser.prototype.scoreup=function(){
     console.log(this.score++)
}
const chai=  new newuser("laxman",27)
chai.scoreup()
//first made a funcion 
//then connected newuser with prototype
//then gave a function value
//then called a function with scopreuo

function username(address,phone){
    this.address=address
    this.phone=phone
}
username.prototype.myhome=function () {
    console.log(`Hi my address is ${this.address}`);
    
   
    
}
let laxman= new username("denmark","9809672241")
laxman.myhome()