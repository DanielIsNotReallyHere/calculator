function add(a,b) {
    
    return Number(a) + Number(b);
    
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b; 
}

function multiply(a,b) {
    return a * b;
}

let firstNum = '';
let secondNum = '';
let symbol = '';
let displayValue;
let firstPart = '';
let secondPart = '';

function operate(a,b,symbol) {
     if(a == '' && b == '' && symbol == '') {
        alert("please input a proper equation, otherwise i will be forced to remove your balls")
    }
    
    else if(b == '' || symbol == '') {
        return a;
    }
    
    else if (symbol == '+') {
        return add(a,b);
    }
    else if(symbol == '-') {
        return subtract(a,b);
    }
    else if(symbol == 'x') {
        return multiply(a,b);
    }
    else if(a == 0 && symbol == '/' && b == 0) {
        alert("KABOOM THE WORLD IS GOING TO EXPLODE AHHHHH");
        
    }
    
    else {
        return Math.round(divide(a,b));
    }
}

let btn = document.querySelectorAll(".keys");
let equals = document.querySelector(".equals");
let symbols = document.querySelectorAll(".symbol");

let display = document.querySelector(".cock");


btn.forEach((button) => {button.addEventListener('click', (event) => {
    
    if(event.target.value == 'clear') {
        display.textContent = '';
        symbol = '';
        firstNum = '';
        secondNum = '';

        console.log("clear clearly working");
    }
    
    else if (symbol == '') {
        firstNum += event.target.value;
        display.textContent += event.target.value;
        console.log(firstNum);
    }
    else if (symbol != '') {
        secondNum += event.target.value;
        display.textContent += event.target.value;
        console.log(secondNum);
    }
    
    
})}); 

symbols.forEach((button) => {button.addEventListener('click', (eventwo) => {
    
    if(symbol != '') {
         if(firstNum == 0 && symbol == '/' && secondNum == 0) {
            display.textContent = '';
            symbol = '';
            firstNum = '';
            secondNum = '';
            
        }
        else { 
        console.log("symbol:" + symbol);
        console.log("firstNum: " + firstNum);
        console.log("secondNum: " + secondNum);
        let operator = operate(firstNum, secondNum, symbol);
        console.log(operator);
        display.textContent = operator;
        display.textContent += eventwo.target.value;
    
        firstNum = operator;
        symbol = eventwo.target.value;
        secondNum = '';
        }

    }
    
    else if(display.textContent.length == 0) {
        if(eventwo.target.value == '-') {
            firstNum = eventwo.target.value;
            display.textContent = eventwo.target.value;
        }
        else {
            symbol = '';
        }
    }
    else {
        symbol = eventwo.target.value;
        display.textContent += eventwo.target.value;
    }
   
    
})}); 

equals.addEventListener('click', (eventhree) => {

    if(firstNum == 0 && symbol == '/' && secondNum == 0) {
        display.textContent = '';
        symbol = '';
        firstNum = '';
        secondNum = '';
        
    }

    else { 
    console.log("symbol:" + symbol);
    console.log("firstNum: " + firstNum);
    console.log("secondNum: " + secondNum);
    let operator = operate(firstNum, secondNum, symbol);
    console.log(operator);
    display.textContent = operator;

    firstNum = operator;
    symbol = '';
    secondNum = '';
    }


   
    
});


/* i also had another function for the calc, but i ended up scrapping it because it was somehow worse than the first attempt lmao, i need to get
my dick sucked */ 

/* equals.addEventListener("click", (happening) => {
    
   
    for(let i = 0; i < display.textContent.length; i++) {
        
        if(display.textContent[i] == '+' || display.textContent[i] == '-' || display.textContent[i] == 'x' || display.textContent[i] == '/') {
            if(i == 0 && display.textContent[i] != '-') {
                symbol = '';
            }
            else if(i == 0 && display.textContent[i] == '-') {
                firstNum += display.textContent[i];
            }
            
            else {
            symbol = display.textContent[i];
            }
            
        }
        else if (symbol == '') {
            firstNum += display.textContent[i];
        }
        else if (symbol != '') {
            secondNum += display.textContent[i];
        }
       

    }

    secondNumTrue = secondNum.split('').filter((char) => char != '=').join('');
    firstNumTrue = firstNum.split('').filter((char) => char != '=').join('');


    console.log("symbol:" + symbol);
    console.log("firstNum: " + firstNumTrue);
    console.log("secondNum: " + secondNumTrue);
    let operator;
    operator = operate(firstNumTrue, secondNumTrue, symbol);
    console.log(operator);
    display.textContent = operator;

    firstNum = '';
    symbol = '';
    secondNum = '';


}) (i am aware that TOP recommends erasing all code under green tabs that is going to remain unused, but i am fairly proud of how this one turned out.
     It almost even worked, when i didn`t have to take into account that one could input more than one symbol) */


   
    
    



