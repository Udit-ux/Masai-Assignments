body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.card {
  padding: 16px;
  border-radius: 8px;
  color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}

.in-stock {
  background-color: green;
}

.out-of-stock {
  background-color: red;
}
