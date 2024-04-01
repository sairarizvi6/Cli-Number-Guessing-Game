#! /usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";

console.log("\n\tHi i am a progammer - Cli--Number-Guessing-Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
       name: "userGuessedNumber",
       type: "number",
       message: "Enter your guess number(Number Limit from 1 to 5):",

    },
    ]);

    if (answer.userGuessedNumber === randomNumber){
        console.log("congratulation ! you guess a correct number. ");
}
else {
    console.log("sorry, you are a wrong number");
}