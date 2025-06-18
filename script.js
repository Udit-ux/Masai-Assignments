const searchBtn = document.getElementById("searchBtn");
const productList = document.getElementById("productList");
const statusDiv = document.getElementById("status");

searchBtn.addEventListener("click", async () => {
  const category = document.getElementById("category").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;

  if (!category || !minPrice || !maxPrice) {
    statusDiv.textContent = "Please fill in all fields.";
    return;
  }

  const url = `https://mockapi.io/products?category=${category}&min_price=${minPrice}&max_price=${maxPrice}&sort=asc`;

  productList.innerHTML = "";
  statusDiv.textContent = "Loading...";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch products");

    const data = await response.json();
    statusDiv.textContent = data.length === 0 ? "No products found." : "";

    productList.innerHTML = data
      .map(
        (product) => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
      </div>
    `
      )
      .join("");
  } catch (error) {
    statusDiv.textContent = "Error fetching data.";
    console.error(error);
  }
});
