/* Operators & conditional statement*/


/* 4.2.1:  Arithmetic & Assignment Operators:
First, work out from what you understand by replacing the ? with your expected outcome;
 */

/* example answer 
let example = 10;
console.log(example); // ? -> 10
//please replace the '?' with your prediction for the output*/

let a = 8;
let b = 2;
console.log(a+b); //10
console.log(8**2); // 64


/* 4.2.2: Equality and Strict Equality:
First, work out from what you understand by replacing the ? with your expected outcome; */
let x = 5;
let y = "5";

console.log(x == y);  // true
console.log(x === y); // false
console.log(x != y);  // false
console.log(x !== y); // true


/* 4.2.3: logical operators:
First, work out from what you understand by replacing the ? with your expected outcome; */
let isAdult = true;
let hasNormalVision = false;

console.log(isAdult && hasNormalVision); // false
console.log(isAdult || hasNormalVision); // true

let score = 50;

console.log(score > 40 && score < 60);  // true
console.log(score * 2 === 100);         // true
console.log(score % 2 === 0 || score < 0); // true


/* 4.2.4: what this newFunction will return:  
First, work out from what you understand by replacing the ? with your expected outcome; */
function newFunction(a,b) {
    const c = [a,b];
    a += b;
    return { a, b, c};
}
let myResults = newFunction(1, 3);
console.log("my results:", myResults);// {a: 4, b: 3, c: [1,3]}

/* 4.2.5: Verify your answers by running the JavaScript script in operator.html. Open the browser's developer console and check the logged output. Compare the results with the expected answers from the previous steps. */


/* 4.2.6: 
YOUR TASK is to use a conditional statement (e.g., if-else) or a conditional operator (e.g., ternary operator) to evaluate the participant's age.

If the age is between 18 and 35 (inclusive), log the following message to the console:
"The current participant's age is, X, within 18-35; Participant is eligible for the experiment", where X is the participant's age, e.g., 17.

If the age is outside this range, display an alert() with the message:
"Participant is not eligible for the experiment due to age!". 
*/

// conditional statement
let age = 17;
console.log("Try age =", age);
if(age>=18 && age<=35 ){
    console.log(`The current participant's age is, ${age}, within 18-35; Participant is eligible for the experiment`)

}else{
    alert("Participant is not eligible for the experiment due to age!")
}

// conditional operator
age = 25;
console.log("Try age =", age);
(age>=18 && age<=35)?console.log(`The current participant's age is, ${age}, within 18-35; Participant is eligible for the experiment`):alert("Participant is not eligible for the experiment due to age!")



/* # plus 1:  In JavaScript, certain operations (like arithmetic operations) can implicitly convert values from one type to another.*/
let value = "5";
let result = value * 2;
console.log(result);        // 10
console.log(typeof result); // number
// When a string is used in an arithmetic operation, JavaScript attempts to convert it into a number.

/* # Plus 2: Arithmetic Operation, Type Coercion and Strict Equality /* # Plus 2: Arithmetic Operation, Type Coercion and Strict Equality 
First, work out from what you understand by replacing the ? with your expected outcome;
Then, uncomment three console.log()lines to check your answers.
Are anything surprising to you?
*/
let points = 10;
let bonus = "5";

let totalPoints = points + bonus; 
let isEqual = totalPoints == 105;  
let isStrictEqual = totalPoints === 105; 


console.log(totalPoints);   // "105"
console.log(isEqual);       // true
console.log(isStrictEqual); // false


/* Plus 3: 
You are conducting a psychology experiment that requires participants to meet specific eligibility criteria. The rules are as follows:

1) Participants must be between 18 and 35 years old (age).

2) Participants must not have participated in a similar experiment before (hasParticipatedBefore).

3) Participants must have normal or corrected-to-normal vision (hasNormalVision).

4) Participants must not have any known cognitive impairments (hasCognitiveImpairment).

YOUR TASK is to:
    1. write a function that determines whether a participant is eligible for the experiment based on the criteria above;
    2. Use console.log to output one of the following messages based on the result: "Participant is eligible for the experiment." or "Participant is not eligible for the experiment!";
    3. Test your program with different combinations of the variables to ensure it works correctly. For example:
    let ageInput = 25; // or 17                                         
    let hasParticipatedBefore = false; // or True
    let hasNormalVisionOrNot = true;
    let hasCognitiveImpairment = false;
*/

function checkEligibility(ageInput, hasParticipatedBefore, hasNormalVisionOrNot,hasCognitiveImpairment){
    if(ageInput>=18 && ageInput<=25 && hasParticipatedBefore===false && hasNormalVisionOrNot===true && hasCognitiveImpairment===false){
        console.log("Participant is eligible for the experiment.")
    }else{
        console.log("Participant is not eligible for the experiment!")

    }
}
    let ageInput = 25; // or 17                                         
    let hasParticipatedBefore = false; // or True
    let hasNormalVisionOrNot = true;
    let hasCognitiveImpairment = false;
     console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)

   checkEligibility(ageInput, hasParticipatedBefore, hasNormalVisionOrNot,hasCognitiveImpairment)

    ageInput = 17;                                         
    hasParticipatedBefore = false; // or True
    hasNormalVisionOrNot = true;
    hasCognitiveImpairment = false;
     console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)

   checkEligibility(ageInput, hasParticipatedBefore, hasNormalVisionOrNot,hasCognitiveImpairment)

    ageInput = 25;                                         
    hasParticipatedBefore = true; 
    hasNormalVisionOrNot = true;
    hasCognitiveImpairment = false;
     console.log("age:", ageInput, "participated before?", hasParticipatedBefore, "normal vision:",hasNormalVisionOrNot, "cognitive impairment:",hasCognitiveImpairment)

   checkEligibility(ageInput, hasParticipatedBefore, hasNormalVisionOrNot,hasCognitiveImpairment)









  
