const MOVES = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return MOVES[Math.floor(Math.random()*MOVES.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "Tie"//"Tie. " + playerSelection + " is equal to " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        return "Win"//"You win. " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return "Win"//"You win. " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        return "Win"//"You win. " + playerSelection + " beats " + computerSelection;
    }
    else{
        return "Loss"//"You lose. " + playerSelection + " loses to" + computerSelection;
    }
}

function game(){
    let wins = 0; let losses = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors? ");
        let r = playRound(playerSelection, getComputerChoice());
        if(r == "Win"){
            wins += 1;
        } else if(r == "Loss"){
            losses += 1;
        }else{
            wins += 1; losses += 1;
        }
    }

    //console.log(wins, losses);
}
 
game();
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));