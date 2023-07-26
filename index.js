// Créer la logique de compte à rebours

// Créer un événement à la validation du form pour lancer le compte à rebours

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let zero = "";
  let totalSeconds = choice.value * 60;
  let seconds = totalSeconds % 60;

  let minutes = Math.floor(totalSeconds / 60);
  setInterval(() => {
    if (minutes === 0 && seconds === 0) return;
    if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 60;
      zero = "";
    }
    if (seconds > 0) {
      seconds--;
    }
    if (seconds < 10) {
      zero = "0";
    }
    countdownDisplay.innerHTML = `${minutes}:${zero}${seconds}`;
  }, 1000);
});
