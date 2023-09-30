// add event for deposit amount
document.getElementById('btn_deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit_field');
    const previousDepositAmount = getTextElementById('previous_deposit');
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    setTextElementValueById('previous_deposit', newDepositTotal);
    const previousBalanceTotal = getTextElementById('previous_total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('previous_total', newBalanceTotal);
});

// start withdraw field event

document.getElementById('btn_withdraw').addEventListener('click', function () {
    const newWithDrawAmount = getInputFieldValueById('withdraw_field');
    const previousWithdrawAmount = getTextElementById('pre_withdraw_amount');
    const totalWithdrawAmount = previousWithdrawAmount + newWithDrawAmount;
    setTextElementValueById('pre_withdraw_amount', totalWithdrawAmount);
    const previousBalanceTotal = getTextElementById('previous_total');
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    setTextElementValueById('previous_total', newBalanceTotal)
})