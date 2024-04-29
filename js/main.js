// reset
'use strict'

// dichiarare delle var per Nome, età e km, recuperando il valore dal campo input:
const userName = document.getElementById('nome-user');
console.log({userName});
const kmUser = document.getElementById('km-user');
console.log({kmUser});
const etaUser = document.getElementById('eta-user');
console.log({etaUser});

// applicare costanti per prezzo km e sconti:
const prezzoKm = 0.21;
const prezzoMinorenne = 20;
const prezzoOver65 = 40;


// andare in ascolto dei campi input quando premiamo su submit:
const submit = document.getElementById('submit');
submit.addEventListener('click', function(e){
    e.preventDefault();

    let prezzo = Number(kmUser.value) * prezzoKm;
    console.log(prezzo);

    console.log(userName.value);
    console.log(kmUser.value);
    console.log(etaUser.value);

    

    if (etaUser.value === 'minorenne'){
        const prezzoSconto =  prezzo / 100 * prezzoMinorenne;
        console.log(prezzoSconto);
        prezzo -= prezzoSconto;
    
    } else if (etaUser.value === 'over65'){
        const prezzoSconto =  prezzo / 100 * prezzoOver65;
        console.log(prezzoSconto);
        prezzo -= prezzoSconto;
    } 

    // prezzo.toFixed(2);
    console.log(`Il prezzo del bigleitto è di € ${prezzo.toFixed(2)}.`);
});
