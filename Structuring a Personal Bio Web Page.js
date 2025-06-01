<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Personal Bio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 30px;
      background-color: #f0f8ff;
      color: #333;
    }
    h1, h2 {
      color: #2c3e50;
    }
    section {
      margin-bottom: 25px;
    }
    form {
      background-color: #fff;
      padding: 15px;
      border-radius: 8px;
      max-width: 400px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    label {
      display: block;
      margin-top: 10px;
    }
    input[type="text"], input[type="email"] {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    input[type="submit"] {
      margin-top: 15px;
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    input[type="submit"]:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>

  <h1>Hello, I'm [Your Name]</h1>

  <section>
    <h2>About Me</h2>
    <p>I am an aspiring web developer currently studying at Masai School. I am passionate about technology, creativity, and building meaningful web applications.</p>
  </section>

  <section>
    <h2>Hobbies</h2>
    <p>I love reading books, playing guitar, and exploring new technologies. I also enjoy outdoor activities like cycling and hiking.</p>
  </section>

  <section>
    <h2>Contact Information</h2>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required>

      <input type="submit" value="Submit">
    </form>
  </section>

</body>
</html>
