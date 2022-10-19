function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let move;
    if (choice === 0) {
        move = 'Rock';
    }    
    else if (choice === 1) {
        move = 'Paper';
    }
    else {
        move = 'Scissor';
    }
}


getComputerChoice();