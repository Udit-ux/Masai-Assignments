const input = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
let debounceTimeout;

// Replace with your actual OMDB API key
const API_KEY = 'YOUR_API_KEY';

input.addEventListener('input', () => {
  clearTimeout(debounceTimeout);
  
  debounceTimeout = setTimeout(() => {
    const query = input.value.trim();
    if (query) {
      fetchMovies(query);
    } else {
      resultsDiv.innerHTML = ''; // Clear results if input is empty
    }
  }, 500);
});

async function fetchMovies(query) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    
    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      resultsDiv.innerHTML = `<p>No movies found.</p>`;
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    resultsDiv.innerHTML = `<p>Error fetching data.</p>`;
  }
}

function displayMovies(movies) {
  resultsDiv.innerHTML = '';
  movies.forEach(movie => {
    const div = document.createElement('div');
    div.className = 'movie';
    div.textContent = movie.Title;
    resultsDiv.appendChild(div);
  });
}
