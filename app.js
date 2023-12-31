const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.getElementById('reset');
const results = document.getElementById('results');

const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');

let computerText = document.getElementById('computer-choice');
let userText = document.getElementById('user-choice');

// computerChoice function
function computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[randomNumber];
}

// userChoice function
function userChoice(userInput) {
    if (userInput === 'rock') {
        userText.textContent = 'You chose rock.';
    } else if (userInput === 'paper') {
        userText.textContent = 'You chose paper.';
    } else if (userInput === 'scissors') {
        userText.textContent = 'You chose scissors.';
    }
}

// playRound function
function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.textContent = 'It\'s a tie!';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        result.textContent = 'You lose! Paper beats rock.';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        result.textContent = 'You win! Rock beats scissors.';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        result.textContent = 'You win! Paper beats rock.';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        result.textContent = 'You lose! Scissors beats paper.';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        result.textContent = 'You lose! Rock beats scissors.';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        result.textContent = 'You win! Scissors beats paper.';
    }

    console.log('User choice: ' + userChoice);
    console.log('Computer choice: ' + computerChoice);
}

// event listeners

rockButton.addEventListener('click', () => {
    userChoice('rock');
    playRound('rock', computerChoice());
});

paperButton.addEventListener('click', () => {
    userChoice('paper');
    playRound('paper', computerChoice());
});

scissorsButton.addEventListener('click', () => {
    userChoice('scissors');
    playRound('scissors', computerChoice());
});



