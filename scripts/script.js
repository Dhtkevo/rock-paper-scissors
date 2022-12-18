let userScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const outputBar = document.getElementById('output');
const p = document.createElement('p');
p.innerText = "";
outputBar.appendChild(p);

const scoreBoard = document.createElement('h1');
outputBar.appendChild(scoreBoard);

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
    
    computerSelection = getComputerChoice();
    
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore++;
        p.innerText =  `User wins! ${playerSelection} beats ${computerSelection}`;
      console.log(userScore + " " + computerScore);
        return 'You Win!';
    } else if (playerSelection === computerSelection) {
        p.innerText ='It\'s a tie!';
        return 'Tie!';
    } else {
        computerScore++;
        console.log(userScore + " " + computerScore);
        p.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return 'You Lose!';
    }

    
}

function resetScores(){
    userScore = 0;
    computerScore = 0;
}

const checkWinner = (playerSelection, computerSelection) => {
    if (userScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You Win The Game! ${userScore} to ${computerScore}`;
        outputBar.appendChild(h2);
        resetScores();
    } else if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You Lose The Game! ${computerScore} to ${userScore}`;
        outputBar.appendChild(h2);
        resetScores();
    }
}


rock.addEventListener('click', function() {
    playRound(rock.innerText.toLowerCase(), getComputerChoice());
    checkWinner();
    scoreBoard.innerText = `User: ${userScore} Computer: ${computerScore}`;
});

paper.addEventListener('click', function () {
    playRound(paper.innerText.toLowerCase(), getComputerChoice());
    checkWinner();
    scoreBoard.innerText = `User: ${userScore} Computer: ${computerScore}`;
});

scissors.addEventListener('click', function () {
    playRound(scissors.innerText.toLowerCase(), getComputerChoice());
    checkWinner();
    scoreBoard.innerText = `User: ${userScore} Computer: ${computerScore}`;
});
