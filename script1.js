// 1. Select the <h1> element by its ID and change its text content
const heading = document.getElementById("main-heading");
heading.textContent = "Welcome to the DOM World!";

// 2. Select all <p> elements and change their text color to blue
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
}

// 3. Select the first <div> with class "container" and change background color to yellow
const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
