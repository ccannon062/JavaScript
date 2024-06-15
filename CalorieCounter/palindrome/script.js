const textInput = document.getElementById("text-input");
const resultSpan = document.getElementById("result");
const getForm = document.getElementById("form")


function cleanText(text) {
    const regex = /[^a-zA-Z0-9]+/g;
    return text.replace(regex, '');
}

function isPalindrome(originalText) {
    const reverse = originalText.split('').reverse().join('').toLowerCase();
    return reverse === originalText.toLowerCase();
}

function displayResult(palindrome) {
    if(palindrome) {
        resultSpan.innerText = `${textInput.value} is a palindrome`
    }
    else {
        resultSpan.innerText = `${textInput.value} is not a palindrome`
    }
}

getForm.addEventListener('submit', () => {
    if(textInput.value === "" || textInput.value === null) {
        alert("Please input a value");
    }
    const cleanedString = cleanText(textInput.value);
    displayResult(isPalindrome(cleanedString));
});
