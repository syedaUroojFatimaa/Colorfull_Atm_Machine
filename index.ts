#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000;
let myPin = 12345;

console.log(chalk.red("\n\tWelcome To Code With Urooj - ATM Machine\n"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:"),
    }
])

if(pinAnswer.pin === myPin){
    console.log(chalk.green("\n Pin is correcr, Login sucessfully!\n"));

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount" , "Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let WithdrawAns = await inquirer.prompt([
            {
                name: "WithdrawMethod",
                type: "list",
                message: "Select a Withdrawal ,Method",
                choices: ["Fast Cash" , "Enter Amount"]
            }
        ])

        if(WithdrawAns.WithdrawMethod ==="Fast Cash"){
            let FastCashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type:"list",
                    message:"Select Amount:",
                    choices:[1000, 2000, 5000, 10000, 20000]
                }
            ])

            if(FastCashAns.fastcash > myBalance){
                console.log(chalk.blue("Insufficient Balance"));
            }

            else{
                myBalance -= FastCashAns.fastcash
                console.log(`${FastCashAns.fastcash} Withdraw Successfully!`);
                console.log(`Your Remaing Balance is: ${myBalance}`);
            }
        }

        else if(WithdrawAns.WithdrawMethod === "Enter Amount"){
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to Withdraw:"
                }
            ])
    
            if(amountAns.amount > myBalance){
                console.log("Insufficient Balance");
            }
    
            else{
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Succesfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        }
             }
    
    else if (operationAns.operation === "Check Balance"){
        console.log(chalk.red(`Your Account Balance is: ${myBalance}`));
    }
}

else{
    console.log(chalk.red("Pin is Incorrect, Try Again!"));
}