const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise was successful!");
    } else {
        reject("Promise failed!");
    }
});
