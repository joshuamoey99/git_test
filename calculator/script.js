let currentValue='';
let previousValue='';
let operator='';

document.addEventListener("DOMContentLoaded", function(){
    //Store all components on HTML to our JS
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");
    
    numbers.forEach((number) => number.addEventListener("click",function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent=currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click",function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent+=previousValue+" "+operator;
        currentScreen.textContent=currentValue;
    
    }) )
    
    //Setting everything to '' (blank).
    clear.addEventListener("click", function(){
        previousValue='';
        currentValue='';
        operator='';
        previousScreen.textContent=currentValue;
        currentScreen.textContent=currentValue;

    })


    equal.addEventListener("click", function(){
        calculate()
        previousScreen.textContent='';
        currentScreen.textContent=previousValue;

    })

    decimal.addEventListener("click",function(){
        addDecimal()
    })
})

function handleNumber(num){
    if (currentValue.length<=10){
    currentValue += num;
    }
}

//previousValue is equal to currentValue, which is the value in handleNumber(num)
function handleOperator(ope){
    operator=ope;
    previousValue=currentValue;
    currentValue='';
}

function calculate(){
    //convert into number as originally it was string value
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    //"If" condition for each operator
    if (operator==="+"){
        previousValue+=currentValue;
    }
    else if (operator === "-"){
        previousValue -= currentValue;
    }
    else if (operator ==="x"){
        previousValue *= currentValue;
    }
    else{
        previousValue /= currentValue;
    }
}

//if currentValue not including "."
function addDecimal(){
    if (!currentValue.includes(".")){
        currentValue +='.';
    }
}