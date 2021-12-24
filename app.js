const reset = document.querySelector("#reset");
const gamesTotalEl = document.querySelector("select");
const winnerDisplay = document.querySelector("#winnerDisplay");

let gamesTotal = parseInt(gamesTotalEl.value);

gamesTotalEl.addEventListener("change", (e) => {
  gamesTotal = parseInt(e.target.value);
  resetFunc();
});

reset.addEventListener("click", resetFunc);

const p1 = {
  score: 0,
  display: document.querySelector("#p1Display"),
  button: document.querySelector("#p1Button"),
};

const p2 = {
  score: 0,
  display: document.querySelector("#p2Display"),
  button: document.querySelector("#p2Button"),
};

function resetFunc() {
  for (let player of [p1, p2]) {
    player.score = 0;
    player.display.textContent = player.score;
    player.button.disabled = false;
    player.display.style.color = "black";
  }
  winnerDisplay.innerHTML = "&nbsp";
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2, "Player One");
});

p2.button.addEventListener("click", function () {
  updateScore(p2, p1, "Player Two");
});

function updateScore(player, opponent, playerNumber) {
  player.score++;
  player.display.textContent = player.score;
  if (player.score == gamesTotal) {
    winnerDisplay.textContent = `${playerNumber} wins`;
    player.button.disabled = true;
    opponent.button.disabled = true;
    player.display.style.color = "green";
    opponent.display.style.color = "red";
  }
}
