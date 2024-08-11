const MarvelHeroes = ["Ironman", 2, "Captain"]
const DcHeroes = ["Batman", "Superman"]
let newHeroes = MarvelHeroes.concat(DcHeroes)
// console.log(newHeroes)
Defination = `${MarvelHeroes.slice(0,2)} there are marvel heroes and ${DcHeroes} are Dc heroes.`
// console.log(Defination)

MarvelHeroes.push("Spiderman")
// console.log(MarvelHeroes)

NepaliHeroes=["RajeshHamal, JayaKishan"]
Allheroes = [...MarvelHeroes,...DcHeroes,...NepaliHeroes]
// console.log(Allheroes)

console.log(Allheroes.pop(NepaliHeroes))  //pop deletes the element from array
// console.log(Allheroes)
Allheroes.unshift("loki") 
// Allheroes.shift("laxman")
//Allheroes.shift() // this is just to delete the added ones
console.log(Allheroes);
console.log(Allheroes.includes("Ironman")) // just to check wether the array has this element
console.log(Allheroes.indexOf("Ironman")) // to find the position of the element


console.log("A", MarvelHeroes)

const myname =[0,"laxman","giri","nepal"]
console.log("d",myname.slice(1,2)) //slice means last disit is not included
console.log("c",myname.splice(1,2)) //splice means last digit is included

////////////////
Problem= [0,1,2,[1,2,[3,4,"laxman"]]]
console.log(Problem)
newProblem= Problem.flat(4) //// flat means no mini arrays
console.log(newProblem)
oneproblem= Array.isArray("laxman")
console.log(oneproblem);
console.log(Array.from("nepal"))
console.log(Array.from({name:"laxman"}))

score=100
score2=200
console.log(Array.of(score,score2))




