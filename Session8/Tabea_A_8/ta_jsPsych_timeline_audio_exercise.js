/* initialize jsPsych */   //just select everything in html that's between <script></script>
    const jsPsych = initJsPsych();
    on_finish: () = >
    {jsPsych.data.get().localSave("csv","my_experiment")}

    jsPsych.data.addProperties({
      id: "001",
      session: "pre-test"
    })  //global: adds to every trial !

    /* create timeline */
    const timeline = [];

    /* initiate the microphone in the timeline */
    const microphoneInit = {
        type: jsPsychInitializeMicrophone,
        on_start: () => {
          console.log("Initializing microphone...");
        },
        on_finish: () => {
          console.log("Microphone initialized.");
        }
      };
    timeline.push(microphoneInit);

   /* add instruction the timeline */
    const instruction = {
      type: jsPsychHtmlButtonResponse,
      stimulus: `
        <h1>Verbal Fluency Test Instruction</h2>
        <p>Tell me as many words as you
        can think of that begin with a certain letter of the alphabet that I will tell you in a moment. <br><br> You
        can say any kind of word you want, except for proper nouns (like Bob or Boston), numbers <br><br>
        The recording will stop after one minute.  <br><br> Are you ready?.</p>
      `,
      on_finish: (data) =>
             {data.speed_label = data.rt < 500? 'fast' : 'slow'}    //arrow function 
      data:{phase; "Instruction"}
      choices: ['Yes,I am ready!']
    }
    timeline.push(instruction);

    /* exercise 8.1:  add recording for 1 min the timeline */
    const record = {type: jsPsychHtmlAudioResponse,
      stimulus: `
      <h2> Name maximum of words in 1 minute that begin with a "F".</h2>`,
      record_duration: 60000, //Milisekunden
      allow_playback: true,
      data:{
      phase: "fluency",
      condition: "F"}
    };
   
    timeline.push(record);

    //add end message and data summary after record
     const endMsg = {
      type: jsPsychHtmlButtonResponse,
      stimulus: () => {
        // Access and summarize data
        const allData = jsPsych.data.get();
        console.log("allData:", dallData);
        const nSlow = allData.filter({ speed_label: "slow" }).count();
        //filter out only the slow ones, and also count how many
        return nSlow > 0? "too slow!": "Thank you!";
        //if so and so many times too slow (as in larger than 0), will show  too slow,
        //otherwise (if smaller than 0) will show thank you.
        },
        choices: ["Finish now"], //Button to click to end experiment
        data: { phase: 'end' }
        };
        timeline.push(endMessage);  //add it to timeline
      }

    /* start the experiment */
    jsPsych.run(timeline);