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


let primaryValue = 0;
let secondaryValue =0;
let isAddition = false;
let isSubtraction = false;
let isMultiplication = false;
let isDivision = false;



buttonOne.addEventListener("click", () => {
    if (primaryValue >= 0 && isAddition === true || isSubtraction === true || isMultiplication === true || isDivision === true) {
        secondaryValue = secondaryValue + Number(buttonOne.value);
        output.value = secondaryValue;
    } else {
        primaryValue = primaryValue + Number(buttonOne.value);
        output.value= primaryValue;
    }
})

buttonTwo.addEventListener("click", () => {
    if (primaryValue >= 0 && isAddition === true || isSubtraction === true || isMultiplication === true || isDivision === true) {
        secondaryValue = buttonTwo.value;
        output.value = buttonTwo.value;
    } else {
        primaryValue = buttonTwo.value;
        output.value= buttonTwo.value;
    }
})




buttonEquals.addEventListener("click", () =>{
    output.value = primaryValue;
})
