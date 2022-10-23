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
    let winner;
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            winner = 'Draw';
            return winner;
        }
        else if (computerSelection === 'paper') {
            winner = 'Computer';
            return winner;
        }
        else {
            winner = 'Player';
            return winner;
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            winner = 'Draw';
            return winner;
        }
        else if (computerSelection === 'rock') {
            winner = 'Computer';
            return winner;
        }
        else {
            winner = 'Player';
            return winner;
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            winner = 'Draw';
            return winner;
        }
        else if (computerSelection === 'scissors') {
            winner = 'Computer';
            return winner;
        }
        else {
            winner = 'Player';
            return winner;
        }
    }
    return message;
}

function updateWinner(roundWinner) {
    if (roundWinner === 'Player') {
        pointsPlayer++;
        containerPlayer.textContent = `Player: ${pointsPlayer}`;
        if (pointsPlayer < 5) matchResult.textContent = 'Player won this round!';
        else if (pointsPlayer === 5) matchResult.textContent = 'You won! Refresh the browser to replay.';
    }
    else if (roundWinner === 'Computer') {
        pointsComputer++;
        containerComputer.textContent = `Computer: ${pointsComputer}`;
        if (pointsComputer < 5) matchResult.textContent = 'Player won this round!';
        else if (pointsComputer === 5) matchResult.textContent = 'You lose! Refresh the browser to replay.';
    }
    else {
        matchResult.textContent = 'It\'s a draw';
    }
}

let pointsPlayer = 0;
let pointsComputer = 0;
let containerPlayer = document.getElementById('player');
let containerComputer = document.getElementById('computer');
let results = document.getElementById('results');
let roundWinner = 0;
let matchResult = document.getElementById('match-result');

const options = document.querySelectorAll('button');

options.forEach(button => {
    button.addEventListener('click', () => {
        roundWinner = playRound(button.value, getComputerChoice())
        updateWinner(roundWinner);
        if (pointsPlayer === 5 || pointsComputer === 5) {
            options.forEach(button => {
                button.disabled = true;
            })
        }
    })
});
