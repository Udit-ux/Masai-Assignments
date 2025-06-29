const userProfile = {
  name: "Alice",
  age: 28,

  // Fixed template literal
  details() {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    if (newAge <= 0) {
      console.log("Invalid age.");
      return;
    }

    this.age = newAge;

    // Corrected: call the method, not reference it
    console.log(this.details());
  }
};

// Testing
userProfile.updateAge(30);             // Output: "Alice is 30 years old."
console.log(userProfile.details());    // Output: "Alice is 30 years old."
