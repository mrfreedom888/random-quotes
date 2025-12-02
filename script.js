import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const generateBnt = document.getElementById("generate-btn");
const quoteAuthorElement = document.getElementById("quote-author");
const toggleFavoritreBtn = document.getElementById("toggle-favorite-btn");
const favoriteContainer = document.getElementById("favorite-container");

let currentQuoteIndex;

function toggleFavoriteIcon(isFavorite) {
  toggleFavoritreBtn.classList.toggle("fa", isFavorite);
  toggleFavoritreBtn.classList.toggle("far", !isFavorite);
}

function geterateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
  toggleFavoriteIcon(randomQuote.isFavorite);

  toggleFavoritreBtn.style.display = "inline-block";
}

function showFavoriteCard(quote, author) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
      <p>${quote}</p>
      <p class = 'author'>${author}</p>
      `;
  favoriteContainer.appendChild(favoriteCard);
}

function hideFavoriteCard() {
  const favoriteCards = document.querySelectorAll(".favorite-card");
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote.quote, currentQuote.author);
  } else {
    hideFavoriteCard();
  }
}

generateBnt.addEventListener("click", geterateRandomQuote);
toggleFavoritreBtn.addEventListener("click", toggleFavorite);

geterateRandomQuote();
