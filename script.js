const choices = ["Rock", "Paper", "Scissors"];
const result = document.querySelector("#result");
const scoreboard = document.querySelector("#scoreboard");
const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) =>
    button.addEventListener("click", function(e) {
        // Check if the game has already been won
        if (playerScore >= 5 || computerScore >= 5) {
            return;
        }
        // If not, call the function to play the round and show score
        playRound(choices[button.id]);
        showScore();
    })
);

// Play the round accordingly to which button was pressed
function playRound(playerChoice) {
    // Generate a random choice for computer
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNum];
    if (playerChoice === computerChoice) {
        result.innerHTML = "It's a tie. Let's play again!";
    }
    else if (
        (playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Paper" && computerChoice == "Rock") ||
        (playerChoice == "Scissors" && computerChoice == "Paper")
    ) {
        result.innerHTML = `Computer chose ${computerChoice}.<br /> <span class="player-color">Player chose ${playerChoice}.</span><br /> ${playerChoice} beats ${computerChoice}. You score!`;
        playerScore++;
    }
    else {
        result.innerHTML = `Computer chose ${computerChoice}.<br /> <span class="player-color">Player chose ${playerChoice}.</span><br /> ${computerChoice} beats ${playerChoice}. Computer score!`;
        computerScore++;
    }
}

// Show scoreboard and finish the game when someone gets 5 points
function showScore() {
    for (let i = 0; i < 5; i++) {
        scoreboard.innerHTML = `Score: <br /> <span class="game-score"> ${playerScore} :  ${computerScore} </span> `;
    }
    if (playerScore === 5) {
        scoreboard.innerHTML += "<br /> <p>Congratulations! <span class='player-wins'>You win.</span></p>";
    }
    else if (computerScore === 5) {
        scoreboard.innerHTML += "<br /> <p>Game over! <span class='computer-wins'>Computer wins.</span></p>";
    }
    if (playerScore === 5 || computerScore === 5) {
        scoreboard.innerHTML += '<button type="button" id="reset" onclick="resetScore()">Play again</button>';
    }
}

function resetScore() {
    result.innerHTML = "";
    scoreboard.innerHTML = "";
    playerScore = 0;
    computerScore = 0;
}
