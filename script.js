const quotes = [
  "Ваш час обмежений, тому не витрачайте його, намагаючись жити чужим життям. - Стів Джобс",
  "Працювати потрібно не 12 годин на добу, а головою! - Стів Джобс",
  "Немає сенсу наймати тямущих людей, а потім указувати, що їм робити. - Стів Джобс",
];

const quoteElement = document.getElementById("quote");
const generateBnt = document.getElementById("generate-btn");

function geterateRandomQuote() {
  console.log("THIS FUNCTIOTN WAS JUST CALLED");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBnt.addEventListener("click", geterateRandomQuote);
