function manageStudents() {
  let students = ["Alice", "Bob", "Charlie"];

  // Add "David" at index 1
  students.splice(1, 0, "David");

  // Check if "Eve" is in the list
  console.log("Includes 'Eve'? ", students.includes("Eve")); // false

  // Check if "Bob" is in the list
  console.log("Includes 'Bob'? ", students.includes("Bob")); // true

  // Convert the array to a string with names separated by commas
  console.log("Students List: ", students.join(",")); // Expected: "Alice,David,Bob,Charlie"
}

// Test different additions and checks
function testManageStudents() {
  manageStudents();

  // Additional test: Add at different index
  let moreStudents = ["Anna", "Brian"];
  moreStudents.splice(1, 0, "Clara");
  console.log("Test Insert at index 1: ", moreStudents.join(",")); // Anna,Clara,Brian

  // Additional test: Check inclusion
  console.log("Includes 'Clara'? ", moreStudents.includes("Clara")); // true
  console.log("Includes 'Zack'? ", moreStudents.includes("Zack"));   // false
}

testManageStudents();
