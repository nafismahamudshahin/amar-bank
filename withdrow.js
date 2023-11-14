document.getElementById("withdrow-btn").addEventListener('click',function(){
    const newWithdrowElement = document.getElementById("withdrow");
    const newWithdrow = parseFloat(newWithdrowElement.value);
    newWithdrowElement.value='';
    // check usur withdrow input valid or invalid
    if(isNaN(newWithdrow) || newWithdrow <= 0){
        alert("invalid input try agin.");
        return;
    }
    const balanceElements = document.getElementById("total-balance");
    const totalBalances = parseFloat(balanceElements.innerText);
    if(totalBalances < newWithdrow){
        alert("You cannot withdraw more than this amount",totalBalances);
        return;
    }

    // withdrow calculation for update width balance:
    const previousWithdrowElement = document.getElementById("withdrow-balance");
    const previousWithdrowBalance = parseFloat(previousWithdrowElement.innerText);
    const totalWithdrow = previousWithdrowBalance + newWithdrow;
    previousWithdrowElement.innerText=totalWithdrow;

    // total balance updated for withdrow :
  
    const totalUpdatedBalances = totalBalances - newWithdrow;
    balanceElements.innerText = totalUpdatedBalances;
})