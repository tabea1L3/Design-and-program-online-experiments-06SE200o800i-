// let ageGroup;
// const age = 25
// if(age<18){
//     ageGroup = "Child";
// } else {ageGroup = "Adult";
// }
// console.log("ageGroup", ageGroup);

let age = 18;
let ageGroup = age < 18 ? "Child" : "Adult";
console.log("ageGroup", ageGroup);

for(let i=0; i<5; i++){
    console.log("i", i);
}   
let globalVar = "I'm global!";
function scope() {
let localVar = "I'm local!";
console.log(localVar); // Accessible here
console.log(globalVar); // Accessible here
}
console.log(localVar); /* Uncaught ReferenceError: localVar is not defined */
console.log(globalVar); // Accessible here /* works fine */