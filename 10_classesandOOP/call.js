//the call is used when we have function inside function
//we are using discord example for it

function createUser(username){
    this.username=username
    

   
}
function setusername(username,email,password){
    createUser.call(this,username)//call means calling one function inside another function 
    //this disappears while coming this so this provide this username of the function
    this.email=email
    this.password=password



}
const lax= new setusername("laxman","laxmanvatij@gmail.com","123") //new for new instance

console.log(lax);
