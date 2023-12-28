const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.getElementById('reset');

const results = document.getElementById('results');

// computerChoice function
function computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[randomNumber];

    console.log(randomNumber);
}
