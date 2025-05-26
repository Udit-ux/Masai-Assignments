function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
        if (typeof number === 'number' && number % 2 === 0) {
            resolve(`${number} is even`);
        } else {
            reject(`${number} is odd or invalid`);
        }
    });
}

// Test cases
checkEvenNumber(4)
    .then(console.log)   // Expected output: "4 is even"
    .catch(console.error);

checkEvenNumber(5)
    .then(console.log)   // Expected output: "5 is odd or invalid"
    .catch(console.error);
