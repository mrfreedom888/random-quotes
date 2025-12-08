import quotes from "./src/quotes.js";
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleFavoriteIcon,
} from "./src/favoritesHandler.js";

const quoteElement = document.getElementById("quote");
const generateBnt = document.getElementById("generate-btn");
const quoteAuthorElement = document.getElementById("quote-author");
const toggleFavoritreBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorite-container");

let currentQuoteIndex;

function geterateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoritreBtn);

  toggleFavoritreBtn.style.display = "inline-block";
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoritreBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBnt.addEventListener("click", geterateRandomQuote);
toggleFavoritreBtn.addEventListener("click", toggleFavorite);

geterateRandomQuote();
