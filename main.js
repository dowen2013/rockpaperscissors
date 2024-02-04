var getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log(`Sorry, the choice of ${userInput} isn't valid.`);
    }
}

var getComputerChoice = function() {
    var random = Math.floor(Math.random() * 3)
    if (random === 0) {
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else if (random === 2) {
        return 'scissors';
    }
}

var determineWinner = function(userChoice, computerChoice) {
    // console.log(`User: ${userChoice}  |  Computer: ${computerChoice}`)
    if (userChoice === 'bomb') {
        return 'You won! ;-)';
    }
    
    if (userChoice === computerChoice) {
        return 'The game is a tie.';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won.';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won.';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won.';
        } else {
            return 'You won!';
        }
    }
}

var playGame = function() {
    var userChoice = getUserChoice('bomb');
    var computerChoice = getComputerChoice();
    console.log(`User: ${userChoice}  |  Computer: ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
