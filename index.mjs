function add(a, b) {
    return a + b;
   }
   
   function subtract(a, b) {
    return a - b;
   }
   
   function multiply(a, b) {
    return a * b;
   }
   
   function divide(a, b) {
    if (b === 0) {
       return "undefined";
    } else {
       return a / b;
    }
   }
   
   function operate(operator, a, b) {
    if (operator === "+") {
       return add(a, b);
    } else if (operator === "-") {
       return subtract(a, b);
    } else if (operator === "*") {
       return multiply(a, b);
    } else if (operator === "/") {
       return divide(a, b);
    } else {
       return "invalid operator";
    }
   }
   
   let firstNumber = "";
   let operator = "";
   let secondNumber = "";
 
 
   
   const display = document.getElementById('display');
   
   function populateDisplay(number) {
     if (display.value === '0' || display.value === 'undefined') {
       display.value = number;
     } else {
       display.value += number;
     }
   }
   const numberButtons = document.querySelectorAll('.button');
   numberButtons.forEach(button => {
     button.addEventListener('click', () => {
       populateDisplay(button.textContent);
     });
   });
 
   const operatorButtons = document.querySelectorAll('#add, #subtract, #multiply, #divide');
     operatorButtons.forEach(button => {
       button.addEventListener('click', () => {
         if (firstNumber === "") {
           firstNumber = parseFloat(display.value);
           operator = button.textContent;
           display.value = "0";
         }
       });
     });
 
     document.querySelector('#clear-display').addEventListener('click', () => {
       display.value = "0";
       firstNumber = "";
       operator = "";
       secondNumber = "";
     });
 
     document.getElementById('equals').addEventListener('click', () => {
       if (firstNumber !== "" && operator !== "") {
         secondNumber = parseFloat(display.value);
         const result = operate(operator, firstNumber, secondNumber);
         display.value = result;
         firstNumber = result;
         operator = "";
         secondNumber = "";
       }
     });