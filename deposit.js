document.getElementById("deposit-btn").addEventListener('click',function(){
    const newDepositElement = document.getElementById("deposit");
    const newDeposit =parseFloat(newDepositElement.value);
    newDepositElement.value ='';
    if(isNaN(newDeposit) || newDeposit <= 0){
        alert("Enter valid input")
        return
    }
    // deposit mony area:
    const previousDepositElement = document.getElementById("deposit-balance");
    const previousDepositBalance = parseFloat(previousDepositElement.innerText);
    const totalDepositBalance = previousDepositBalance + newDeposit;
    previousDepositElement.innerText= totalDepositBalance;

    // Total Balance area updated for new deposit:
    const totalBalanceElement = document.getElementById("total-balance");
    const totalBalance = parseFloat(totalBalanceElement.innerText);
    const updatedBalance = totalBalance + newDeposit;
    totalBalanceElement.innerText=updatedBalance;

})