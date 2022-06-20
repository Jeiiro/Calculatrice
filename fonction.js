const touches = [...document.querySelectorAll(".button")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
document.addEventListener("keydown", (e) => {
  const valeur = e.keyCode;
});
document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
});
const calculer = (valeur) => {
  if (listeKeycode.includes(valeur)) {
    console.log(listeKeycode);
  }
};
