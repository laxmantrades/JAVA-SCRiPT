// let name = "laxman"
// let address = "Tulsipur"

// console.log(`My name is ${name} and I live in" `); 

let myname = "LAXMAN";
// console.log(typeof myname);
// console.log(myname[3])
// console.log(myname.fontcolor("red"));
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase() + myname.toUpperCase())
// console.log(myname.trim());
// console.log(myname.replace())
// console.log(myname.substring(0,4))

let part1 = myname.slice(1, 5);

console.log(part1);

// let myname = "LAXMAN";

// Extracting a portion of the string
//let part1 = myname.slice(0, 3);   // Extracts "LAX"
// let part2 = myname.slice(3);      // Extracts "MAN"

// // Display the results
// console.log(part1); // Output: "LAX"
//  console.log(part2); // Output: "MAN"

const url = "https://hitesh.com/frontpage"
const uur1 = "https://hitesh.com/loginpage"
console.table([url.replace("frontpage", "loginpage"), uur1.replace("loginpage", "registerpage")])
console.table([url,uur1]);
console.log(url.includes("frontpage")) // included means checking wether it is ther or not
console.log(url.split("//"))







