const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name?", answer => {
  let name = answer;
  rl.question("What's your favourite food?", answer => {
    let food = answer;
    rl.question("What's your favourite music?", answer => {
      let music = answer;
      rl.question("What's your favourite sport?", answer => {
        let sport = answer;
        rl.question("What's your super power?", answer => {
          let power = answer;
          rl.question("What is your favourite candy?", answer => {
            let candy = answer;
            rl.question("What is your age?", answer => {
              let age = answer;
              console.log(
                `Hi there, my name is ${name}, and my favourite food is ${food}. My favourite music is ${music}, favourite sport is ${sport}, I'm ${age} years old, and my super power is ${power}. I also love to crush ${candy} on the regular!`
              );
              rl.close();
            });
          });
        });
      });
    });
  });
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
