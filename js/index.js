//Dichiarazione variabili del contenitore dei numeri (id riferito al codice html) e del valore iniziale del numero da contare
let containerNumeri = document.getElementById("numero");
let valoreIniziale = 0;


//Dichiarazione variabili incremento e decremento usate nelle funzioni per assegnare l'azione ai pulsanti +/-
let incremento = document.querySelector(".inc");
let decremento = document.querySelector(".dec");



//Funzioni di incremento e decremento
function increment(){
    valoreIniziale++;
    containerNumeri.textContent = valoreIniziale;
}
function decrement(){
    valoreIniziale--;
    containerNumeri.textContent = valoreIniziale;
}

incremento.addEventListener("click", increment);
decremento.addEventListener("click", decrement);



