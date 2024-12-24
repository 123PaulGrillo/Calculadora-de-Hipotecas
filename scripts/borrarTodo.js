const ctaborrarTodo = document.getElementById("ctaborrarTodo");

ctaborrarTodo.addEventListener("click", () => {
    const inputMortgageAmount = document.getElementById("inputMortgageAmount");
    const inputMortgageTerm = document.getElementById("inputMortgageTerm");
    const inputInterestRate = document.getElementById("inputInterestRate");
    
    inputMortgageAmount.value = "";
    inputMortgageTerm.value = "";
    inputInterestRate.value = "";
    
});
