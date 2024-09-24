function add() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstNum + secondnum;

  document.getElementById("result").innerHTML = result;
}

function subtract() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstNum - secondnum;

  document.getElementById("result").innerHTML = result;
}

function multiply() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstNum * secondnum;

  document.getElementById("result").innerHTML = result;
}

function divide() {
  let firstNum = parseFloat(document.getElementById("num1").value);
  let secondnum = parseFloat(document.getElementById("num2").value);
  let result = firstNum / secondnum;

  document.getElementById("result").innerHTML = result;
}

function squareRoot() {
  const num1 = parseFloat(document.getElementById("num1").value);
  let result = Math.sqrt(num1);
  document.getElementById("result").innerText = result;
}

function power() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result = Math.pow(num1, num2);
  document.getElementById("result").innerText = result;
}
