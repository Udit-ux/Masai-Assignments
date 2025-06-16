<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Theme Switcher with sessionStorage</title>
  <style>
    body {
      transition: background-color 0.3s, color 0.3s;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    select {
      font-size: 16px;
      padding: 8px;
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <h1>Theme Switcher</h1>
  <label for="themeSelect">Choose a theme:</label>
  <select id="themeSelect">
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="blue">Blue</option>
  </select>

  <script src="script.js"></script>
</body>
</html>
