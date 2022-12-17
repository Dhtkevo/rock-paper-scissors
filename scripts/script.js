let user = 0;
let computer = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const compChoice = choices[Math.floor(Math.random() * 3)];
    return compChoice;
}

function getUserChoice() {
    let choice = prompt('Pick either Rock, Paper, or Scissors').toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        user++;
        console.log(`User wins! ${playerSelection} beats ${computerSelection}`);
        return 'You Win!';
    } else if (playerSelection === computerSelection) {
        console.log('It\'s a tie!');
        return 'Tie!';
    } else {
        computer++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return 'You Lose!';
    }
}

function resetScores(){
    user = 0;
    computer = 0;
}

function playGame() {
   
}