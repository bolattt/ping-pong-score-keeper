const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");
const gamesTotalEl = document.querySelector("select");
const winnerDisplay = document.querySelector("#winnerDisplay");

let p1Score = 0;
let p2Score = 0;
let gamesTotal = parseInt(gamesTotalEl.value);

gamesTotalEl.addEventListener("change", (e) => {
  gamesTotal = parseInt(e.target.value);
  resetFunc();
});

p1Button.addEventListener("click", () => {
  p1Score++;
  p1Display.textContent = p1Score;
  if (p1Score === gamesTotal) {
    winnerDisplay.textContent = "P1 Won!";
    p1Button.disabled = true;
    p2Button.disabled = true;
    p1Display.style.color = "green";
    p2Display.style.color = "red";
  }
});

p2Button.addEventListener("click", () => {
  p2Score++;
  console.log(p2Score);
  p2Display.textContent = p2Score;
  if (p2Score === gamesTotal) {
    winnerDisplay.textContent = "P2 Won!";
    p1Button.disabled = true;
    p2Button.disabled = true;
    p2Display.style.color = "green";
    p1Display.style.color = "red";
  }
});

reset.addEventListener("click", resetFunc);

function resetFunc() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  winnerDisplay.innerHTML = "&nbsp";
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Display.style.color = "black";
  p2Display.style.color = "black";
}
