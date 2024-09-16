

/// M Y F A V M E T H O D



const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(anyvalue => {  //anyvalue can be any name 
    //console.log(anyvalue)
});

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

 coding.forEach( (item, index, arr)=> {  // item means element,index means position and arr means the whole array
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.languageFileName);
    
})