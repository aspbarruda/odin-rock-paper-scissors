function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let move;
    if (choice === 0) {
        move = 'rock';
    }    
    else if (choice === 1) {
        move = 'paper';
    }
    else {
        move = 'scissors';
    }
    return move;
}

function getResult(playerSelection, computerSelection) {
    let message;
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            message = 'It\'s a Tie';
        }
        else if (computerSelection === 'paper') {
            message = 'You lose! Paper beats rock!';
        }
        else {
            message = 'You win! Rock beats scissors!';
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            message = 'It\'s a Tie';
        }
        else if (computerSelection === 'rock') {
            message = 'You lose! Rock beats scissors!';
        }
        else {
            message = 'You win! Scissors beats paper!';
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            message = 'It\'s a Tie';
        }
        else if (computerSelection === 'scissors') {
            message = 'You lose! Scissors beats paper!';
        }
        else {
            message = 'You win! Paper beats rock!';
        }
    }
    return message;
}

let keepGoing = true;
let playerSelection;

while (keepGoing) {
    playerSelection = prompt("Enter your move: ").toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        keepGoing = false;
    }
    else {
        alert("Must enter valid choice!");
    }
}

let computerSelection = getComputerChoice();
let message = getResult(playerSelection, computerSelection);
console.log(computerSelection);
console.log(message);