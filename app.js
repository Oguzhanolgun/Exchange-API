const amountElement= document.getElementById("amount");
const firstElement = document.getElementById("firstCurrency");
const secondElement = document.getElementById("secondCurrency");

currency = new Currency("USD", "TRY");
ui = new UI(firstElement, secondElement);
eventListeners();

function eventListeners() {
    amount.addEventListener("input", exchangeCurrency);
    firstElement.onchange = function() {
       currency.changeFirstCurrency(firstElement.options[firstElement.selectedIndex].textContent);
       ui.changeFirst();
    }
    secondElement.onchange = function() {
        currency.changeSecondCurrency(secondElement.options[secondElement.selectedIndex].textContent);
        ui.changeSecond();
    }
}

function exchangeCurrency() {
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result => ui.displayResult(result))
    .catch(err => alert(err))
}
