function manageStudents() {
  let students = ["Alice", "Bob", "Charlie"];

  // Add "David" at index 1
  students.splice(1, 0, "David");

  // Check if "Eve" is in the list
  const hasEve = students.includes("Eve");
  console.log("Includes Eve:", hasEve);  // Should log: false

  // Convert array to a comma-separated string
  const studentString = students.join(",");
  console.log("Student List:", studentString);  // Should log: Alice,David,Bob,Charlie
}

manageStudents();
