const radius=[1,2,3,4]

const area= function (radius) {
    return radius*radius
    
}
const calculate=function (radius,logic){
    const output=[]
    for (let index = 0; index < radius.length; index++) {
        output.push(logic(radius[index]))
        
    }
    return output
}

//console.log(calculate(radius,area))

console.log(radius.map((radius)=>{
  
         return radius*radius
        
    }
    
))

const number=[1,2,3,4,5]
const result =number.map((num)=>{
        return num*num*num
})
console.log(result);
