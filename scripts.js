
function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}


function divide(num1,num2){
    return num1 / num2;
}

function operate(operator,num1,num2){
    if (operator == "+"){
        return add(num1,num2)
    }
    else if (operator == "-"){
        return subtract(num1,num2)
    }
    else if (operator == "*"){
        return multiply(num1,num2)
    }
    else if (operator == "/"){
        return divide(num1,num2)
    }
}

function clr() { 
    document.getElementById("result").value = "" 
} 

function display(val){
    document.getElementById("result").value += val
}

const display = document.getElementById('result');

const digitButtons = document.querySelectorAll('.digit');

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentDisplay = display.textContent;
  
      // Prevent multiple leading zeros
      if (currentDisplay === '0') {
        display.textContent = button.value;
      } else {
        display.textContent += button.value;
      }
    });
  });

