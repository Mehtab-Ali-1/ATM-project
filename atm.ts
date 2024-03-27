#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

let pinAns = await inquirer.prompt([{
    name : "pin",
    message: "Please enter your pin",
    type: "number"

}]
);

if (pinAns.pin === myPin){
    console.log(`Your pin is correct`);

let operator= await inquirer.prompt([{
    name: "operatorName",
    message: "Choose a transaction",
    type: "list",
    choices: ["withdraw", "fast cash", "check balance"]
}]);

if (operator.operatorName === "withdraw"){
    let withdrawOp = await inquirer.prompt([{
        name: "withdrawAmount",
        message: "Enter your amount",
        type: "number"
    }]);
    myBalance -= withdrawOp.withdrawAmount;
    console.log(`Your remaining balance is:` + myBalance );
}else if (operator.operatorName === "fast cash"){
    let fast = await inquirer.prompt([{
        name : "fastCash",
        message: "Please select amount",
        type: "list",
        choices: ["20000","10000", "5000","1000","500"]
    }]);
    if (fast.fastCash === "20000"){
        myBalance -= fast.fastCash;
    console.log(`Your remaining balance is:` + myBalance);
    }if (fast.fastCash === "10000"){
        myBalance -= fast.fastCash;
    console.log(`Your remaining balance is:` + myBalance);
    }if (fast.fastCash === "5000"){
        myBalance -= fast.fastCash;
    console.log(`Your remaining balance is:` + myBalance);
    }if (fast.fastCash === "1000"){
        myBalance -= fast.fastCash;
    console.log(`Your remaining balance is:` + myBalance);
    }if (fast.fastCash === "500"){
        myBalance -= fast.fastCash;
    console.log(`Your remaining balance is:` + myBalance);
    }if (fast.fastCash > myBalance){
        console.log(`You have insufficient balance.`);
    }
        
}else if (operator.operatorName ==="check balance"){
    console.log(`Your current balance is ${myBalance}`);
}
}else {
    console.log(`Please enter your correct pin.`);
}
