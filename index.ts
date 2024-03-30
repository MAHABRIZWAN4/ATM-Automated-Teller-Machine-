#! /usr/bin/env node
import inquirer from "inquirer"
let my_balance = 500000;
let my_pin  = 21244;
let pin_check = await inquirer.prompt([{ name:"pin",type:"number",message:"Enter your pin number: "},]);
if( pin_check.pin === my_pin ){
let operation = await inquirer.prompt  ([{ name:"list", "type":"list",message:"Select of the one",
choices:["withdraw","check_balance","fastcash"]},]);
if (operation.list === "withdraw"){
let amount = await inquirer.prompt ([{ name:"amount", type:"number", message:"How much amount do you want to withdraw: "},]);
if(amount.amount <= my_balance )
{my_balance -= amount.amount
console.log(`Welcome Dear customer!Your remaining balance is: ${my_balance}`); }
else{console.log("Insufficient balance")} 
}
else if (operation.list ==="check_balance"){ console.log("Your current balance is: " + my_balance); } 
if (operation.list === "fastcash"){
let fastcash = await inquirer.prompt([{name:"amount",type:"list",message:"Select of the one amount", choices:["5000","10000","15000"]},]);
{my_balance -= fastcash.amount 
console.log(`Welcome Dear customer!Transaction is successfully completed and your remaining amount is ${my_balance}`); }
}
}
else{ console.log("invalid pin"); }
