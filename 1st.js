function processProducts(products) {
  // Use map to extract product names
  const productNames = products.map(product => product.name);

  // Use forEach to log based on price
  products.forEach(product => {
    if (product.price > 50) {
      console.log(`${product.name} is above $50`);
    } else {
      console.log(`${product.name} is below $50`);
    }
  });

  // Return the array of names (if needed)
  return productNames;
}

// Example usage:
const input = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(input);
