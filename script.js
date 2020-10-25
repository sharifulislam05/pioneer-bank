document.getElementById("login-btn").addEventListener("click", function(){
    document.getElementById("login-page").style.display = "none";
    document.getElementById("balance-page").style.display = "block";
})
document.getElementById("add-deposit-btn").addEventListener("click", function(){
    let addDeposit = document.getElementById("add-deposit").value;
    let deposit = document.getElementById("deposit").innerText;
    deposit = parseFloat(deposit) + parseFloat(addDeposit);
    document.getElementById("deposit").innerText = deposit;
    balanceDisplay(addDeposit)
})
document.getElementById("withdraw-amount-btn").addEventListener("click", function(){
    let withdrawAmount = document.getElementById("withdraw-amount").value;
    let withdraw = document.getElementById("withdraw").innerText;
    withdraw = parseFloat(withdraw) + parseFloat(withdrawAmount);
    document.getElementById("withdraw").innerText = withdraw;
    balanceDisplay(-1 * withdrawAmount)
})

function balanceDisplay(inputAmount, id) {
    let totalBalance = document.getElementById("balance").innerText;
    totalBalance = parseFloat(totalBalance) + parseFloat(inputAmount);
    document.getElementById("balance").innerText = totalBalance;
    document.getElementById("add-deposit").value = "";
    document.getElementById("withdraw-amount").value = "";
}