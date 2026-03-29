let ageGroup;
let age = 10; 
// age = 25;
if(age < 18){
    ageGroup = "Child";
}else{
    ageGroup = "Adults";
}
console.log("the ageGroup in if-else: " ,ageGroup );

age = 18
ageGroup = age < 18? "child":"adult";
console.log("the ageGroup in operator: " ,ageGroup );


const trial = { id: 1, responseTime: 350, correct: true };
console.log(trial.id);
console.log(trial["id"]);
for (const key in trial){
    console.log(`${key}: ${trial[key]}`);
}


