//Dichiarazione variabili del contenitore dei numeri e del valore iniziale del numero da contare
//aggiunto pulsante "impostazioni" dove l'utente decide se contare o no valori minori 0 - di default l'app non lo fa
let containerNumeri = document.getElementById("numero");
let valoreIniziale = 0;
let impValoreMinore = false;


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
    if(valoreIniziale===0 && impValoreMinore==false){
        alert("Il valore è 0!")
    }
    else{
        valoreIniziale--;
        containerNumeri.textContent = valoreIniziale;
    }
    
}

function reset(){
    if(valoreIniziale===0){
        alert("Il valore è 0!")
    }else{
        valoreIniziale = 0;
        containerNumeri.textContent = valoreIniziale;
    }
    
}

incremento.addEventListener("click", increment);
decremento.addEventListener("click", decrement);
resetto.addEventListener("click", reset);

//Aggiunta funzione di impostazioni, l'utente può ora decidere se contare i numeri negativi oppure no!

let set = document.querySelector(".set");
function settings(){
    if(impValoreMinore==true){
        impValoreMinore=false;
        set.style.backgroundColor = "";
        set.style.color = "";
        valoreIniziale = 0;
        containerNumeri.textContent = valoreIniziale;

    }else if (impValoreMinore==false){
        impValoreMinore=true;
        set.style.backgroundColor = "#cc00ff";
        set.style.color = "white";
        valoreIniziale = 0;
        containerNumeri.textContent = valoreIniziale;
    }

}
set.addEventListener("click", settings);