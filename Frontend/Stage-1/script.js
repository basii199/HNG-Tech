document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("colorBox");
  const optionsContainer = document.getElementById("options");
  const gameStatus = document.getElementById("gameStatus");
  const scoreDisplay = document.getElementById("score");
  const newGameButton = document.getElementById("newGameButton");

  let score = 0;
  let targetColor = "";
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  function startNewGame() {
      score = 0 
      setTargetColor()
      gameStatus.textContent = "Start guessing!";
      generateColorOptions();
    }
    
  function setTargetColor () {
      targetColor = colors[Math.floor(Math.random() * colors.length)];
      colorBox.style.backgroundColor = targetColor;
  }

  function generateColorOptions() {
      optionsContainer.innerHTML = "";
      const shuffledColors = [...colors].sort(() => 0.5 - Math.random());
      
      shuffledColors.forEach(color => {
          const button = document.createElement("button");
          button.style.backgroundColor = color;
          button.dataset.testid = "colorOption";
          button.addEventListener("click", () => checkGuess(color));
          optionsContainer.appendChild(button);
      });
  }

  function checkGuess(selectedColor) {
      if (selectedColor === targetColor) {
          gameStatus.textContent = "Correct!";
          gameStatus.style.color = "green";
          score++;
          scoreDisplay.textContent = score;
      } else {
          gameStatus.textContent = "Wrong, try again!";
          gameStatus.style.color = "red";
      }
      generateColorOptions()
      setTargetColor()
  }

  newGameButton.addEventListener("click", startNewGame);
  startNewGame();
});
