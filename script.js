// Button imports. imports all buttons and assigns them to variables.
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

//variables, flags and values.
let primaryValue = "";
let secondaryValue = "";
let isAddition = false;
let isSubtraction = false;
let isMultiplication = false;
let isDivision = false;
console.log(primaryValue.length)

//main button loop. Determines which value needs to be edited for every single number button.
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        if (primaryValue.length > 0 && (isAddition === true || isSubtraction === true || isMultiplication === true || isDivision === true)) {
            memory.value = primaryValue;
            secondaryValue = secondaryValue + numberButtons[i].value;
            output.value = secondaryValue;
        } else {
            primaryValue = primaryValue + numberButtons[i].value;
            output.value= primaryValue;
        }
    })
}


//operator flags. Determines if a flag has already been set to true and that primaryValue contains a value. If theres a value and all Operator flags are false it sets the coresponding flag to  true.
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
        output.value = "÷"
    }
})

buttonMultiply.addEventListener("click", () => {
    if (primaryValue.length > 0 && isAddition === false && isDivision === false && isMultiplication === false && isSubtraction === false) {
        isMultiplication = true;
        memory.value = primaryValue;
        output.value = "×"
    }
})
//decimal button, makes sure there is not already a decimal present, automatically creates a 0 before the decimal if not value is present in the selected variable, and selects the correct value to add the decimal to.
decimalButton.addEventListener("click", () => {
    if (primaryValue.length > 0 && secondaryValue.length > 0 && secondaryValue.includes(".") === false && (isAddition === true || isDivision === true || isMultiplication === true || isSubtraction === true)){
        secondaryValue = secondaryValue + ".";
        output.value = secondaryValue;
        console.log(secondaryValue.length)
    } else if (secondaryValue.length <= 0 && primaryValue.length > 0 && secondaryValue.includes(".") === false && (isAddition === true || isDivision === true || isMultiplication === true || isSubtraction === true)){
        secondaryValue = "0."; 
        output.value = secondaryValue;
        console.log(secondaryValue.length)
    } else if (primaryValue.length <= 0  && primaryValue.includes(".") === false && (isAddition === false || isDivision === false || isMultiplication === false || isSubtraction === false) ){
        primaryValue= "0.";
        output.value = primaryValue;
    }else if (primaryValue.length > 0 && secondaryValue.length <= 0 && primaryValue.includes(".") === false && (isAddition === false || isDivision === false || isMultiplication === false || isSubtraction === false)){
        primaryValue = primaryValue + ".";
        output.value = primaryValue;
    }
});
//Equals button, all calculations are processed here.
buttonEquals.addEventListener("click", () =>{
    if (primaryValue.length > 0 && secondaryValue.length > 0 && isAddition === true) {
        primaryValue = parseFloat(primaryValue) + parseFloat(secondaryValue);
        memory.value = primaryValue;
        output.value = primaryValue;
        primaryValue = primaryValue.toString();
        secondaryValue = "";
        isAddition = false;
    } else if (primaryValue.length > 0 && secondaryValue.length > 0 && isMultiplication === true){
        primaryValue = parseFloat(primaryValue) * parseFloat(secondaryValue);
        memory.value = primaryValue;
        output.value = primaryValue;
        primaryValue = primaryValue.toString();
        secondaryValue = "";
        isMultiplication = false;
    } else if (primaryValue.length > 0 && secondaryValue.length > 0 && isDivision === true && primaryValue !== "0" && secondaryValue !== "0") {
        primaryValue = parseFloat(primaryValue) / parseFloat(secondaryValue);
        memory.value = primaryValue;
        output.value = primaryValue;
        primaryValue = primaryValue.toString();
        secondaryValue = "";
        isDivision =false
    } else if (primaryValue.length > 0 && secondaryValue.length > 0 && isDivision === true && (primaryValue === "0" || secondaryValue === "0")){
        output.value = " ERROR: Can not divide by Zero";
        memory.value= "";
        primaryValue = "";
        secondaryValue = "";
        isDivision = false;
    }else if (primaryValue.length > 0 && secondaryValue.length > 0 && isSubtraction === true) {
        primaryValue = parseFloat(primaryValue) - parseFloat(secondaryValue);
        memory.value = primaryValue;
        output.value = primaryValue;
        primaryValue = primaryValue.toString();
        secondaryValue = "";
        isSubtraction = false;
    }
})
//clear button, clears all variables and resets the calculator.
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

