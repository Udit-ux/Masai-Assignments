// Step 1: Simulate data fetching with a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve("Fetched data successfully!");
            } else {
                reject("Network error: Unable to fetch data.");
            }
        }, 1000); // Simulates network delay of 1 second
    });
}

// Step 2: Create an async handler function
async function fetchDataHandler() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Step 3: Simulate the workflow
fetchDataHandler();
