// Task A
function startTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task A completed");
        }, 1000); // 1 second delay
    });
}

// Task B
function processTask(taskAOutput) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task B processed: ${taskAOutput}`);
        }, 1500); // 1.5 seconds delay
    });
}

// Task C
function finalizeTask(taskBOutput) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Final result: ${taskBOutput}`);
        }, 500); // 0.5 seconds delay
    });
}

// Execute tasks with promise chaining
startTask()
    .then((resultA) => {
        console.log(resultA);
        return processTask(resultA);
    })
    .then((resultB) => {
        console.log(resultB);
        return finalizeTask(resultB);
    })
    .then((finalResult) => {
        console.log(finalResult);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
