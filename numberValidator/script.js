const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

checkBtn.addEventListener("click", () => {
    const checkRegex = /\s/
    const newNumber = userInput.value.replace(checkRegex, "");
    if( newNumber === "") {
        alert("Please provide a phone number.")
        return;
    }
    checkNumber(newNumber) ? resultsDiv.innerText = "Valid US number: " + userInput.value : resultsDiv.innerText = "Invalid US number: " + userInput.value;
})

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    resultsDiv.innerText = "";
})

const checkNumber = (num) => {
    const numberRegex =  /^(\+?1-?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    return !!num.match(numberRegex);
}