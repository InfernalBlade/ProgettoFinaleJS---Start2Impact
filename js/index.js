//Dichiarazione variabili del contenitore dei numeri e del valore iniziale del numero da contare
let containerNumeri = document.getElementById("numero");
let valoreIniziale = 0;

//Dichiarazione variabili incremento e decremento usate nelle funzioni per assegnare l'azione ai pulsanti +/- & reset
let incremento = document.querySelector(".inc");
let decremento = document.querySelector(".dec");
let resetto = document.querySelector(".res");

//Funzioni di incremento, decremento & reset
function increment(){
    valoreIniziale++;
    containerNumeri.textContent = valoreIniziale;
}

function decrement(){
    if(valoreIniziale===0){
        alert("Il valore è 0!")
    }
    else{
        valoreIniziale--;
        containerNumeri.textContent = valoreIniziale;
    }
    
}

function reset(){
    valoreIniziale = 0;
    containerNumeri.textContent = valoreIniziale;
}

incremento.addEventListener("click", increment);
decremento.addEventListener("click", decrement);
resetto.addEventListener("click", reset);