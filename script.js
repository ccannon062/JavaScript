const quoteBox = document.getElementById("quote");
const quoteBtn = document.getElementById("quote-btn");
const quoteArr = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "You only live once, but if you do it right, once is enough. - Mae West",
  "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. - William James",
  "The best way to predict your future is to create it. - Abraham Lincoln",
  "Act as if what you do makes a difference. It does. - William James",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
];

const generateQuote = () => {
  quoteBox.innerHTML =
    quoteArr[Math.floor(Math.random() * quoteArr.length - 1)];
};

quoteBtn.addEventListener("click", generateQuote);
