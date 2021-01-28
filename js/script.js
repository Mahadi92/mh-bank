// Login button
const logIn = document.getElementById('login');
logIn.addEventListener('click', function () {
    const formArea = document.getElementById('form-area');
    formArea.style.display = "none";

    const transictionArea = document.getElementById('transiction-area');
    transictionArea.style.display = "block";
})


//Depoosite button handlar 
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
    const depositNumber = getInputNumber('depositAmount');

    updateAmount('currentDiposit', depositNumber);
    updateAmount('currentBlance', depositNumber);


    document.getElementById('depositAmount').value = "";
})
//Withdrow button handlar 
const withdrowBtn = document.getElementById('addWithdrow');
withdrowBtn.addEventListener('click', function () {
    const withdrowNumber = getInputNumber('withdrowAmount');
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}

function updateAmount(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;

}