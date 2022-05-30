console.log("test");
let button_array = document.querySelectorAll(".button");
let operator_array = document.querySelectorAll(".operator");
let clear = document.getElementById("clear");
let container = document.getElementById("resultat");
let nombre = "";
let formule = [];
console.log("tableau de bouton", button_array);
for (let i = 0; i < button_array.length; i++) {
  console.log(`element du tableau à l'index ${i} : ${button_array[i].value}`);
  button_array[i].addEventListener("click", () => {
    document.getElementById("number").value = button_array[i].value;
    console.log(button_array[i].value);
    nombre = nombre + button_array[i].value;
    console.log(nombre);
  });
}
operator_array.forEach((operator, index) => {
  operator.addEventListener("click", () => {
    console.log(operator.value, index);
    if (nombre.length == 0) return;
    if (nombre.length) {
      formule.push(nombre);
      nombre = "";
      formule.push(operator.value);
      console.log(formule);
    }
  });
});
function calcul() {
  let resultat = 0;
  let a = 0;
  let b = 0;
  formule.forEach((item, index) => {
    if (item == "+") {
      resultat = addition(
        parseFloat(formule[index - 1]),
        parseFloat(formule[index + 1])
      );
    } else if (item == "-") {
      resultat = soustraction(
        parseFloat(formule[index - 1]),
        parseFloat(formule[index + 1])
      );
    } else if (item == "*") {
      resultat = multiplication(
        parseFloat(formule[index - 1]),
        parseFloat(formule[index + 1])
      );
    } else if (item == "/") {
      resultat = division(
        parseFloat(formule[index - 1]),
        parseFloat(formule[index + 1])
      );
    } else console.log(resultat);
  });
  formule = [resultat];
}
container.addEventListener("click", () => {
  formule.push(nombre);
  nombre = "";
  calcul();
});
function addition(a, b) {
  return a + b;
}
function soustraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
