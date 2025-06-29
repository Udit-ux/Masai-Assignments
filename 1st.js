// Global Execution Context
let age = 25; // Global variable

function displayAge() {
  // Function Execution Context for displayAge
  console.log("Current Age:", age);
}

function changeAge() {
  // Function Execution Context for changeAge
  age = 30; // Modifying the global variable
  console.log("Age updated inside changeAge:", age);
}

// Function calls
displayAge();    // Output: Current Age: 25
changeAge();     // Output: Age updated inside changeAge: 30
displayAge();    // Output: Current Age: 30
