#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuess",
        type: "number",
        message: "please guess the number between 1 to 10",
    },
]);
if (answer.userGuess === randomNumber) {
    console.log("congract your answer is correct");
}
else {
    console.log(" OHHH your answer is incorrect");
}
