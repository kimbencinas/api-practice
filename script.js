const quoteContainer = document.getElementById("quote-container");
const quoteElement = document.getElementById("quote");
const button = document.getElementById("button");

let getQuote = () => {
    fetch("https://zenquotes.io/api/random") 
        .then(response => {
            return response.json();
        })
        .then(data => {
            quoteElement.textContent = data[0].q;
        })
        .catch(error => {
            console.error(error);
        });
}
button.addEventListener("click", getQuote);
getQuote();