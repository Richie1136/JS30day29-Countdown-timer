const timer = (seconds) => {
  const now = Date.now()
  console.log(now)
  const then = now + seconds * 1000
  console.log(then)

  setInterval(() => {
    const secondsLeft = then - Date.now() / 1000
    console.log(secondsLeft)
  }, 1000);

}

timer(10)