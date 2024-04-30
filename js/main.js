// reset
'use strict'

// dichiarare delle var per Nome, età e km, recuperando il valore dal campo input:
const userName = document.getElementById('nome-user');
console.log({userName});
const kmUser = document.getElementById('km-user');
console.log({kmUser});
const etaUser = document.getElementById('eta-user');
console.log({etaUser});

// definisco var per visualizzare la sezione dettaglio biglietto
const dettaglioBiglietto = document.querySelector('.biglietto_output');

// dichiaro var dettaglio biglietto per poi immettere il risultato:
const nomePasseggero = document.querySelector('.nome-passeggero');
const offerta = document.querySelector('.offerta');
let carrozza = document.querySelector('.carrozza');
let codice = document.querySelector('.codice');
const costoBiglietto = document.querySelector('.costo-biglietto');

// applicare costanti per prezzo km e sconti:
const prezzoKm = 0.21;
const prezzoMinorenne = 20;
const prezzoOver65 = 40;


// andare in ascolto dei campi input quando premiamo su submit:
const submit = document.getElementById('submit');
submit.addEventListener('click', function(e){
    e.preventDefault();

    // definisco prezzo e lo calcolo
    let prezzo = Number(kmUser.value) * prezzoKm;
    console.log(prezzo);

    console.log(userName.value);
    console.log(kmUser.value);
    console.log(etaUser.value);

    // rendo visibile la sezione dettaglio biglietto
    dettaglioBiglietto.style.display = 'block'

    // definisco condizioni in base all'età passeggero
    if (etaUser.value === 'minorenne'){
        const prezzoSconto =  prezzo / 100 * prezzoMinorenne;
        console.log(prezzoSconto);
        prezzo -= prezzoSconto;
    
    } else if (etaUser.value === 'over65'){
        const prezzoSconto =  prezzo / 100 * prezzoOver65;
        console.log(prezzoSconto);
        prezzo -= prezzoSconto;
    } 
    prezzo = prezzo.toFixed(2)
    // prezzo.toFixed(2);
    console.log(`Il prezzo del bigleitto è di € ${prezzo}.`);

    // inserire i risulti sulla sezione dettaglio biglietto
    nomePasseggero.innerText = userName.value;
    offerta.innerHTML = etaUser.value;

    let numeroCarrozza = Math.floor(Math.random() * 15) + 1;
    carrozza.innerHTML = numeroCarrozza;

    let numeroCodice = Math.floor(Math.random() * 99999) + 10000;
    codice.innerHTML = numeroCodice;

    costoBiglietto.innerHTML = `€ ${prezzo}`;
});

// pulisco gli input con il tasto annulla:
const annulla = document.getElementById('clear');
annulla.addEventListener('click', function(e){
    e.preventDefault();
    console.log('sto annullando');
    userName.value = '';
    kmUser.value = '';
    etaUser.value = etaUser.options[0].value;
   
});

// FINE

    
    

    
    
    
    

    
    