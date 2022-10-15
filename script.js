// Registra a escolha do usuário e chama a função que inicia o jogo
const choices = ['Rock', 'Paper', 'Scissors'];
const result = document.querySelector('#result');
const scoreboard = document.querySelector('#scoreboard');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>
  button.addEventListener('click', function (e) {
    playGame(choices[button.id]);
    showScore();
  })
);

// Faz a jogada do PC e registra os pontos
let pScore = 0;
let cScore = 0;
function playGame(pChoice) {
  const rChoice = Math.floor(Math.random() * 3);
  const cChoice = choices[rChoice];
  if (pChoice === cChoice) {
    result.innerHTML = "It's a draw. Let's play again!";
  } else if (
    (pChoice == 'Rock' && cChoice == 'Scissors') ||
    (pChoice == 'Paper' && cChoice == 'Rock') ||
    (pChoice == 'Scissors' && cChoice == 'Paper')
  ) {
    result.innerHTML = `Computer chose ${cChoice}.<br /> ${pChoice} beats ${cChoice}. You score! `;
    pScore++;
  } else {
    result.innerHTML = `Computer chose ${cChoice}.<br /> ${cChoice} beats ${pChoice}. Computer score!`;
    cScore++;
  }
}

// Mostra o placar e encerra o jogo quando alguém alcançar 5 vitórias
function showScore() {
  for (let i = 0; i < 5; i++) {
    scoreboard.innerHTML = `Score: <br /> ${pScore} x ${cScore}`;
  }
  if (pScore === 5) {
    scoreboard.innerHTML += '<br /> <p>Congratulations, you win!</p>';
  } else if (cScore === 5) {
    scoreboard.innerHTML += '<br /> <p>Game over! Computer wins.</p>';
  }
  if (pScore === 5 || cScore === 5) {
    scoreboard.innerHTML +=
      '<button type="button" id="reset" onclick="resetScore()">Play again</button>';
  }
}

function resetScore() {
  result.innerHTML = '';
  scoreboard.innerHTML = '';
  pScore = 0;
  cScore = 0;
}
