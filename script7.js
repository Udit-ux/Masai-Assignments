const gridContainer = document.getElementById('product-grid');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      // Create card
      const card = document.createElement('div');
      card.classList.add('product-card');

      // Conditional border styling
      if (product.price > 50) {
        card.classList.add('border-yellow');
      } else {
        card.classList.add('border-green');
      }

      // Populate card content
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p><strong>Price:</strong> $${product.price}</p>
      `;

      // Append to container
      gridContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Failed to fetch products:", error);
    gridContainer.innerHTML = "<p>Error loading products.</p>";
  });
