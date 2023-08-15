document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const currentDepositString = depositField.value;
    const currentDeposit = parseFloat(currentDepositString);

    const depositAmountField = document.getElementById('deposit-amount');
    const preDepAmountString = depositAmountField.innerText;
    const preDipAmount = parseFloat(preDepAmountString);
    const preDepAmountFinal = preDipAmount + currentDeposit;
    depositAmountField.innerText = preDepAmountFinal;


    depositField.value = '';

    const preTotalAmountField = document.getElementById('total-amount');
    const preTotalAmountString = preTotalAmountField.innerText;
    const preTotalAmount = parseFloat(preTotalAmountString);
    preTotalAmountField.innerText = preTotalAmount + preDepAmountFinal;

})
document.getElementById('withdraw-btn').addEventListener('click', function () {
const withdrawField = document.getElementById('withdraw-field');
    const currentwithdrawString = withdrawField.value;
    const currentwithdraw = parseFloat(currentwithdrawString);

    const withdrawAmountField = document.getElementById('withdraw-amount');
    const prewithdrawAmountString = withdrawAmountField.innerText;
    const prewithdrawAmount = parseFloat(prewithdrawAmountString);
    const prewithdrawAmountFinal = prewithdrawAmount + currentwithdraw;
    withdrawAmountField.innerText = prewithdrawAmountFinal;


    withdrawField.value = '';

    const preTotalAmountField = document.getElementById('total-amount');
    const preTotalAmountString = preTotalAmountField.innerText;
    const preTotalAmount = parseFloat(preTotalAmountString);
    preTotalAmountField.innerText = preTotalAmount - prewithdrawAmountFinal;

})