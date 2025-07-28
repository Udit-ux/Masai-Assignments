let currentUser = null;

const usernameInput = document.getElementById("usernameInput");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userDisplay = document.getElementById("userDisplay");

const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const itemQty = document.getElementById("itemQty");
const addItemBtn = document.getElementById("addItemBtn");

const cartBody = document.getElementById("cartBody");
const totalCostDisplay = document.getElementById("totalCost");

loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username === "") return alert("Username cannot be empty");

  currentUser = username;
  userDisplay.innerText = username;

  document.getElementById("login-section").style.display = "none";
  document.getElementById("cart-section").style.display = "block";

  loadCart();
});

logoutBtn.addEventListener("click", () => {
  currentUser = null;
  usernameInput.value = "";
  document.getElementById("login-section").style.display = "block";
  document.getElementById("cart-section").style.display = "none";
});

addItemBtn.addEventListener("click", () => {
  const name = itemName.value.trim();
  const price = parseFloat(itemPrice.value);
  const qty = parseInt(itemQty.value);

  if (!name || price <= 0 || qty <= 0) {
    return alert("Enter valid item details");
  }

  let allCarts = JSON.parse(localStorage.getItem("carts")) || {};
  let userCart = allCarts[currentUser] || [];

  const existing = userCart.find(item => item.itemName === name);
  if (existing) {
    existing.quantity += qty;
  } else {
    userCart.push({ itemName: name, price: price, quantity: qty });
  }

  allCarts[currentUser] = userCart;
  localStorage.setItem("carts", JSON.stringify(allCarts));
  clearInputs();
  loadCart();
});

function clearInputs() {
  itemName.value = "";
  itemPrice.value = "";
  itemQty.value = "";
}

function loadCart() {
  cartBody.innerHTML = "";
  let allCarts = JSON.parse(localStorage.getItem("carts")) || {};
  let userCart = allCarts[currentUser] || [];

  let total = 0;

  userCart.forEach((item, index) => {
    const row = document.createElement("tr");

    const totalItem = item.price * item.quantity;
    total += totalItem;

    row.innerHTML = `
      <td>${item.itemName}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>
        <input type="number" min="1" value="${item.quantity}" data-index="${index}" class="qtyInput"/>
      </td>
      <td>$${totalItem.toFixed(2)}</td>
      <td>
        <button class="deleteBtn" data-index="${index}">Delete</button>
      </td>
    `;

    cartBody.appendChild(row);
  });

  totalCostDisplay.innerText = total.toFixed(2);
  attachListeners();
}

function attachListeners() {
  document.querySelectorAll(".qtyInput").forEach(input => {
    input.addEventListener("change", (e) => {
      const index = e.target.dataset.index;
      const newQty = parseInt(e.target.value);
      if (newQty <= 0) return;

      let allCarts = JSON.parse(localStorage.getItem("carts"));
      allCarts[currentUser][index].quantity = newQty;
      localStorage.setItem("carts", JSON.stringify(allCarts));
      loadCart();
    });
  });

  document.querySelectorAll(".deleteBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      let allCarts = JSON.parse(localStorage.getItem("carts"));
      allCarts[currentUser].splice(index, 1);
      localStorage.setItem("carts", JSON.stringify(allCarts));
      loadCart();
    });
  });
}
