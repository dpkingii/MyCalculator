
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
        if (num2 === 0) {
            display.value = "Error: Can't divide by 0"; // Display an error message
            return null; // Return null to indicate an invalid operation
          }
          return divide(num1, num2);
    }
}



const display = document.getElementById("result");

const digitButtons = document.querySelectorAll('.digit');

let curNum = '';
let prevNum = '';
let curOperator = null;

function clr() { 
    curNum = '';
    prevNum = '';
    display.value = '';
    operator = null;
} 

document.getElementById("equal").addEventListener('click',()=>{
    const expression = display.value;
    if (operator && curNum != "") {
        // Perform the calculation if there's an existing operator
        const result = operate(operator,parseFloat(prevNum) ,parseFloat(curNum));
        if (result !== null) {
            curNum = result;
            display.value = curNum;
            operator = null;
        }
      }
      console.log(" prevNum:"+parseFloat(prevNum)+" curNum:"+parseFloat(curNum));

    }
)

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentDisplay = display.value;
      // Prevent multiple leading zeros
      if (currentDisplay == '0') {
        display.value = button.value;
      } else {
        curNum += button.value;
        display.value += button.value;
      }
    });
  });

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log("curNum: "+parseFloat(curNum))
      // Prevent multiple leading zeros
      if (prevNum == '' && (curNum== "0*" || curNum== "0/" || curNum== "0+" || curNum== "0-" || curNum =='')) {
        display.value = "0"+ button.value;
      }
    
      if (operator && curNum != "") {
        // Perform the calculation if there's an existing operator
        console.log(" num1:"+parseFloat(prevNum)+" num2:"+parseFloat(curNum));
        prevNum = operate(operator,parseFloat(prevNum) ,parseFloat(curNum) );
        
        console.log("result: "+parseFloat(prevNum));
      } else {
        // Otherwise, just set the previous number
        prevNum = curNum;
        console.log(" prevnum:"+parseFloat(prevNum));
      }
  
      operator = button.value; // Update the operator
      curNum = ''; // Reset the current number for the next input
      if (prevNum != null){
        display.value += button.value;
      }
    });
  });


