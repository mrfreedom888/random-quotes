import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const generateBnt = document.getElementById("generate-btn");
const quoteAuthorElement = document.getElementById("quote-author");
const toggleFavoritreBtn = document.getElementById("toggle-favorite-btn");
const favoriteContainer = document.getElementById("favorite-container");

let currentQuoteIndex;

function geterateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoritreBtn.textContent = randomQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  toggleFavoritreBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoritreBtn.textContent = currentQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";
  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `
      <p>${currentQuote.quote}</p>
      <p class = 'author'>${currentQuote.author}</p>
      `;
    favoriteContainer.appendChild(favoriteCard);
  } else {
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBnt.addEventListener("click", geterateRandomQuote);
toggleFavoritreBtn.addEventListener("click", toggleFavorite);

// geterateRandomQuote();
