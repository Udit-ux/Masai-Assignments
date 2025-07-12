// Constructor function Animal
function Animal() {
  this.type = "Animal";
}

// Add sound method to Animal.prototype
Animal.prototype.sound = function () {
  console.log("Animal sound");
};

// Constructor function Dog that inherits from Animal
function Dog() {
  Animal.call(this); // Call the Animal constructor to inherit properties
  this.type = "Dog"; // Optionally override type if needed
}

// Inherit from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Set the constructor back to Dog
Dog.prototype.constructor = Dog;

// Override the sound method in Dog.prototype
Dog.prototype.sound = function () {
  console.log("Bark");
};

// Create an instance of Dog
const myDog = new Dog();

// Call the sound method on myDog
myDog.sound(); // Output: Bark
