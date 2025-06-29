const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    // Try to convert price to a number if it's a string
    const price = Number(item.price);

    if (isNaN(price)) {
      console.log("Invalid price.");
      return;
    }

    // Add valid item
    this.items.push({ ...item, price }); // store numeric price
    this.total += price;
    console.log(`Added item: ${item.name} - $${price.toFixed(2)}`);
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

// Test Cases
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // Should work
checkout.addItem({ name: "Milk", price: 3.50 });             // Should work
checkout.addItem({ name: "Invalid Item", price: "free" });   // Should reject

console.log(checkout.getTotal()); // Should log: Total: $103.45
