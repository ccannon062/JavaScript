const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this._field = field;
  }
  print() {
    for (let i = 0; i < this._field.length; i++) {
      console.log(this._field[i].join(""));
    }
  }
  getField() {
    return this._field;
  }
  static generateField(height, width, holePercentage) {
    this._field = [];
    
    for (let i = 0; i < height; i++) {
      this._field.push(new Array(width).fill(fieldCharacter));
    }

    this._field[0][0] = pathCharacter;

    let hatRow, hatCol;
    do {
      hatRow = Math.floor(Math.random() * height);
      hatCol = Math.floor(Math.random() * width);
    } while (hatRow === 0 && hatCol === 0);
    this._field[hatRow][hatCol] = hat;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if ((i !== 0 || j !== 0) && (i !== hatRow || j !== hatCol)) {  // Avoid starting position and hat
          if (Math.random() * 100 < holePercentage) {
            this._field[i][j] = hole;
          }
        }
      }
    }

    return new Field(this._field);
  }
}

const findLocation = (gameField) => {
  let index;
  let i = 0;
  for (i; i < gameField.length; i++) {
    if (gameField[i].indexOf(pathCharacter) >= 0) {
      index = gameField[i].indexOf(pathCharacter);
      break;
    }
  }
  return [i, index];
}

const getMove = (gameField, currRow, currPos) => {
  const move = prompt("Which direction would you like to move? ");
  switch (move.toLowerCase()) {
    case "up":
      if (currRow - 1 >= 0) {
        return "up";
      }
      break;
    case "down":
      if (currRow + 1 <= gameField.length - 1) {
        return "down";
      }
      break;
    case "left":
      if (currPos - 1 >= 0) {
        return "left";
      }
      break;
    case "right":
      if (currPos + 1 <= gameField[currRow].length - 1) {
        return "right";
      }
      break;
    default:
      console.log("Invalid move!");
      return null;
  }
}

const updateField = (gameField, currPos, currRow, move) => {
  let replacedChar;
  switch (move) {
    case "up":
      replacedChar = gameField._field[currRow - 1][currPos];
      gameField._field[currRow - 1][currPos] = pathCharacter;
      return [currPos, currRow - 1, replacedChar];
    case "down":
      replacedChar = gameField._field[currRow + 1][currPos];
      gameField._field[currRow + 1][currPos] = pathCharacter;
      return [currPos, currRow + 1, replacedChar];
    case "left":
      replacedChar = gameField._field[currRow][currPos - 1];
      gameField._field[currRow][currPos - 1] = pathCharacter;
      return [currPos - 1, currRow, replacedChar];
    case "right":
      replacedChar = gameField._field[currRow][currPos + 1];
      gameField._field[currRow][currPos + 1] = pathCharacter;
      return [currPos + 1, currRow, replacedChar];
  }
}

const getStatus = (replacedChar) => {
  if (replacedChar === hat) {
    return `win`;
  } else if (replacedChar === fieldCharacter || replacedChar === pathCharacter) {
    return "continue";
  } else {
    return "lost";
  }
}

const gameLoop = (gameField) => {
  let result = "continue";
  let [currRow, currPos] = findLocation(gameField.getField());
  let replacedChar = "";
  let move = "";
  gameField.print();
  while (true) {
    move = getMove(gameField.getField(), currRow, currPos);
    if (move) {
      [currPos, currRow, replacedChar] = updateField(gameField, currPos, currRow, move);
      result = getStatus(replacedChar);
      if (result === "win") {
        gameField.print();
        console.log("You found the hat! You won the game");
        break;
      } else if (result === "continue") {
        gameField.print();
      } else {
        console.log("You lost. You fell in a hole.");
        break;
      }
    } else {
      console.log("Invalid move, try again!");
    }
  }
}

const myField = Field.generateField(5, 5, 30);
gameLoop(myField);
