/*
 Scenario: You have recorded time for 10 trials, as recordedTimes. 
 However, recordedTimes includes not only the reaction time, but also a stimuli presentation time 200 ms.
 */

 const recordedTimes = [550, 490, 510, 890, 1450, 470, 940, 620, 930, 360]; // variable bereits definiert
        
 /* exercise 5.2.1 */
 
 // Using a for loop, to get the data only stores your reaction time
 // console.log each iterate index and each reactionTime value accordingly in the loop
 // add your code here

// Java always starts with 0, so here 0 equals to our value 550, not 0.
// If we put i = 1 it would instead start with 490.
// {} brackets show what is included in the thing that needs to be repeated.
// So here it would be repeat for each recorded time: -200ms and console log new value.

for (let i = 0; i < recordedTimes.length; i++) {
    reactionTimes[i] = recordedTimes[i] - 200;  /* subtract 200ms from each recorded reaction time */
    console.log("reachtionTimes:", reactionTimes[i]);
};

 //???????? do again


 /* # Plus 1: can you think of more than one way of doing it? */
 
 
 
 
 
 
 /* exercise 5.2.2 */
 
 // Using a while loop: when the total reaction time exceeds a certain threshold (e.g., 2000 milliseconds),
 // console.log the thisTrial. thisTrial will start from 1.
 
// add your code below

let totalTime = 0;
let thisTrial;
let j = 0

while (recordedTimes[i] < 2000) {console.log(thisTrial)

}


 console.log(`Cumulative reaction time exceeded 2000 ms at trial ${thisTrial}.`);