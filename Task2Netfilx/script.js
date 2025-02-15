// Movies data
const moviesData = [
  // Trending Now
  { title: "Spider-Man: No Way Home", image: "./images/homepage.jpg", category: "Trending Now" },
  { title: "Stranger Things", image: "https://via.placeholder.com/150x200?text=Stranger+Things", category: "Trending Now" },
  { title: "The Witcher", image: "https://via.placeholder.com/150x200?text=The+Witcher", category: "Trending Now" },
  { title: "Breaking Bad", image: "https://via.placeholder.com/150x200?text=Breaking+Bad", category: "Trending Now" },
  { title: "Squid Game", image: "https://via.placeholder.com/150x200?text=Squid+Game", category: "Trending Now" },

  // Popular on Netflix
  { title: "Money Heist", image: "https://www.imdb.com/title/tt23875550/", category: "Popular on Netflix" },
  { title: "The Crown", image: "https://via.placeholder.com/150x200?text=The+Crown", category: "Popular on Netflix" },
  { title: "Narcos", image: "https://via.placeholder.com/150x200?text=Narcos", category: "Popular on Netflix" },
  { title: "Dark", image: "https://via.placeholder.com/150x200?text=Dark", category: "Popular on Netflix" },
  { title: "The Umbrella Academy", image: "https://via.placeholder.com/150x200?text=The+Umbrella+Academy", category: "Popular on Netflix" },
];

// Function to dynamically load movies
function loadMovies() {
  const sections = document.querySelectorAll(".movies");

  sections.forEach(section => {
    const category = section.querySelector("h2").textContent.trim();
    const grid = section.querySelector(".movie-grid");

    // Filter movies based on the section's category
    const filteredMovies = moviesData.filter(movie => movie.category === category);
    grid.innerHTML = ""; // Clear previous content

    // Dynamically create movie divs
    filteredMovies.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");
      movieDiv.style.backgroundImage = `url('${movie.image}')`;
      movieDiv.style.backgroundColor = "#ccc"; // Fallback color
      movieDiv.title = movie.title;

      // Optional: Add a placeholder if the image fails to load
      movieDiv.onerror = () => {
        movieDiv.style.backgroundImage = "url('fallback-image.jpg')";
      };

      grid.appendChild(movieDiv);
    });
  });
}



// Event Listeners for Hero Section Buttons
document.querySelector(".hero-content button:first-child").addEventListener("click", () => {
  alert("Play button clicked!");
});

document.querySelector(".hero-content button:last-child").addEventListener("click", () => {
  alert("More Info Button Clicked!");
});

// Load movies on page load
window.addEventListener("DOMContentLoaded", loadMovies);
