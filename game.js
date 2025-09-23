let humanScore=0;
let computerScore=0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;

    switch(randomChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }

    return "Invalid";
}

function getHumanChoice() {
    let choice = prompt("Choose between Rock, Paper and Scissors!", "Your choice");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (String(humanChoice).toLowerCase() === String(computerChoice).toLowerCase()) {
        alert("Computer's choice: " + computerChoice);
        alert("No winner!");
    } else if (String(humanChoice).toLowerCase() === "rock" && String(computerChoice).toLowerCase() === "scissors") {
        alert("Computer's choice: " + computerChoice);
        alert("You win! Rock beats Scissors");
        humanScore++;
    } else if (String(humanChoice).toLowerCase() === "rock" && String(computerChoice).toLowerCase() === "paper") {
        alert("Computer's choice: " + computerChoice);
        alert("You lose! Paper beats Rock");
        computerScore++;
    } else if (String(humanChoice).toLowerCase() === "paper" && String(computerChoice).toLowerCase() === "rock") {
        alert("Computer's choice: " + computerChoice);
        alert("You win! Paper beats Rock");
        humanScore++;
    } else if (String(humanChoice).toLowerCase() === "paper" && String(computerChoice).toLowerCase() === "scissors") {
        alert("Computer's choice: " + computerChoice);
        alert("You lose! Scissors beats Paper");
        computerScore++;
    } else if (String(humanChoice).toLowerCase() === "scissors" && String(computerChoice).toLowerCase() === "paper") {
        alert("Computer's choice: " + computerChoice);
        alert("You win! Scissors beats Paper");
        humanScore++;
    } else if (String(humanChoice).toLowerCase() === "scissors" && String(computerChoice).toLowerCase() === "rock") {
        alert("Computer's choice: " + computerChoice);
        alert("You lose! Rock beats Scissors");
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    alert("Final Score: Player " + humanScore + " Computer: " + computerScore);
}

playGame();