class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    get username (){
        return this._username.toUpperCase() //_username and username are same if we use this.username then the race will happent to 
        //to set value of the username 
    }
    set username(value){
        this._username=value
    }
    get password(){
        
        return this._password+"abcd"
    }
    set password(value){
        this._password=value
    }

}
const lax=new User("laxman","laxmanvatij@gmail.com","abcd")
console.log(lax.password);
