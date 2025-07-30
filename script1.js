async function searchProducts() {
  const category = document.getElementById('category').value;
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;
  const productList = document.getElementById('productList');
  const loader = document.getElementById('loader');
  const error = document.getElementById('error');

  productList.innerHTML = '';
  error.classList.add('hidden');
  loader.classList.remove('hidden');

  let url = `https://mockapi.io/products?`;

  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (minPrice) params.append('min_price', minPrice);
  if (maxPrice) params.append('max_price', maxPrice);
  params.append('sort', 'asc');

  try {
    const response = await fetch(url + params.toString());
    if (!response.ok) throw new Error('Failed to fetch data');

    const products = await response.json();

    if (products.length === 0) {
      productList.innerHTML = '<p>No products found.</p>';
    } else {
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product';
        card.innerHTML = `
          <img src="${product.image || 'https://via.placeholder.com/150'}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
        `;
        productList.appendChild(card);
      });
    }
  } catch (err) {
    error.textContent = err.message;
    error.classList.remove('hidden');
  } finally {
    loader.classList.add('hidden');
  }
}
