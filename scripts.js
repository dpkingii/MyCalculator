
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
        if (num2==0){
            display.value = "Can't divide by 0"
            return null
        }
        return divide(num1,num2)
    }
    else if (operator == "="{
        
    })
}

function clr() { 
    document.getElementById("result").value = "" 
} 


const display = document.getElementById("result");

const digitButtons = document.querySelectorAll('.digit');

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentDisplay = display.value;
      // Prevent multiple leading zeros
      if (currentDisplay === '0') {
        display.value = button.value;
      } else {
        display.value += button.value;
      }
    });
  });

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentDisplay = display.value;
      // Prevent multiple leading zeros
      if (currentDisplay === '0') {
        display.value = button.value;
      } else {
        display.value += button.value;
      }
    });
  });


