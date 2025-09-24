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
    let choice = document.querySelector("#playerChoice").textContent;
    if(choice == "nothing chosen, yet...") {
        return alert("Error. No option chosen.")
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (String(humanChoice).toLowerCase() === String(computerChoice).toLowerCase()) {
        document.querySelector("#finalWinner").textContent = "Draw. No Winner!";   
    } else if (String(humanChoice).toLowerCase() === "rock" && String(computerChoice).toLowerCase() === "scissors") {
        document.querySelector("#finalWinner").textContent = "You win!";
        humanScore++;
    } else if (String(humanChoice).toLowerCase() === "rock" && String(computerChoice).toLowerCase() === "paper") {
        document.querySelector("#finalWinner").textContent = "CPU wins!";
        computerScore++;
    } else if (String(humanChoice).toLowerCase() === "paper" && String(computerChoice).toLowerCase() === "rock") {
        document.querySelector("#finalWinner").textContent = "You win!";
        humanScore++;
    } else if (String(humanChoice).toLowerCase() === "paper" && String(computerChoice).toLowerCase() === "scissors") {
        document.querySelector("#finalWinner").textContent = "CPU wins!";
        computerScore++;
    } else if (String(humanChoice).toLowerCase() === "scissors" && String(computerChoice).toLowerCase() === "paper") {
        document.querySelector("#finalWinner").textContent = "You win!";
        humanScore++;
    } else if (String(humanChoice).toLowerCase() === "scissors" && String(computerChoice).toLowerCase() === "rock") {
        document.querySelector("#finalWinner").textContent = "CPU wins!";
        computerScore++;
    }
    updateScores();
}

function updateScores() {
    document.querySelector("#playerScore").textContent = String(humanScore);
    document.querySelector("#computerScore").textContent = String(computerScore);
}

const rockButton = document.querySelector("#btnRock");
const paperButton = document.querySelector("#btnPaper");
const scissorsButton = document.querySelector("#btnScissors");
const playButton = document.querySelector("#btnPlay");
const resetButton = document.querySelector("#btnReset");

const playerChoiceField = document.querySelector("#playerChoice");
const computerChoiceField = document.querySelector("#computerChoice");

rockButton.addEventListener("click", () => {
    playerChoiceField.textContent = "Rock";
    computerChoiceField.textContent = " ";
    document.querySelector("#finalWinner").textContent = " ";
})

paperButton.addEventListener("click", () => {
    playerChoiceField.textContent = "Paper";
    computerChoiceField.textContent = " ";
    document.querySelector("#finalWinner").textContent = " ";
})

scissorsButton.addEventListener("click", () => {
    playerChoiceField.textContent = "Scissors";
    computerChoiceField.textContent = " ";
    document.querySelector("#finalWinner").textContent = " ";
})

playButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    computerChoiceField.textContent = computerChoice;
    playRound(computerChoice, getHumanChoice());
})

resetButton.addEventListener("click", () => {
    humanScore=0;
    computerScore=0;
    computerChoiceField.textContent = " ";
    document.querySelector("#finalWinner").textContent = " ";
    playerChoiceField.textContent = "nothing chosen, yet..."
    updateScores();
})