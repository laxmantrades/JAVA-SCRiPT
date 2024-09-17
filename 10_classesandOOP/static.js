
class User{
    constructor(username,height,password){
        this.username=username
        this.height=height
        this.password=password

    }
    static Pas(){                   //static doesn't give access to anyone
        return `The password is ${this.password} `
    }
}
const laxman=new User("laxman","5.5","laxmangiri123")
console.log(laxman.Pas());
