let countdown;

const timerDisplay = document.querySelector('.display-time-left')

const displayTimeLeft = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(seconds / 3600)
  let remainderSeconds = seconds % 60
  const display = `${hours}:${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
  timerDisplay.textContent = display
}
const timer = (seconds) => {
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return;
    }
    displayTimeLeft(secondsLeft)
  }, 1000);

}

timer(124)

