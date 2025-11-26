import quotes from "./quotes.js";

const quoteElement = document.getElementById("quote");
const generateBnt = document.getElementById("generate-btn");

function geterateRandomQuote() {
  // console.log("THIS FUNCTIOTN WAS JUST CALLED");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const quote = `<em>'${randomQuote.quote}'</em><br>${randomQuote.author}`;
  quoteElement.innerHTML = quote;
}

generateBnt.addEventListener("click", geterateRandomQuote);
