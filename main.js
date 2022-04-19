let countdown;

const timerDisplay = document.querySelector('.display-time-left')
const endTime = document.querySelector('.display-end-time')


const displayTimeLeft = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(seconds / 3600)
  let remainderSeconds = seconds % 60
  const display = `${hours}:${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
  document.title = display
  timerDisplay.textContent = display
}
const displayEndTime = (timestamp) => {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const minutes = end.getMinutes()
  endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : ''} ${minutes}`
  console.log(end)
  console.log(hour)
}
const timer = (seconds) => {
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return;
    }
    displayTimeLeft(secondsLeft)
  }, 1000);

}

timer(3000)

