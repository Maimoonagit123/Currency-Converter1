#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base amount
    PKR: 278,
    INR: 83.33,
    AFN: 71.00,
    TRY: 32.56,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "AFN", "TRY"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "AFN", "TRY"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
