function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

// Example usage:
timer(2000, (message) => {
  console.log(message); // Output after 2 seconds: "Timer of 2000 ms finished"
});
