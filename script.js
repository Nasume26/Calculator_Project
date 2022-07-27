const buttonOne = document.querySelector("#buttonOne");
const buttonTwo= document.querySelector("#buttonTwo");
const buttonThree = document.querySelector("#buttonThree");
const buttonFour = document.querySelector("#buttonFour");
const buttonFive = document.querySelector("#buttonFive");
const buttonSix = document.querySelector("#buttonSix");
const buttonSeven = document.querySelector("#buttonSeven");
const buttonEight = document.querySelector("#buttonEight");
const buttonNine = document.querySelector("#buttonNine");
const buttonZero = document.querySelector("#buttonZero");
const buttonAdd = document.querySelector("#buttonAdd");
const buttonSubtract = document.querySelector("#buttonSubtract");
const buttonMultiply = document.querySelector("#buttonMultiply");
const buttonDivide = document.querySelector("#buttonDivide");
const buttonEquals =document.querySelector("#buttonEquals")
const output = document.querySelector("output")


let primaryValue = "";
let secondaryValue = "";
let isAddition = false;
let isSubtraction = false;
let isMultiplication = false;
let isDivision = false;

//Create a "stored data" output, so on secondary value area have another output box on top that displays Primary Value 


buttonOne.addEventListener("click", () => {
    if (primaryValue >= 0 && isAddition === true || isSubtraction === true || isMultiplication === true || isDivision === true) {
        secondaryValue = secondaryValue + buttonOne.value;
        output.value = secondaryValue;
    } else {
        primaryValue = primaryValue + buttonOne.value;
        output.value= primaryValue;
    }
})
//Create button click events that set the subsequent operators flag to true.

//CLICK ON MULTI if (isAddition=false && isSubtraction = false && isDivision = false ){ isMultiplication = true}




//create an if statement that will perform the operation according to which flag is set to true.
//if (isAddition = true && secondaryValue > 0) { output.value = Number(primaryValue) + Number(secondayValue)}
buttonEquals.addEventListener("click", () =>{
    if (primaryValue > 0) {
        console.log(Number(primaryValue) + Number(primaryValue))
    }
    output.value = primaryValue;
})

//Create a Clear option that clears addition etx flags and sets the values back to ""