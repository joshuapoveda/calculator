//variables
let numbers = [];
let digit = "";
let solved = false;
let operator = "";

const inputDigit = (num) => {
  //makes sure to clear field after evaluation
  if (solved === true) {
    clearDisplay();
  }
  //displays input and builds first operand
  document.querySelector(".number-bar").innerHTML += num;
  digit += num;
  //resets evaluation state to allow for new computation
  solved = false;
};

const operate = (symbol) => {
  //sets operator
  operator = symbol;
  //ensures operators are disabled whilst no input is given
  if (digit !== "") {
    document.querySelector(".number-bar").innerHTML += symbol;
    //sends digit to the array
    numbers.push(parseInt(digit));
    //resets the digit for new input
    digit = "";
  } else {
    console.log("No input");
  }
}

const solution = () => {
  //adds the final operand to the array
  if (digit !== "") {
    numbers.push(parseInt(digit));
  } else {
    console.log("No input")
  }

  if (numbers.length < 2) {
    console.log("Insufficient inputs");
    console.log(numbers);
    return;
  }

  //operations
  if (operator === "+") {
    let sum = numbers.reduce((acc, curr) => acc + curr);
    document.querySelector(".number-bar").innerHTML += "=" + sum;
    wipe();
    solved = true;
  }

  if (operator === "-") {
    let sum = numbers.reduce((acc, curr) => acc - curr);
    document.querySelector(".number-bar").innerHTML += "=" + sum;
    wipe();
    solved = true;
  }

  if (operator === "*") {
    let sum = numbers.reduce((acc, curr) => acc * curr, 1);
    document.querySelector(".number-bar").innerHTML += "=" + sum;
    wipe();
    solved = true;
  }
  if (operator === "/") {
    let sum = numbers.reduce((acc, curr) => acc / curr);
    document.querySelector(".number-bar").innerHTML += "=" + sum;
    wipe();
    solved = true;
  }

  //this is where I would think to put the ability for the user to chain operands
};

//wipe slate
const wipe = () => {
  numbers = [];
  digit = "";
};

const clearDisplay = () => {
  document.querySelector(".number-bar").innerHTML = "";
  numbers = [];
  digit = "";
  console.log(numbers);
  console.log(digit);
};

//next issue: if user inputs number, then operator, then decides to choose another operator
