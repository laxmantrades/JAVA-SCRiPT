const promise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Assync wait");
        resolve() //resolve connects with then
        
    },1000)
    
})
promise1.then(function(){ // then connects with reslove
    console.log("Promise completed");
                            /*********************** */
})
//second way of doing it
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Assyn wait two completed");
        resolve()
        
    },1000)
}).then(function() {
    console.log("Promise two completed");
    
})
                     /*********************** */

const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if (!error) {
            console.log("Async created");
        resolve({username:"laxman", email:"laxman@hotmail.com"})//we can add object inside resolve
            
        }
        else{
            reject("JS went wrong")
        }
        

        

    },1000)
})

promise3.then(function(user){
    console.log(user);
    
})
.then(function(user){
    console.log(user.username);
    
}).catch(function(error){
    console.log(error);
    
})
                                /*********************** */

fetch('https://api.github.com/users/hiteshchoudhary')
.then(response=> response.json()) // it converts the api to json =>arrowfunction
.then(function (data){ // it gets the data from api
    return data;
    
})
.then(function(data){
    console.log(data.blog);
    
})
.catch(function(error){
    console.log(error);
    

})