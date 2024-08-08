"use strict";

const humanCurrentScore = document.querySelector("#humanCurrentScore");
const computerCurrentScore = document.querySelector("#computerCurrentScore");
const gameMessage = document.querySelector(".gameMessage");
let visibilityCounter =0; //for gameMessage

// console.log("check");
const log = console.log;
let humanScore = 0;
let computerScore = 0;

//game start
console.log("Welcome to the Rock-Paper-Scissor game");
console.log("There will be total of 5 tries, u will be playing against cpu");



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

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        gameMessage.textContent = "you both tied";
    } else if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            computerScore++;
            gameMessage.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
        } else { // thats is scissor
            humanScore++;
            gameMessage.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        }
    } else if (humanChoice === "paper") {
        if(computerChoice == "scissor") {
            computerScore++;
            gameMessage.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
        } else { //that is rock
            humanScore++;
            gameMessage.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        }
    } else if (humanChoice === "scissor") {
        if(computerChoice === "rock") {
            computerScore++;
            gameMessage.textContent = `You loose! ${computerChoice} beats ${humanChoice}`;
        } else { //that is paper
            humanScore++;
            gameMessage.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        }
    }
    return;
}

function whosTheWinner() {
    if(humanScore === computerScore) {
        return "both of u tied, wait 5 seconds for reset";
    } else if(humanScore > computerScore) {
        return "wohoo! u r the winner, wait 5 seconds for reset";
    } else {
        return "sad, u lost, wait 5 seconds for reset";
    }
}

function reset() {
    humanScore = 0;
    humanCurrentScore.textContent = humanScore;

    computerScore = 0;
    computerCurrentScore.textContent = computerScore;

    enableAllButtons();
}

function disableAllButtons() {
    document.querySelectorAll('button').forEach((button)=> {
        button.disabled = true;
        button.classList.add('invisible');
    });
}

function enableAllButtons() {
    document.querySelectorAll('button').forEach((button)=> {
        button.disabled = false;
        button.classList.remove('invisible');
    });
}

const controlsContainer = document.querySelector('.controls');

//using method delegation
controlsContainer.addEventListener('click', function(e) {
    const humanChoice = e.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    
    if(visibilityCounter < 3) 
        visibilityCounter++;
    if(visibilityCounter === 1) 
        gameMessage.classList.remove("invisible");

    humanCurrentScore.textContent = humanScore;
    computerCurrentScore.textContent = computerScore;

    if(humanScore == 5 || computerScore == 5) {
        disableAllButtons();
        const winner = whosTheWinner();
        gameMessage.textContent = winner;
        setTimeout(reset, 5000);
    }
});