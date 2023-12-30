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
}

// event listeners
rockButton.addEventListener('click', () => {
    playRound('rock', computerChoice());
    userText.textContent = 'Rock';
    computerText.textContent = computerChoice().charAt(0).toUpperCase() + computerChoice().slice(1);
});

paperButton.addEventListener('click', () => {
    playRound('paper', computerChoice());
    userText.textContent = 'Paper';
    computerText.textContent = computerChoice().charAt(0).toUpperCase() + computerChoice().slice(1);
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', computerChoice());
    userText.textContent = 'Scissors';
    computerText.textContent = computerChoice().charAt(0).toUpperCase() + computerChoice().slice(1);
});

resetButton.addEventListener('click', () => {
    result.textContent = '';
});


