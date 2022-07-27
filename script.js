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


let currentValue = 0;
let secondaryValue =0;
let isAddition = false;
let isSubtraction = false;
let isMultiplication = false;
let isDivision = false;



buttonOne.addEventListener("click", () => {
    if (currentValue >= 0) {
        secondaryValue = buttonOne.value;
        output.value = buttonOne.value;
    } else {
        currentValue = buttonOne.value;
        output.value= buttonOne.value;
    }
})

buttonTwo.addEventListener("click", () => {
    if (currentValue >= 0) {
        secondaryValue = buttonTwo.value;
        output.value = buttonTwo.value;
    } else {
        currentValue = buttonTwo.value;
        output.value= buttonTwo.value;
    }
})




buttonEquals.addEventListener("click", () =>{
    output.value = currentValue;
})
