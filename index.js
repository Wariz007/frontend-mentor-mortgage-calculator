//assign elements to variables

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
const rOrI = document.querySelectorAll('input[type="radio"]');
const rOrIErrorMessage = document.getElementById("rOrI-error-message");

//calculate repayments button
const btn = document.getElementById("btn");