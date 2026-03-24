/*
 Scenario: Suppose you ran a short memory quiz and stored results in an array called 'trials' which
 each element as an object to restore the correctness
 */

const trials = [
  { correct: true },
  { correct: false },
  { correct: true },
  { correct: true },
  { correct: false }
];
        
 /* exercise 6.2.1 */
 
// You goal is to calculate the overall accuracy (0-1).

// An example of using filter()

//const correctTrials = trials.filter(trial => trial.correct);
//const correctCount = correctTrials.length;
//const acc = correctCount/trials.length
//console.log("Accuracy :", acc); // 0.6


// Given the example of using filter(), can you use forEach() instead to achieve the same goal?

/* Hint:
 1.use forEach to get correct count, divided by total length to get accuracy
 2.if you wish to test it: Add array_method_exercise.js to session6.html*/

let correctCount = 0;
// start add your code here
trials.forEach(trial => {if (trial.correct) {correctCount++; }});
const acc = correctCount / trials.length;
console.log("Accuracy:", acc); // 0.6

// your code end
console.log("Correct answers:", correctCount);
const acc =  correctCount/trials.length;
console.log("Accuracy:", acc);
 

/* plus 1: could you think of doing exercise 1 in chaining */
const truetrials = trials
.filter((trials) => trials = true // only keep condition = true
.map((trials) => trials = true) // 
console.log("truetrials", truetrials);


 
 
 
 
 
