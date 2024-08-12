// const newUser = {
//     user: 1,
//     useremail: "laxmangiri@gmail.com",
//     username : {
//         Firstname: {
//             lastname:"giri"
//         }
//     }
    
// }

// console.log(newUser.username.Firstname.lastname)

// const userDate= {
//     Name: "laxman",
//     DOB : {
//         Year: 2058,
//         Day: 07,
//         Month: "Sep"
//     }
// }
// console.log(userDate.DOB.Month)

const Person1= {Name:"laxmam", Ag:"25", isloggedi: "true"}
const Person2= {Na:"Ram", Age: "1000",isloggedin:"false"} ////the key shouæd be different
const information1= {...Person1,
     ...Person2,
    }
console.log(information1);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
 console.log(Object.entries(Person1));

const Mix= { 
    name:"laxman",
    Firstname:["laxman","Giri"]
}
console.log(Mix.Firstname[0]);



//destcturing
const course={
    Name:"Javascript",
    Price:245
}
const {Price}=course;
console.log(Price);
console.log(course.Price)




