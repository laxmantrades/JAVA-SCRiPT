// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log("DB CONNECTED");
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('laxman');
( (num1,num2) => {
    
    console.log(num1+num2);
    
} )(1,2);
