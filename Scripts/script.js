"use strict";

// console.log("check");
const log = console.log;

// gameStart();

function gameStart() {
    console.log("Welcome to the Rock-Paper-Scissor game");
    console.log("There will be total of 5 tries, u will be playing against cpu");
    let tries = 5;
    let humanScore = 0;
    let computerScore = 0;

    while(tries--) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        
        playRound(humanChoice, computerChoice);
    }

    if(humanScore === computerScore) {
        log("both of u tied")
    } else if(humanScore > computerScore) {
        alert("wohoo! u r the winner");
    } else {
        alert ("sad, u lost");
    }
    
}

function getComputerChoice () {
    const computerChoiceNum = Math.floor(Math.random()*3) + 1;
    let returnChoice = "";
    if(computerChoiceNum === 1) {
        returnChoice += "rock";
    } else if (computerChoiceNum === 2) {
        returnChoice +="paper";
    } else {
        returnChoice+= "scissor";
    }
    return returnChoice;
}

function getHumanChoice() {
    const humanChoice = (prompt("Enter Your Choice: between rrock, paper and scissor")).toLowerCase();
    if(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissor") {
        alert("Invalid Choice, try again");
        return getHumanChoice();
    }
    else 
        return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        log("you both tied");
    } else if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            computerScore++;
            log(`You loose! ${computerChoice} beats ${humanChoice}`);
        } else { // thats is scissor
            humanScore++;
            log(`You Win! ${humanChoice} beats ${computerChoice}`);
        }
    } else if (humanChoice === "paper") {
        if(computerChoice == "scissor") {
            computerScore++;
            log(`You loose! ${computerChoice} beats ${humanChoice}`);
        } else { //that is rock
            humanScore++;
            log(`You Win! ${humanChoice} beats ${computerChoice}`);
        }
    } else if (humanChoice === "scissor") {
        if(computerChoice === "rock") {
            computerScore++;
            log(`You loose! ${computerChoice} beats ${humanChoice}`);
        } else { //that is paper
            humanScore++;
            log(`You Win! ${humanChoice} beats ${computerChoice}`);
        }
    }
    return;
}