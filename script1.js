const databaseURL = "https://YOUR_PROJECT_ID.firebaseio.com/users.json"; // Replace with your actual database URL

async function fetchUsers() {
  try {
    const response = await fetch(databaseURL, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    const tbody = document.querySelector("#userTable tbody");

    if (!users) {
      document.getElementById("error").textContent = "No user data found.";
      return;
    }

    for (const userId in users) {
      const user = users[userId];
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;

      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      tbody.appendChild(row);
    }
  } catch (error) {
    document.getElementById("error").textContent = "Failed to fetch users: " + error.message;
  }
}

fetchUsers();
