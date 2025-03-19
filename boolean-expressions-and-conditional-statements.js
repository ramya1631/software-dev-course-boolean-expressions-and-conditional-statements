/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");
const hasFood = readline.question("Do you have food to eat?");
const hasMap = readline.question("Do you have Map?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
}  else if(choice === "village" && hasFood.toLowerCase() === "no" ) {
  console.log("Good Choice! you don't have food. Its better to go to village to find some food to eat and rest");
}
else if (choice === "village" && !hasMap && hasTorch) {
  console.log("You find your way to the village.");
} else if(hasMap) {
  const nextPlace = readline.question("Do you know where you want to go next other than village & mountain?");
  if(nextPlace.toLowerCase()==="yes"){
    console.log("Continue your journey as per your wish!");
  } else {
    console.log("Decide your next place before making any move!");
  }
}
else {
  console.log("You get lost and wander aimlessly.");
}