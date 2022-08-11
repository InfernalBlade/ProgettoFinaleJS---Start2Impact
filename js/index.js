//Dichiarazione variabili del contenitore dei numeri e del valore iniziale del numero da contare
let valoreIniziale = 0;

/* Aggiunta numero contatore */
let mainContainer = document.querySelector(".container");
let counterText = document.createElement("h2");
counterText.classList.add("numero");
counterText.innerText = "0";
mainContainer.prepend(counterText);

/* Aggiunta pulsanti tramite codice Javascript */
let containerPulsanti = document.querySelector(".buttons");

let btnAdd = document.createElement("button");
btnAdd.classList.add("inc")
let btnRem = document.createElement("button");
btnRem.classList.add("dec")
let btnRes = document.createElement("button");
btnRes.classList.add("res")


btnAdd.innerHTML = "+";
btnRem.innerHTML = "-";
btnRes.innerHTML = "RESET";

containerPulsanti.appendChild(btnRem);
containerPulsanti.appendChild(btnRes);
containerPulsanti.appendChild(btnAdd);