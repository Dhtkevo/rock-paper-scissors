//get user input (case insensitive)
//get random computer choice of rock, paper or scissors
//FUNC play a round of rock, paper, scissors
//IF player chooses rock, paper, or scissors && computer chooses weaker choice,
//player wins, return user victory string / ELSE
//computer wins, return computer victory string
//FUNC game() play 5 rounds
//keep score of user wins
//keep score of comp wins
//alert/print who has higher score after 5 rounds

function getUserInput() {
    let userInput = prompt('Rock, Paper, or Scissors?');
    let response = userInput.toLowerCase();
    return response;

}