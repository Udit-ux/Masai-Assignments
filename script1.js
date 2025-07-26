// 1. Select the <h1> element by its id and change its text content
document.getElementById('main-heading').textContent = 'Welcome to the DOM World!';

// 2. Select all <p> elements and change their text color to blue
let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'blue';
}

// 3. Use querySelector to select the first <div> with class 'container' and change background color
let containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = 'yellow';
