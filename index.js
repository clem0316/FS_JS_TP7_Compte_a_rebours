let zero = "";
// J'ai créé cette fonction pour ajouter un zéro devant les secondes inférieures à 10
let totalSeconds;
let seconds;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  totalSeconds = choice.value * 60;
  seconds = totalSeconds % 60;
  // Ci-dessus on récupère le reste des secondes qui ne constituent pas une minute pleine

  let minutes = Math.floor(totalSeconds / 60);
  setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      countdownDisplay.innerHTML = `C'est terminé !`;
      return;
    }
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
