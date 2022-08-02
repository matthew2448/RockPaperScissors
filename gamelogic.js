const MOVES = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return MOVES[Math.floor(Math.random()*MOVES.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        console.log("Tie. " + playerSelection + " is equal to " + computerSelection);
        const newDiv = document.createElement("div");
        const result = document.createTextNode("Tie. " + playerSelection + " is equal to " + computerSelection);
        newDiv.append(result);
        document.body.appendChild(newDiv);
        return "Tie"//"Tie. " + playerSelection + " is equal to " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        console.log("You win. " + playerSelection + " beats " + computerSelection);
        const newDiv = document.createElement("div");
        const result = document.createTextNode("You win. " + playerSelection + " beats " + computerSelection);
        newDiv.append(result);
        document.body.appendChild(newDiv);
        return "Win"//"You win. " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        console.log("You win. " + playerSelection + " beats " + computerSelection);
        const newDiv = document.createElement("div");
        const result = document.createTextNode("You win. " + playerSelection + " beats " + computerSelection);
        newDiv.append(result);
        document.body.appendChild(newDiv);
        return "Win"//"You win. " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        console.log("You win. " + playerSelection + " beats " + computerSelection);
        const newDiv = document.createElement("div");
        const result = document.createTextNode("You win. " + playerSelection + " beats " + computerSelection);
        newDiv.append(result);
        document.body.appendChild(newDiv);
        return "Win"//"You win. " + playerSelection + " beats " + computerSelection;
    }
    else{
        console.log("You lose. " + playerSelection + " loses to" + computerSelection);
        const newDiv = document.createElement("div");
        const result = document.createTextNode("You lose. " + playerSelection + " loses to" + computerSelection);
        newDiv.append(result);
        document.body.appendChild(newDiv);
        return "Loss"//"You lose. " + playerSelection + " loses to" + computerSelection;
    }
}

function displayChoices(){
    let r = '';
    
        let rock = document.createElement("button");
        rock.innerHTML = "Rock";
        rock.name = "formRock";
        rock.addEventListener("click", function(){
            r = playRound("Rock", getComputerChoice());
        });
        document.body.appendChild(rock);

        let paper = document.createElement("button");
        paper.innerHTML = "Paper";
        paper.name = "formPaper";
        paper.addEventListener("click", function(){
            r = playRound("Paper", getComputerChoice())
        });
        document.body.appendChild(paper);

        let scissors = document.createElement("button");
        scissors.innerHTML = "Scissors";
        scissors.name = "formScissors";
        scissors.addEventListener("click", function(){
            r = playRound("Scissors", getComputerChoice())
        });
        document.body.appendChild(scissors);
    return r;
}


function game(){
    
    let wins = 0; let losses = 0;
    let r = displayChoices();
    while(wins < 5 || losses < 5) {
        //let playerSelection = prompt("Rock, Paper, or Scissors? ");
        //let r = playRound(playerSelection, getComputerChoice());
        if(r === "Win"){
            wins += 1;
        } else if(r === "Loss"){
            losses += 1;
        }else{
            wins += 1; losses += 1;
        }

        console.log("Player wins: " + wins + " losses: " + losses);
    }

    console.log("Player wins: " + wins + " losses: " + losses);

    //console.log(wins, losses);
}

/*
let rock = document.createElement("button");
rock.innerHTML = "Rock";
rock.name = "formRock";
rock.addEventListener("click", function(){
    playRound("Rock", getComputerChoice())
});
document.body.appendChild(rock);

let paper = document.createElement("button");
paper.innerHTML = "Paper";
paper.name = "formPaper";
paper.addEventListener("click", function(){
    playRound("Paper", getComputerChoice())
});
document.body.appendChild(paper);

let scissors = document.createElement("button");
scissors.innerHTML = "Scissors";
scissors.name = "formScissors";
scissors.addEventListener("click", function(){
    playRound("Scissors", getComputerChoice())
});
document.body.appendChild(scissors);
*/
 
game();
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));