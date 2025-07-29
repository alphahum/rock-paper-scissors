let humanscore = 0;
let computerscore = 0;

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Choose rock, paper, or scissors:");
    return input;
}

function playRound( humanChoice, computerChoice ) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both choose ${humanChoice}.`);
    }
    else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log (`You win this round! ${humanChoice} beats ${computerChoice}.`);
                humanscore++;
            }
            else {
                console.log (`You lose this round! ${computerChoice} beats ${humanChoice}.`);
                computerscore++;
            }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

