const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputNumeral = document.getElementById('output');
const animationContainer= document.getElementById('animation-container');

convertBtn.addEventListener("click", () => {
    const validInput = isValidInput(inputNumber.value);
    if(validInput) {
        outputNumeral.classList.toggle('hidden');
        outputNumeral.innerText = stringToRoman(inputNumber.value);
    }
})

const isValidInput = (input) => {
    if(input === "") {
        outputNumeral.classList.toggle('hidden');
        outputNumeral.innerText = "Please enter a valid number";
        return false;
    }
    else if(input < 0) {
        outputNumeral.classList.toggle('hidden');
        outputNumeral.innerText = "Please enter a number greater than or equal to 1";
        return false;
    }
    else if(input > 3999) {
        outputNumeral.classList.toggle('hidden');
        outputNumeral.innerText = "Please enter a number less than or equal to 3999";
        return false;
    }
    return true;
}

function stringToRoman(num) {
    const values =
        [1000, 900, 500, 400, 100,
            90, 50, 40, 10, 9, 5, 4, 1];
    const symbols =
        ['M', 'CM', 'D', 'CD', 'C',
            'XC', 'L', 'XL', 'X', 'IX',
            'V', 'IV', 'I'];
    let result = '';

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
}