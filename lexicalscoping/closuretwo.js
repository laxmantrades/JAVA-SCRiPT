function user(){
    let name="laxman"
    function print(){
        console.log(`THE GIVEN NAME IS ${name}`);
        
    }
    //return print; //i return only if the whole function is stored in variable
    print()

}

user()
// const lax=user()
// lax()


     //*******************************========================******************************** */
 // function init() {
    //     let name = "Mozilla"; 
    //     function displayName() {
    //         console.log(name); 
    //     }
    //     displayName();
    // }
    // init();

    function outer(){
        let username = "laxman"
        console.log("OUTER"/*,secret*/); // we can't use secret because it's the clid function variable
        function inner(){
            let secret = "my123"
            console.log("inner", username);
        }
        function innerTwo(){
            console.log("innerTwo", username);
           //console.log(secret); we can't use secret also here because we can't access sibling variable
        }
        inner() 
        innerTwo() 
       

     }
     outer()
     //console.log("TOO OUTER", username); we can't use this also because username is called outside the scope


    // function makeFunc() {
    //     const name = "Mozilla";
    //     function displayName() {
    //         console.log(name);
    //     }
    //     return displayName;
    // }

    // const myFunc = makeFunc();
    // myFunc();
