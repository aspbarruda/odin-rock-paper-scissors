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

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            result = 0;
            return result;
        }
        else if (computerSelection === 'paper') {
            result = -1;
            return result;
        }
        else {
            result = 1;
            return result;
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            result = 0;
            return result;
        }
        else if (computerSelection === 'rock') {
            result = -1;
            return result;
        }
        else {
            message = 'You win! Scissors beats paper!';
            result = 1;
            return result;
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            result = 0;
            return result;
        }
        else if (computerSelection === 'scissors') {
            result = -1;
            return result;
        }
        else {
            result = 1;
            return result;
        }
    }
    return message;
}

function getUserInput() {
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
    return playerSelection;
}

let result = 0;

for (let i = 0; i < 5; i++) {
    let playerSelection = getUserInput();
    let computerSelection = getComputerChoice();
    result += playRound(playerSelection, computerSelection);
}

if (result > 0) {
    console.log("You won!");
}
else if (result < 0) {
    console.log("You lost!");
}
else {
    console.log("It was a tie after all!");
}