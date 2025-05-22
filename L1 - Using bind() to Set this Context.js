// Create the car object
let car = {
    brand: "Tesla",
    getBrand: function() {
        return this.brand;
    }
};

// Use bind to permanently set 'this' to the 'car' object
let boundGetBrand = car.getBrand.bind(car);

// Call the bound function
console.log(boundGetBrand()); // Output: "Tesla"
