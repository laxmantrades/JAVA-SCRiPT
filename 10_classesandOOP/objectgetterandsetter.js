const user={
    _name:"laxman",
    age:23,
    email:"laxmanvatij@google.com",

    get name(){
        return this._name

    },
    
    set name(value){
        this._name=value

    }
}
const tea=Object.create(user)
console.log(tea.name);

