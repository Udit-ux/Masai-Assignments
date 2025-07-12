// Car Constructor
function Car(make, model, year, type, isAvailable = true) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.type = type; // SUV, Sedan, etc.
  this.isAvailable = isAvailable;
}

// Customer Constructor
function Customer(name) {
  this.name = name;
  this.rentedCars = [];
}

// Rent Car Method
Customer.prototype.rentCar = function (car) {
  if (car.isAvailable) {
    console.log(`${this.name} is renting ${car.make} ${car.model}`);
    car.isAvailable = false;
    this.rentedCars.push(car);
  } else {
    console.log(`${car.make} ${car.model} is already rented.`);
  }
};

// Return Car Method with async simulation
Customer.prototype.returnCar = function (car) {
  const carIndex = this.rentedCars.indexOf(car);
  if (carIndex > -1) {
    console.log(`${this.name} is returning ${car.make} ${car.model}...`);
    setTimeout(() => {
      car.isAvailable = true;
      this.rentedCars.splice(carIndex, 1);
      console.log(`${car.make} ${car.model} has been returned and is now available.`);
    }, 2000);
  } else {
    console.log(`${this.name} has not rented this car.`);
  }
};

// PremiumCustomer Constructor (inherits from Customer)
function PremiumCustomer(name, discountRate) {
  Customer.call(this, name); // Inherit properties
  this.discountRate = discountRate;
}

// Inherit Customer prototype
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Rental Pricing Function
function calculateRentalPrice(carType, days, isPremium, discountRate = 0) {
  const baseRate = 50;
  const typeRates = {
    SUV: 1.5,
    Sedan: 1.2,
    Hatchback: 1.0
  };

  const multiplier = typeRates[carType] || 1;
  let price = baseRate * multiplier * days;

  if (isPremium) {
    price = price - (price * discountRate);
  }

  return price;
}

// Maintenance Function
function performMaintenance(car, delay) {
  console.log(`Maintenance started for ${car.make} ${car.model}`);
  setTimeout(() => {
    car.isAvailable = true;
    console.log(`Maintenance completed for ${car.make} ${car.model}. Now available.`);
  }, delay);
}
