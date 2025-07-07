// Simulate data fetching with 50% chance of failure
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Fetched data successfully!");
      } else {
        reject("Network error or server failure.");
      }
    }, 1000); // Simulate 1-second network delay
  });
}

// Async handler function using try...catch
async function fetchDataHandler() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to simulate workflow
fetchDataHandler();
