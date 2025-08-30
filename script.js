function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = false;

    const results = document.querySelector("#results");
    const resetButton = document.querySelector("#reset");

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function displayMessage(message) {
        const p = document.createElement("p");
        p.textContent = message;
        results.appendChild(p);
        results.scrollTop = results.scrollHeight; // auto-scroll
    }

    function declareWinner() {
        if (humanScore === 5) {
            displayMessage(`🎉 You won the game! Final score: ${humanScore} - ${computerScore}`);
            gameOver = true;
            document.querySelector("#reset").style.display = "block";
        } else if (computerScore === 5) {
            displayMessage(`😢 You lost the game! Final score: ${humanScore} - ${computerScore}`);
            gameOver = true;
            document.querySelector("#reset").style.display = "block";
        }
    }

    function playRound(humanChoice) {
        if (gameOver) return;

        const computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            displayMessage(`🤝 It's a tie. You both chose ${humanChoice}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            displayMessage(`✅ You won this round! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            displayMessage(`❌ You lost this round. ${computerChoice} beats ${humanChoice}`);
        }

        declareWinner();
    }

    // Event listeners
    document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
    document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
    document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));

    resetButton.addEventListener(("click"), () => {
        humanScore = 0;
        computerScore = 0;
        gameOver = false;
        results.innerHTML = "";
        resetButton.style.display = "none";
        displayMessage("Game reset! Let's play again 🎮");
    })
}

playGame();
