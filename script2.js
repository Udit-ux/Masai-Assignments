const ul = document.querySelector("#item-list");
const button = document.getElementById("add-btn");

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  const itemCount = ul.children.length + 1;

  newItem.textContent = `Item ${itemCount}`;

  if (itemCount % 2 === 1) {
    newItem.classList.add("odd");
  } else {
    newItem.classList.add("even");
  }

  ul.appendChild(newItem);
});
