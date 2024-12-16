//assign elements to variables
const illustrationPage = document.getElementById("right-side-container");
const resultsPage = document.getElementById("your-results-container");

const monthlyPay = document.getElementById("monthly-Payment");
const totalPay = document.getElementById("payment-over-term");

//mortgage amount container
const mortgageAmountContainer = document.getElementById("mortgage-amount");
const mortgageAmountErrorMessage = document.getElementById("mortgage-amount-error-message");

//mortgage term container
const mortgageTermContainer = document.getElementById("mortgage-term");
const mortgageTermErrorMessage = document.getElementById("mortgage-term-error-message");

//interest rate container
const interestRateContainer = document.getElementById("interest-rate");
const interestRateErrorMessage = document.getElementById("interest-rate-error-message");

//repayment and interest radio button section
const SelectedmortgageType = document.querySelector('input[name="mortgageType"]:checked');
const rOrIErrorMessage = document.getElementById("rOrI-error-message");

//calculate repayments button
const btn = document.getElementById("btn");

//radio container
const radioContainer = document.getElementsByClassName("repayment-and-interest");


//code to change signs when there is an error
const mortgageSign = document.querySelector('#mortgage-amount-container .input-sign');
const mortgageTermSign = document.querySelector('#mortgage-container .input-sign');
const interestRateSign = document.querySelector('#interest-rate-container .input-sign');

//making the inputs active when they're in focus
mortgageAmountContainer.addEventListener('click', () => {
    mortgageSign.classList.add('active');
})
mortgageAmountContainer.addEventListener('blur', () => {
    mortgageSign.classList.remove('active');
})

mortgageTermContainer.addEventListener('click', () => {
    mortgageTermSign.classList.add("active");
})
mortgageTermContainer.addEventListener('blur', () => {
    mortgageTermSign.classList.remove("active");
})

interestRateContainer.addEventListener("click", () => {
    interestRateSign.classList.add("active");
})
interestRateContainer.addEventListener("blur", () => {
    interestRateSign.classList.remove("active");
})


// JavaScript code
//activate btn with logics 
btn.addEventListener('click', () => {
    //add parseFloat to input containers so user inputs are converted to numbers and can accept decimals
    const principal = parseFloat(mortgageAmountContainer.value);
    const yrs = parseFloat(mortgageTermContainer.value);
    const interest = parseFloat(interestRateContainer.value);
    const SelectedmortgageType = document.querySelector('input[name="mortgageType"]:checked');

    

    let isValid = true;

    if(isNaN(principal) || principal <= 0){
        mortgageAmountErrorMessage.classList.add("visible");
        mortgageSign.classList.add("red");
        mortgageAmountContainer.style.borderColor = "red";
        isValid = false;
    } else {
        mortgageAmountErrorMessage.classList.remove("visible");
        mortgageSign.classList.remove("red");
        mortgageAmountContainer.style.borderColor = "";
    }

    if(isNaN(yrs) || yrs <= 0){
        mortgageTermErrorMessage.classList.add("visible");
        mortgageTermSign.classList.add("red");
        mortgageTermContainer.style.borderColor = "red";
        isValid = false;
    } else {
        mortgageTermErrorMessage.classList.remove("visible");
        mortgageTermSign.classList.remove("red");
        mortgageTermContainer.style.borderColor = "";
    }

    if(isNaN(interest) || interest <= 0){
        interestRateErrorMessage.classList.add("visible");
        interestRateSign.classList.add("red");
        interestRateContainer.style.borderColor = "red";
        isValid = false;
    } else {
        interestRateErrorMessage.classList.remove("visible");
        interestRateSign.classList.remove("red");
        interestRateContainer.style.borderColor = "";
    }

    
    if(!SelectedmortgageType){
        rOrIErrorMessage.classList.add("visible");
    } else {
        rOrIErrorMessage.classList.remove("visible");
    }


    if(isValid){
        let monthlyPayment = 0;
        let totalPayment = 0;

        illustrationPage.style.display = "none";
        resultsPage.style.display ="block"


        if(SelectedmortgageType.value === "repayment"){
            const monthlyRate = (interest / 100) / 12;
            const n = yrs * 12;


            monthlyPayment =(principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
            totalPayment = monthlyPayment * n;

        } else if (SelectedmortgageType.value === "interest-only"){
            monthlyPayment = (principal * interest) / 12;
            totalPayment = monthlyPayment * yrs * 12;

        }
        
        monthlyPay.innerText = `$${monthlyPayment.toFixed(2)}`;
        totalPay.innerText = `$${totalPayment.toFixed(2)}`;

        } else {
        monthlyPay.innerText = "";
        totalPay.innerText = "";

        illustrationPage.style.display = "none";
        resultsPage.style.display ="block"

    }
})

