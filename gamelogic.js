const MOVES = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return MOVES[Math.floor(Math.random()*MOVES.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        console.log("Tie. " + playerSelection + " is equal to " + computerSelection);
        return "Tie"//"Tie. " + playerSelection + " is equal to " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        console.log("You win. " + playerSelection + " beats " + computerSelection);
        return "Win"//"You win. " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        console.log("You win. " + playerSelection + " beats " + computerSelection);
        return "Win"//"You win. " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        console.log("You win. " + playerSelection + " beats " + computerSelection);
        return "Win"//"You win. " + playerSelection + " beats " + computerSelection;
    }
    else{
        console.log("You lose. " + playerSelection + " loses to" + computerSelection);
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

        console.log("Player wins: " + wins + " losses: " + losses);
    }

    console.log("Player wins: " + wins + " losses: " + losses);

    //console.log(wins, losses);
}
 
game();
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));