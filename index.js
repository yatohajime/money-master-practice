function getTextElementById(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.value;
    const elementValue = parseInt(elementFieldString);
    elementField.value = '';
    return elementValue;
}

function setTextElementById(locationId, value){
    const settingLocation = document.getElementById(locationId);
    settingLocation.innerText = value;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
   const income = getTextElementById('income-field');
   const food = getTextElementById('food-field');
   const rent = getTextElementById('rent-field');
   const clothes = getTextElementById('clothes-field');

   const totalExpense = food + rent + clothes;
   setTextElementById('total-expense-element', totalExpense);

   const primaryBalance = income - totalExpense;
   setTextElementById('remaining-balance-element', primaryBalance);
})

document.getElementById('percentage-button').addEventListener('click', function(){
    const remainingBalanceElement = document.getElementById('remaining-balance-element');
    const remainingBalanceString = remainingBalanceElement.innerText;
    const remainingBalance = parseInt(remainingBalanceString);

    const savingPercentage = getTextElementById('saving-percentage') / 100;
    const savings = remainingBalance * savingPercentage;

    setTextElementById('savings-amount-element', savings);

    const finalBalance = remainingBalance - savings;
    setTextElementById('final-balance-element', finalBalance);
})