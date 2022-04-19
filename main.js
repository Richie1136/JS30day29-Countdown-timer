let countdown;

const displayTimeLeft = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(seconds / 3600)
  console.log(seconds)
  console.log(minutes)
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

timer(3)

