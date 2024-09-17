
const myheroes={
    thor:"hammer",
    ironman:"suit",
    spiderman:"web",
    getthorpower:function(){
        console.log(`thor has a power of ${this.thor}`);
        
    }

}
Object.prototype.laxmn=function(){ //this gives a superpower to object 
    console.log(`I am fan of ${this.thor}`);
    
}
myheroes.laxmn()
//console.log(myheroes.getthorpower());
/////example two
const userOne={
    Name:"laxman",
    Lang:"Javascript"
}
const usertwo={
    Name:"lax",
    Lang:"Kotlin"
}
Object.prototype.newfunc=function () {
    console.log(`I am ${this.Name} and I am learning ${this.Lang}`)
    
                  
    
}
userOne.newfunc()
usertwo.newfunc()
                                    
                        ///////////////////
//inheritance
 const Teacher={
    make:"video"


 }
 const teachassistance={
    isAvailable:false,
    nameofTeachassit:"Laxman"

 }
 const TAsupport={
    make_assignment:"Js ",
    fulltime:true
 }
 Object.setPrototypeOf(Teacher,teachassistance) // setPrototypeof gives the access of the two  objects only 
 console.log(Teacher.isAvailable);
 console.log(Teacher.nameofTeachassit);
 console.log(Teacher.fulltime); //this will print undefined because setprottype acces two object
 

 const myarray=["thor","ironman","spiderman"]
 Array.prototype.laxman=function() { //this gives superpower to array only
    console.log(`I love thor`);
    
 }
 myarray.laxman()// like we access object myobj.name its the same
 const myaaray1=["superman","batman"]
  // we can combine array using spread operator no need of Object.prototype but still we can use the Object.prototype
  //because array is also an object
 
 const name="laxman   "
 //what should i do so that i dont have to write the .trim and length everytime

 String.prototype.removespace=function(){
    console.log(`The lenght of the string is${this.trim().length}`);
    
 }
 name.removespace()

 "laxmangiri    ".removespace()