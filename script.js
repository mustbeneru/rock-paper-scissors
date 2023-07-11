const choices = ['Rock', 'Paper', 'Scissors']

let playerScore = 0;
let computerScore = 0;
let playerSelection, computerSelection;

let getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)]

function playRound() {
    const difference = (choices.length + choices.indexOf(playerSelection) - choices.indexOf(computerSelection)) % choices.length; 
    console.log(playerSelection, computerSelection)
    switch(difference) {
        case 0:
            result.textContent = `It's a tie! You both chose ${computerSelection}`;
            break;
        case 2:
            computerScore++;
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerScoreCont.textContent = `Computer : ${computerScore}`;
            break;
        default:
            playerScore++;
            result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerScoreCont.textContent = `Player : ${playerScore}`;
            break;
    }
}

function game() {
    
    playRound();
    
    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach((button) => {
            button.setAttribute('disabled', '')
        });
    
        if (playerScore > computerScore) {
            result.textContent = 'Congrats! You Win!'
        } else {
            result.textContent = 'Sorry! You Lose!'
        }
        resetGame();
    }
}

function resetGame() { 
    reset.style.visibility = 'visible';
    reset.addEventListener('click', () => {
        location.reload();
    });
}

const output = document.querySelector('.output');
const result = document.querySelector('.result'); 
const playerScoreCont = document.querySelector('.player-score');
const computerScoreCont = document.querySelector('.computer-score');
const buttons = document.querySelectorAll('.choice > button');
const message = document.querySelector('.message');
const reset = document.querySelector('.reset');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.alt;
        computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection, e);
        game();
    });
});

