let calculation = eval(JSON.parse(localStorage.getItem('calculation')));

if (calculation === null) {
  calculation = '';
}
displayCalculation();

function updateCalculation(number) {
  calculation += `${number}`;
  localStorage.setItem('calculation', JSON.stringify(calculation));
  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.js-display-calculation')
    .innerHTML = calculation;
}
