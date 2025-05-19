// Step 1: Create the user object
const user = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
  isAdmin: false
};

// Step 2: Convert to JSON string
const jsonString = JSON.stringify(user);

// Step 3: Parse JSON string back to object
const parsedUser = JSON.parse(jsonString);

// Step 4: Access and print each key's value
console.log("Name:", parsedUser.name);
console.log("Age:", parsedUser.age);
console.log("Email:", parsedUser.email);
console.log("Admin:", parsedUser.isAdmin);
