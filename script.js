const MAIN_DISPLAY = document.getElementById("main");
const SECOND_DISPLAY = document.getElementById("secondary");

const expression = [];

const operators = ["-", "+", "/", "*"];

function changeDisplay(display, arg) {
  display.textContent += arg;
}

function clearDisplay() {
  MAIN_DISPLAY.textContent = "";
}

function clearDisplays() {
  MAIN_DISPLAY.textContent = "";
  SECOND_DISPLAY.textContent = "";
  expression.length = 0;
}

function deleteNum() {
  MAIN_DISPLAY.textContent = MAIN_DISPLAY.textContent.slice(0, -1);
}

function addNum(num) {
  changeDisplay(MAIN_DISPLAY, num);
}

function operate(operator) {
  if (operators.includes(expression.at(-1)) && operator != "=") {
    return;
  }
  expression.push(Number(MAIN_DISPLAY.textContent));
  changeDisplay(SECOND_DISPLAY, expression.at(-1));
  if (operator != "=") {
    expression.push(operator);
    changeDisplay(SECOND_DISPLAY, expression.at(-1));
    clearDisplay(MAIN_DISPLAY);
  } else {
    calculate();
  }
}

function calculate() {
  let total = expression[0];
  for (let i in expression) {
    i = Number(i);
    if (operators.includes(expression.at(i))) {
      switch (expression.at(i)) {
        case "+":
          total += expression[i + 1];
          break;
        case "-":
          total -= expression[i + 1];
          break;
        case "/":
          total /= expression[i + 1];
          break;
        case "*":
          total *= expression[i + 1];
          break;
      }
    } else {
    }
  }
  expression.length = 0;
  clearDisplays();
  changeDisplay(MAIN_DISPLAY, total);
}
