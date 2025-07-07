// Task A
function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000);
  });
}

// Task B
function processTask(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task B processed: ${input}`);
    }, 1500);
  });
}

// Task C
function finalizeTask(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Final result: ${input}`);
    }, 500);
  });
}

// Chaining Promises
startTask()
  .then((resultA) => {
    console.log(resultA); // "Task A completed"
    return processTask(resultA);
  })
  .then((resultB) => {
    console.log(resultB); // "Task B processed: Task A completed"
    return finalizeTask(resultB);
  })
  .then((resultC) => {
    console.log(resultC); // "Final result: Task B processed: Task A completed"
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
