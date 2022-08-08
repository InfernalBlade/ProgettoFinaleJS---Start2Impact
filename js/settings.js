/* FILE JS PER IL PULSANTE IMPOSTAZIONI */



//Aggiunta funzione di impostazioni, l'utente può ora decidere se contare i numeri negativi oppure no!
let impValoreMinore = false;

let set = document.querySelector(".set");
function negativeNumbers(){
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
set.addEventListener("click", negativeNumbers);