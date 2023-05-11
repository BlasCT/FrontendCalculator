//inputs
const inputBill = document.querySelector("#input-bill");
const numberPeople = document.querySelector("#number-people");

//buttons
const porcentageFive = document.querySelector("#percentage-5");
const porcentageTeen = document.querySelector("#percentage-10");
const porcentageQu = document.querySelector("#percentage-15");
const porcentageVe = document.querySelector("#percentage-25");
const porcentageCi = document.querySelector("#percentage-50");
const reset = document.querySelector(".reset");

//span
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
//array

/** 
 *const arrayPorcentage = [
  porcentageFive,
  porcentageTeen,
  porcentageQu,
  porcentageVe,
  porcentageCi,
];
 * 
*/


/**
 * 
 * arrayPorcentage.forEach(function (value) {
  value.addEventListener("click", function () {
    const bill = parseFloat(inputBill.value);
    const people = parseFloat(numberPeople.value);

    if (!bill || !people) {
      return alert("ERROR: Invalid bill");
    }
    if (value === porcentageFive) {
      const result = (bill * 0.05) / people;
      const resultTotal = (bill + bill * 0.05) / people;
      tip.innerHTML = `S/ ${result.toFixed(2)}`;
      total.textContent = `S/ ${resultTotal.toFixed(2)}`;
      return;
    }
    if (value === porcentageTeen) {
      const result = (bill * 0.1) / people;
      const resultTotal = (bill + bill * 0.1) / people;
      tip.innerHTML = `S/ ${result.toFixed(2)}`;
      total.textContent = `S/ ${resultTotal.toFixed(2)}`;
      return;
    }
    if (value === porcentageQu) {
      const result = (bill * 0.15) / people;
      const resultTotal = (bill + bill * 0.15) / people;
      tip.innerHTML = `S/ ${result.toFixed(2)}`;
      total.textContent = `S/ ${resultTotal.toFixed(2)}`;
      return;
    }
    if (value === porcentageVe) {
      const result = (bill * 0.2) / people;
      const resultTotal = (bill + bill * 0.2) / people;
      tip.innerHTML = `S/ ${result.toFixed(2)}`;
      total.textContent = `S/ ${resultTotal.toFixed(2)}`;
      return;
    }
    if (value === porcentageCi) {
      const result = (bill * 0.5) / people;
      const resultTotal = (bill + bill * 0.5) / people;
      tip.innerHTML = `S/ ${result.toFixed(2)}`;
      total.textContent = `S/ ${resultTotal.toFixed(2)}`;
      return;
    }
  });
});
 */

function mostrar(valor) {
  const decimalValor = parseFloat(valor / 100);
  const bill = parseFloat(inputBill.value);
  const people = parseFloat(numberPeople.value);
  if (!bill || !people) {
    return alert("ERROR: Invalid bill");
  }
  const result = (bill * decimalValor) / people;
  const resultTotal = (bill + bill * decimalValor) / people;
  tip.innerHTML = `S/ ${result.toFixed(2)}`;
  total.textContent = `S/ ${resultTotal.toFixed(2)}`;
}

reset.addEventListener("click", function () {
  tip.textContent = `S/ 0.00`;
  total.textContent = `S/ 0.00`;
  inputBill.value =``;
  numberPeople.value =``;
  inputBill.focus();
});
//
