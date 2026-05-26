const quotes = [
    "Success is the sum of small efforts repeated daily.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Push yourself because no one else will do it for you.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Your future is created by what you do today.",
    "Stay positive, work hard, make it happen.",
    "Great things never come from comfort zones.",
    "Do something today that your future self will thank you for.",
    "Believe in yourself and all that you are."
];

function generateQuote() {

    const randomIndex =
        Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
        quotes[randomIndex];
}