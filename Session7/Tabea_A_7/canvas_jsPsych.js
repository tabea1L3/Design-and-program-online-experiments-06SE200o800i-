/*  we will do canvas drawing using jsPsych
 instruction (right arrow key) -> fixation (1s) ->  bunny (until response by pressing spacebar) -> feedback (thumbs up for 1s) -> draw a smily face */

// 7.2.1.1  finish step 0,1 in html
// 7.2.1.2  finish step 2,4 in jsPsych
// 7.2.3:  given a drawBunnyfn, make a trial to draw the bunny after fixation
// 7.2.4: draw a smily face (A circle as the face, two smaller circles as the eyes, one semi circle as the mouth); make it run after end
// plus 1: draw an easter egg (with some decoration) next to the bunny 

//step 2:  initiate jsPsych
const jsPsych = initJsPsych();

// step 3: building timeline 
const timeline = [];


// instruction 
const instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<h2 id='instruction'> Please press the <strong>space bar</strong> as soon as the stimulus appears. </h2>
               <p> press right arrow key to start! </p>
    `,
    choices: ['ArrowRight']
}
timeline.push(instruction);


// Fixation trial
const fixation = {
    type: jsPsychHtmlKeyboardResponse, //set type of trial
    stimulus: "<h1>+</h1>",
    choices: "NO_KEYS",
    trial_duration: 1000
        }
//add it to timeline
    timeline.push(fixation);


// Canvas trial
//first, define function
function drawFN(canvas){
            const ctx = canvas.getContext("2d");
            console.dir(ctx);
            ctx.fillStyle="pink";
            ctx.fillRect(500, 500, 100, 50); //place, place, width, height
            ctx.strokeStyle = "red";
            ctx.strokeRect(500, 500, 100, 50);
            ctx.clearRect(550, 550, 10, 10);

        }
//then define trial
        const canvasTrial = {
            type: jsPsychCanvasKeyboardResponse,
            canvas_size: [window.innerWidth, window.innerHeight],
            stimulus: drawFN,  //stimulus was defined under function drawFN
            choices: "9",
            trial_duration: 5000 // if only choices should be active, leave this empty
        }
//add it to timeline
        timeline.push(canvasTrial);


// 7.2.2 make the trial_duration randomly selected from 1s, 2s or 3s
// fixation 
const randDuration = Math.floor(Math.random() * 3) +1
// *3 would say 0 to 2, excluding 3. But with +1 it shifts to 1 to 3
// or alternatively: const durations = [1000, 2000, 3000] these are ms
// and then inst. of randDuration: durations[Math.floor(Math.random() * durations.length)]

const fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "+",
    choices: "NO_KEYS",
    trial_duration: randDuration
}
timeline.push(fixation);



const drawBunnyfn = function (canvas){
    
    const context = canvas.getContext("2d");
   
    // The following is the block of drawing a bunny
   
       let x = canvas.width/2;
       let y = canvas.height/2;
   
       context.clearRect(0, 0, canvas.width, canvas.height);
   
       // COLORS
       const fur = "#F2F2F2";
       const stroke = "#B0B0B0";
       const blush = "#F8C8DC";
       const nose = "#E89CA9";
     
       // EARS (Left & Right)
       context.beginPath();
       context.ellipse(x - 20, y - 50, 10, 30, 0, 0, 2 * Math.PI);
       context.fillStyle = fur;
       context.fill();
       context.strokeStyle = stroke;
       context.stroke();
     
       context.beginPath();
       context.ellipse(x + 20, y - 50, 10, 30, 0, 0, 2 * Math.PI);
       context.fill();
       context.stroke();
     
       // HEAD
       context.beginPath();
       context.arc(x, y, 40, 0, 2 * Math.PI);
       context.fillStyle = fur;
       context.fill();
       context.stroke();
     
       // EYES
       context.beginPath();
       context.arc(x - 20, y - 10, 5, 0, 2 * Math.PI);
       context.arc(x + 20, y - 10, 5, 0, 2 * Math.PI);
       context.fillStyle = "#444";
       context.fill();
     
       // BLUSH (under eyes)
       context.beginPath();
       context.arc(x - 30, y + 10, 7, 0, 2 * Math.PI);
       context.arc(x + 30, y + 10, 7, 0, 2 * Math.PI);
       context.fillStyle = blush;
       context.fill();
     
       // NOSE
       context.beginPath();
       context.moveTo(x - 5, y + 10);
       context.lineTo(x + 5, y + 10);
       context.lineTo(x, y + 18);
       context.closePath();
       context.fillStyle = nose;
       context.fill();

}

const drawBunnyTrial = {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600,600],
    stimulus: drawBunnyfn,
    choices: [' '], //spacebar
    trial_duration: 5000
}
timeline.push(drawBunnyTrial);



const end = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<h2>👍<h2>",
    choices: "NO_KEYS",
    trial_duration: 1000
}
timeline.push(end)

// step 4: run the timline

jsPsych.run(timeline);


