//Funzioni di incremento, decremento & reset
function increment(){
    valoreIniziale++;
    counterText.textContent = valoreIniziale;

    if(valoreIniziale>0){
        counterText.style.color=("magenta");
    }else if (valoreIniziale===0){
        counterText.style.color= ("white");
    }
}

function decrement(){
    if(valoreIniziale===0 && impValoreMinore==false){
        alert("You cannot count negative numbers! Active it first using the button below!")
    }
    else{
        valoreIniziale--;
        counterText.textContent = valoreIniziale;
    }

    if(valoreIniziale<0){
        counterText.style.color=("red");
    }else if (valoreIniziale===0){
        counterText.style.color= ("white");
    }
        
    
}

function reset(){
    if(valoreIniziale===0){
        alert("The value is 0, you cannot reset it!")
    }else{
        valoreIniziale = 0;
        counterText.textContent = valoreIniziale;
    }
    
}

btnAdd.addEventListener("click", increment);
btnRem.addEventListener("click", decrement);
btnRes.addEventListener("click", reset);