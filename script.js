let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

function shakeInput() {
  input.classList.add("shake");
  setTimeout(() => {
    input.classList.remove("shake");
  }, 300);
}

button.addEventListener("click", () => {

  let guess = Math.round(Number(input.value));

  if (!guess) {
    message.textContent = "⚠️ Enter a valid number!";
    message.className = "error";
    return;
  }

  // Limits the number b/w 1-10 only
  if (guess < 1) guess = 1;
  if (guess > 10) guess = 10;

  input.value = guess;

  attempts++;

  message.className = "";

  if (guess === secretNumber) {
    message.textContent = "Correct Guess!!!🎉 ";
    message.classList.add("success");
  } 
  else if (guess > secretNumber) {
    message.textContent = "Too High!!!📈";
    message.classList.add("high");
    shakeInput();
  } 
  else {
    message.textContent = "Too Low!!!📉";
    message.classList.add("low");
    shakeInput();
  }

  attemptsText.textContent = "Attempts: " + attempts;
});