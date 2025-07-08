function createInventoryItem(name, category, price) {
  return {
    name: name,
    category: category,
    price: price,
    describeItem: function() {
      console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
    }
  };
}

function addItemDiscount(inventoryItem, discountPercent) {
  inventoryItem.discountPercent = discountPercent;
  inventoryItem.discountedPrice = inventoryItem.price - (inventoryItem.price * discountPercent / 100);

  inventoryItem.applyDiscount = function() {
    console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
  };

  return inventoryItem;
}


const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem(); 


const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
s
