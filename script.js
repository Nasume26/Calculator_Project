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
const output = document.querySelector("output")


let currentValue = 0;

buttonOne.addEventListener("click", () => {
    currentValue = 1;
})
output.value = currentValue;