// const buttonOne = document.querySelector("#buttonOne");
// const buttonTwo= document.querySelector("#buttonTwo");
// const buttonThree = document.querySelector("#buttonThree");
// const buttonFour = document.querySelector("#buttonFour");
// const buttonFive = document.querySelector("#buttonFive");
// const buttonSix = document.querySelector("#buttonSix");
// const buttonSeven = document.querySelector("#buttonSeven");
// const buttonEight = document.querySelector("#buttonEight");
// const buttonNine = document.querySelector("#buttonNine");
// const buttonZero = document.querySelector("#buttonZero");
const buttonAdd = document.querySelector("#buttonAdd");
const buttonSubtract = document.querySelector("#buttonSubtract");
const buttonMultiply = document.querySelector("#buttonMultiply");
const buttonDivide = document.querySelector("#buttonDivide");
const buttonEquals =document.querySelector("#buttonEquals");
const output = document.querySelector("#currentOutput");
const memory = document.querySelector("#savedOutput");
const numberButtons = document.querySelectorAll(".numberButton");
const clearButton = document.querySelector("#clearButton");
const decimalButton = document.querySelector("#buttonDecimal");

console.log(numberButtons)

let primaryValue = "";
let secondaryValue = "";
let isAddition = false;
let isSubtraction = false;
let isMultiplication = false;
let isDivision = false;

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        if (primaryValue.length > 0 && (isAddition === true || isSubtraction === true || isMultiplication === true || isDivision === true)) {
            memory.value = primaryValue;
            secondaryValue = secondaryValue + numberButtons[i].value;
            output.value = secondaryValue;
        } else {
            primaryValue = primaryValue + numberButtons[i].value;
            output.value= primaryValue;
            console.log("success")
        }
    })
}

buttonAdd.addEventListener("click", () => {
    if (primaryValue.length > 0 && isAddition === false && isDivision === false && isMultiplication === false && isSubtraction === false) {
        isAddition = true;
        memory.value = primaryValue;
        output.value = "+"
    }
})

buttonSubtract.addEventListener("click", () => {
    if (primaryValue.length > 0 && isAddition === false && isDivision === false && isMultiplication === false && isSubtraction === false) {
        isSubtraction = true;
        memory.value = primaryValue;
        output.value = "-"
    }
})

buttonDivide.addEventListener("click", () => {
    if (primaryValue.length > 0 && isAddition === false && isDivision === false && isMultiplication === false && isSubtraction === false) {
        isDivision = true;
        memory.value = primaryValue;
        output.value = "/"
    }
})

buttonMultiply.addEventListener("click", () => {
    if (primaryValue.length > 0 && isAddition === false && isDivision === false && isMultiplication === false && isSubtraction === false) {
        isMultiplication = true;
        memory.value = primaryValue;
        output.value = "X"
    }
})

decimalButton.addEventListener("click", () => {
    if (primaryValue.length > 0 && secondaryValue.length > 0 && secondaryValue.includes(".") === false && (isAddition === true || isDivision === true || isMultiplication === true || isSubtraction === true)){
        secondaryValue = secondaryValue + ".";
        output.value= secondaryValue;
    } else if (secondaryValue.length <= 0 && primaryValue.length > 0 && secondaryValue.includes(".") === false && (isAddition === true || isDivision === true || isMultiplication === true || isSubtraction === true)) {
        secondaryValue = "0."; 
        output.value = secondaryValue;
    } else if (primaryValue.length <= 0  && primaryValue.includes(".") === false && (isAddition === false || isDivision === false || isMultiplication === false || isSubtraction === false) ){
        primaryValue= "0.";
        output.value = primaryValue;
    }else if (primaryValue.length > 0 && secondaryValue.length <= 0 && primaryValue.includes(".") === false && (isAddition === false || isDivision === false || isMultiplication === false || isSubtraction === false)) {
        primaryValue = primaryValue + ".";
        output.value = primaryValue;
    } else {
        output.value = "ERROR";
        console.log(primaryValue.length)
    }
});

buttonEquals.addEventListener("click", () =>{
    if (primaryValue > 0 && secondaryValue > 0 && isAddition === true) {
        primaryValue = parseFloat(primaryValue) + parseFloat(secondaryValue);
        memory.value = primaryValue;
        output.value = primaryValue;
        primaryValue = primaryValue.toString();
        secondaryValue = "";
        isAddition = false;
    } else if (primaryValue > 0 && secondaryValue > 0 && isMultiplication === true){
        primaryValue = parseFloat(primaryValue) * parseFloat(secondaryValue);
        memory.value = primaryValue;
        output.value = primaryValue;
        primaryValue = primaryValue.toString();
        secondaryValue = "";
        isMultiplication = false;
    } else if (primaryValue > 0 && secondaryValue > 0 && isDivision === true) {
        primaryValue = parseFloat(primaryValue) / parseFloat(secondaryValue);
        memory.value = primaryValue;
        output.value = primaryValue;
        primaryValue = primaryValue.toString();
        secondaryValue = "";
        isDivision =false
    } else if (primaryValue > 0 && secondaryValue > 0 && isSubtraction === true) {
        primaryValue = parseFloat(primaryValue) - parseFloat(secondaryValue);
        memory.value = primaryValue;
        output.value = primaryValue;
        primaryValue = primaryValue.toString();
        secondayValue = "";
        isSubtraction = false;
    }
})

clearButton.addEventListener("click", () => {
    primaryValue = "";
    secondaryValue = "";
    isAddition = false;
    isDivision = false;
    isMultiplication = false;
    isSubtraction = false;
    output.value = "";
    memory.value = "";
})

