function logMessage(count) {
  console.log(`Countdown at ${count}`);
}

function countDown(num) {
  if (num < 0) return;       // Base case: stop when number is less than 0
  logMessage(num);           // Log the current countdown value
  countDown(num - 1);        // Recursive call with decremented number
}

// Test
countDown(3);
